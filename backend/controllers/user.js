import { db } from "../database.js"; // Importa o banco de dados utilizado 

export const getUsers = (_, res) => {    
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json (err); // Se tiver erro retorna
        return res.status(200).json(data); // Se não, retorna lista de usuários
    });
}

export const addUser = (req, res) => {
    const { nome, email, senha, telefone, data_nasc } = req.body;

    //Verifica Senha
    if (senha.length < 8) {
        return res.status(400).json("A senha deve conter no mínimo 8 dígitos.");
    }

    //Verifica Idade
    const idade = new Date(data_nasc);
    const age = new Date().getFullYear() - idade.getFullYear();
    const month = new Date().getMonth() - idade.getMonth();
    if (month < 0 || (month === 0 && new Date().getDate() < idade.getDate())) {
        age--;
    }
    if (age < 18) {
        return res.status(400).json("Usuário menor de idade.");
    }

    //Check de Email
    const CheckEmail = "SELECT * FROM usuarios WHERE email = ?";
    db.query(CheckEmail, [email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length > 0) {
            return res.status(400).json("E-mail usado.");
        }

        const q = "INSERT INTO usuarios(`nome`, `email`, `senha`, `telefone`, `data_nasc`) VALUES(?)";   
        const values = [nome, email, senha, telefone, data_nasc];

        db.query(q, [values], (err) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Usuário adicionado com sucesso.");
        });
    });
};

export const updateUser = (req, res) => {
    const { nome, email, senha, telefone, data_nasc } = req.body;

    //Verifica Senha
    if (senha.length < 8) {
        return res.status(400).json("A senha deve conter no mínimo 8 dígitos.");
    }

    //Verifica Idade
    const idade = new Date(data_nasc);
    const age = new Date().getFullYear() - idade.getFullYear();
    const month = new Date().getMonth() - idade.getMonth();
    if (month < 0 || (month === 0 && new Date().getDate() < idade.getDate())) {
        age--;
    }
    if (age < 18) {
        return res.status(400).json("Usuário menor de idade.");
    }

    //Check de Email
    const CheckEmail = "SELECT * FROM usuarios WHERE email = ? AND id != ?";
    db.query(CheckEmail, [email, req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length > 0) {
            return res.status(400).json("E-mail usado.");
        }

        const q = "UPDATE usuarios SET `nome` = ?, `email` = ?, `senha` = ?, `telefone` = ?, `data_nasc` = ? WHERE `id` = ?"; 
        const values = [nome, email, senha, telefone, data_nasc];

        db.query(q, [...values, req.params.id], (err) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Usuário atualizado com sucesso.");
        });
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ? ";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};
