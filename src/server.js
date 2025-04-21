import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import errorHandler from "./middleware/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/", userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Table creation before server is booting
createUserTable();

// API to check database connection
app.get("/database_info", async(req, res) => {
    const [result] = await pool.query("SELECT DATABASE();");
    res.send(`Current database name : ${result[0]['DATABASE()']}`)
});

// Server instance
app.listen(port, ()=>{
    console.log(`Server is running on ${port}\nPress Control+C to stop the server instance`)
});
