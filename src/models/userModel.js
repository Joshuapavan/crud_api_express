import pool from "../config/db.js";

export const getAllUserService = async () => {
    const [result] = await pool.query("SELECT * FROM users");
    return result;
};

export const createUserService = async (email, password) => {
    const  [result] = await pool.query("INSERT INTO users (email, password) VALUES (? , ?)", [email, password]);
    const [newUser] = await pool.query("SELECT * FROM users WHERE id = LAST_INSERT_ID()");
    return newUser[0];
};

export const getUserByIdService = async (id) => {
    const [result] = await pool.query("SELECT * FROM users WHERE id = ? ", [id])
    return result[0];
};

export const updateUserService = async (id, email, password) => {
    const result = await pool.query("UPDATE users SET email=?, password=? WHERE id=?", [email, password, id]);
    const [updatedUser] = await pool.query("SELECT * FROM users where id = ?", [id]);
    return updatedUser[0];
};

export const deleteUserService = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = ?", [id])
    return result.affectedRows > 0;
};
