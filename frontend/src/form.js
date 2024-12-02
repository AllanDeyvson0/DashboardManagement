import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  width: 1000px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 145px;
  padding: 0 10px;
  border: 1px solid #bbb;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  flex-grow: 1;
  &:hover {
    background-color: #1a5bb8;
  }
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  //Preenche o formulário com os dados do onEdit
  useEffect(() => {
    if (onEdit) {
        const user = ref.current;

        user.nome.value = onEdit.nome;
        user.email.value = onEdit.email;
        user.senha.value = onEdit.senha;
        user.telefone.value = onEdit.telefone;

        if (onEdit.data_nasc) {           
            const dateParts = onEdit.data_nasc.split("/"); 
            const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; 
            user.data_nasc.value = formattedDate; 
        }
    }
  }, [onEdit]);


  //Verifica os dados inseridos
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const user = ref.current;
  
    if (                    
      !user.nome.value ||
      !user.email.value ||
      !user.senha.value ||
      !user.telefone.value ||
      !user.data_nasc.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }
  
    if (user.senha.value.length < 8) {
      return toast.warn("A senha deve conter no mínimo 8 dígitos.");
    }
  
    try {
      const userData = {
        nome: user.nome.value,
        email: user.email.value,
        senha: user.senha.value,
        telefone: user.telefone.value,
        data_nasc: user.data_nasc.value,
      };
      
      //Envia pra API e espera resultado do email
      if (onEdit) {   
        await axios
          .put(`http://localhost:8800/${onEdit.id}`, userData)   
          .then(({ data }) => toast.success(data))
          .catch(({ response }) => {
            if (response.data === "E-mail usado.") {
              toast.warn("E-mail já está em uso.");
            } else {
              toast.error(response.data);
            }
          });
      } else {      
        await axios
          .post("http://localhost:8800", userData)        
          .then(({ data }) => toast.success(data))
          .catch(({ response }) => {
            if (response.data === "E-mail usado.") {
              toast.warn("E-mail já está em uso.");
            } else {
              toast.error(response.data);
            }
          });
      }
    } catch (error) {
      toast.error("Erro ao salvar usuário.");
    }
  
    user.nome.value = "";
    user.email.value = "";
    user.senha.value = "";
    user.telefone.value = "";
    user.data_nasc.value = "";
  
    //Limpa o formulário 
    setOnEdit(null);
    getUsers();
  };
  

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>

      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>

     <InputArea>
        <Label>Senha</Label>
        <Input name="senha" type="password" />
      </InputArea>

      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone" />
      </InputArea>

      <InputArea>
        <Label>Data Nascimento</Label>
        <Input name="data_nasc" type="date" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;