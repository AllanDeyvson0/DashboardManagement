import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./form.js";
import Grid from "./grid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Facilita requisições HTTP

const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Title = styled.h2``;

function App(){  
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    //Realiza Requisição a API
    const getUsers = async () => {  
        try{
            const res = await axios.get("http://localhost:8800");
            const formattedUsers = res.data.map((user) => ({   
                ...user,
                data_nasc: new Date(user.data_nasc).toLocaleDateString("pt-BR") 
            }));
            setUsers(formattedUsers); 
        } catch(error){
            toast.error(error);
        }
    };

    //Busca na API sempre que "setUsers" é atualizado.
    useEffect(() => {
        getUsers();
    }, [setUsers]);

    return (
        <>
            <Container>
                <Title>DASHBOARD DE CONTROLE DE USUÁRIOS</Title>
                <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
                <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
            </Container>
            <ToastContainer autoClose={3000} position="bottom-left" />
            <GlobalStyle /> 
        </>
    );
}

export default App;
