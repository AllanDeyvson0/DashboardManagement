import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js"; // Lida com a requisição da rota HTTP, retornando a lista de usuários.

const router = express.Router(); //Instância de um "roteador"

router.get("/", getUsers); 
router.post("/", addUser); 
router.put("/:id", updateUser); 
router.delete("/:id", deleteUser); 

export default router;