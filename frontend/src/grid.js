import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    width: 1200px;
    margin: 10px auto;
`;

const SearchContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SearchInput = styled.input`
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

//Edição dos botões
const actionColors = {      
    edit: "#007bff",  
    delete: "#dc3545",  
  };

const IconButton = styled.div`
    cursor: pointer;
    &:hover {
    color: ${(props) => actionColors[props.action] || "#000"}; 
    }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")}; 
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
    
    const [searchTerm, setSearchTerm] = useState(""); 
    const [filteredUsers, setFilteredUsers] = useState(users); 

    //Atualiza o filteredUsers sempre que users mudar
    useEffect(() => {               
        setFilteredUsers(users); 
    }, [users]);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        
        //Filtra os usuários com base no nome ou email
        const filtered = users.filter(user =>   
            user.nome.toLowerCase().includes(term.toLowerCase()) ||
            user.email.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredUsers(filtered); 
    };

    //Substitui a senha por asteriscos visualmente
    const hidePassword = (senha) => {
        return '*'.repeat(senha.length); 
    };

    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Deseja confirmar a exclusão?");

        if (confirmed) {
            await axios
                .delete("http://localhost:8800/" + id)
                .then(({ data }) => {
                    const newArray = users.filter((user) => user.id !== id);
                    setUsers(newArray);
                    toast.success(data);
                })
                .catch(({ data }) => toast.error(data));
            setOnEdit(null);
        } else {
            toast.info("Exclusão cancelada.");
        }
    };

    return(
        <div>
            <SearchContainer>
                <SearchInput 
                    type="text" 
                    placeholder="Pesquisar por nome ou email..." 
                    value={searchTerm}
                    onChange={handleSearch} 
                />
            </SearchContainer>

            <Table>
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th>Email</Th>
                        <Th>Senha</Th>
                        <Th>Telefone</Th>
                        <Th>Data Nascimento</Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredUsers.map((item, i) => (
                        <Tr key={i}>
                            <Td width="25%">{item.nome}</Td>
                            <Td width="25%">{item.email}</Td>
                            <Td width="15%">{hidePassword(item.senha)}</Td>
                            <Td width="15%">{item.telefone}</Td>
                            <Td width="15%">{item.data_nasc}</Td>
                            <Td alignCenter width="2.5%">
                                <IconButton action="edit" onClick={() => handleEdit(item)}>
                                    <FaEdit />
                                </IconButton>
                            </Td>
                            <Td alignCenter width="2.5%">
                                <IconButton action="delete" onClick={() => handleDelete(item.id)}>
                                    <FaTrash />
                                </IconButton>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
};

export default Grid;
