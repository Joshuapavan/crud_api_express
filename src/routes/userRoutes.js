import express from "express";
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from "../controllers/usersController.js";
const router = express.Router();

router.get("/user", getAllUsers);
router.post("/user", createUser);

router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);


export default router;