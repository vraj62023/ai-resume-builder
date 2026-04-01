

import express from "express";
import { getUserById, getUserResumes, login, registerUser } from "../controllers/UserController";
import protect from "../middlewares/authmiddleware";

const userRouter= express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',login);
userRouter.get('/data',protect,getUserById);
userRouter.get('/resumes',protect,getUserResumes);

export default userRouter;