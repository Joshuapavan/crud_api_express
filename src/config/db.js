import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql2.createPool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
}).promise();

pool.getConnection()
    .then(connection => {
        console.log("Database Connected Successfully");
        connection.release();
    })
    .catch(err => {
        console.log("Error connecting to the database", err)
    });

export default pool;