import Sequelize from "sequelize";
import dotenv from 'dotenv';
dotenv.config()

const {DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_URL} = process.env

const db = new Sequelize(
    //OnLine
    DB_URL, {

    //Local
    // DB_NAME, DB_USER, DB_PASS, {
    // host: DB_HOST,
    // port: 5432,
    // dialect: 'postgres',
    
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;