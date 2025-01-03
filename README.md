# Controle Financeiro API

Esta é a API para o aplicativo de Controle Financeiro, construída com Node.js, Express, Sequelize e MySQL. A API permite gerenciar usuários, transações e categorias de despesas, com autenticação baseada em JSON Web Tokens (JWT).

## Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM (Object-Relational Mapper) para Node.js.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **bcrypt**: Biblioteca para hashing de senhas.
- **jsonwebtoken**: Biblioteca para criação e verificação de tokens JWT.

## Configuração do Projeto

### Pré-requisitos

- Node.js (v12 ou superior)
- MySQL

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/controle-financeiro-api.git
   cd controle-financeiro-api

2. Instale as dependências:
   ```terminal
   npm install

3. Configure as variáveis de ambiente: 
   Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
   ```
   DB_HOST=localhost
   DB_USER=seu-usuario
   DB_PASSWORD=sua-senha
   DB_NAME=controle_financeiro
   SECRET_KEY=sua-chave-secreta

4. Sincronize o banco de dados:
   ```
   npx sequelize-cli db:migrate

5. Inicie o servidor:
   ```
   npm start
