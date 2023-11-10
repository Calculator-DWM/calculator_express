require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres", // Altera o dialeto para PostgreSQL
    host: process.env.DB_HOST, // Altera para o endereço do seu servidor PostgreSQL
    port: process.env.DB_PORT, // Altera para a porta do seu servidor PostgreSQL
    username: process.env.DB_USERNAME, // Seu nome de usuário do PostgreSQL
    password: process.env.DB_PASSWORD, // Sua senha do PostgreSQL
    ssl: true, // Habilitar SSL
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  }
);

module.exports = sequelize;