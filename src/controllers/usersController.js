// Standard response method

import { createUserService, deleteUserService, updateUserService, getAllUserService, getUserByIdService } from "../models/userModel.js";

const handleResponse = (res, success, statusCode , message, data = null) => {
    res.status(statusCode).json(
        {
            success,
            statusCode,
            message,
            data
        }
    );
};

export const createUser = async (req, res, next) => {
    const { email, password } = req.body;
    try{
        const newUser = await createUserService(email, password);
        handleResponse(res, true, 201, "Created user successfully", newUser);
    }
    catch(err){
        next(err);
    }
};

export const getAllUsers = async (req, res, next) => {
    try{
        const users = await getAllUserService();
        handleResponse(res, true, 200, "Successfully fetched all users", users);
    }
    catch(err){
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    const { id } = req.params
    try{
        const user = await getUserByIdService(id);
        handleResponse(res, true, 200, "Successfully fetched the user", user);
    }
    catch(err){
        next(err);
    }
};

export const updateUser = async (req, res, next) => {
    const { id } = req.params
    const { email, password } = req.body
    try{
        const user = await updateUserService(id, email, password);
        handleResponse(res, true, 200, "Successfully updated the user", user);
    }
    catch(err){
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    const { id } = req.params
    try{
        const response = await deleteUserService(id);
        if(response == true){
            handleResponse(res, true, 200, "Successfully deleted the user");
        } else {
            handleResponse(res, false, 404, "Unable to delete the user");
        }
    }
    catch(err){
        next(err);
    }
};
