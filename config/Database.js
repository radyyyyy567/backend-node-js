import { Sequelize } from "sequelize";

const db = new Sequelize('postgres://postgres:12345678@localhost:5432/crud_db', {
    dialect: 'postgres'
});

export default db;
