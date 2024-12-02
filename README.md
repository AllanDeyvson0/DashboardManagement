# DashboardUsuarios
Projeto de Dashboard de Controle de Usuários.

O projeto foi desenvolvido com objetivo da criação de uma Dashboard de Controle de Usuários.

## Tecnologias Utilizadas

- ReactJS
- NodeJS (Padrão REST)
- Express
- Styled-components 

## Instalação

Necessário ter o Node.JS e Yarn instalado, caso não tenha é necessário instalar o Node.JS e rodar os seguintes comandos no terminal do VSCode: 

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

npm init -y

npm install --global yarn

yarn add express nodemon mysql cors

## Execução

1. Clone o repositório:

2. Importe o arquivo usuarios.sql para o banco de dados que está utilizando com as seguintes definições:
(Arquivo usuarios.sql contém informações fictícias apenas para fins de testes da aplicação)
	host: "localhost"
	user: "root"
	database: "crud"

3. Acesse o terminal com "cd backend" e dê um "yarn start"
4. Acesse o terminal com "cd frontend" e dê um "yarn start"

## Funcionalidades

Cadastro de usuários: Criar, listar, editar e excluir.
Validações de dados: Verificação de e-mail único, senha de no mínimo 8 dígitos e idade mínima de 18 anos.

## Explicando as seções do projeto:

De início, separei em duas pastas "Backend" e "Frontend" a nível de organização. 

**Dentro do Backend, consta:**

__database.js__ -> Realiza a conexão com banco de dados

__user.js__ -> Importa o banco de dados e cria as principais "const" para uso. 

__users.js__ -> Responsável pela criação das rotas da API e lida com a requisição HTTP.

__index.js__ -> Importa as rotas criadas e "trata" para facilitar interpretação do servidor.

<br>

**Dentro do Frontend, consta:**

__index.html__ -> Corpo da página, criado apenas para puxar o id "root" e gerenciar com React.

__index.js__ -> "Mente" do projeto, puxa o root do index.html e aplica como const para manipulação no projeto.

__global.js__ -> Criado apenas para uma "estilização global/padrão".

__app.js__ -> Integração da Requisição HTTP com oque vem do usuário.

__form.js__ -> Design e parte lógica do formulário para inserir novos usuários. 

__grid.js__ -> Design e parte lógica da tabela que mostra as informações do retorno da API. 

<br>

A parte de senhas, foi escondida apenas visualmente com "*" por motivo de projeto apenas para fins didáticos e como dito antes, informações fictícias. Porém para melhor desenvolvimento poderia ter sido utilizado uma tecnologia para fazer hash da senha como por exemplo a biblioteca bcrypt.

## Dicas:

Disponibilizei o arquivo "usuarios.sql" para já haver informações, porém sinta-se avontade para realizar testes de acordo com os parâmetros passados na aba de "Funcionalidades".
