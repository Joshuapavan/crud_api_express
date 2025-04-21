import pool from "../config/db.js";

const createUserTable = async () => {
    const query =  `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `;

    try{
        pool.query(query);
        console.log("Created User Table");
    }
    catch(err){
        console.log("Error while creating the user table", err.message);
    }
};

export default createUserTable;