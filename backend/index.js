import express from "express"; 
import userRoutes from "./routes/users.js" // Importando as rotas 
import cors from "cors"; // Para adicionar cabeçalhos específicos do HTTP

const app = express(); 

app.use(express.json()); // Para o servidor interpretar requisições 
app.use(cors()); // Evita conflitos rodando localmente
app.use("/", userRoutes); 
app.listen(8800); 

