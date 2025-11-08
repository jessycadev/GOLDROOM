import express from "express";
import { login, register, logout, sendVerifyOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from "../middleware/userAuth.js";

const rotas = express.Router();

rotas.post("/login", login);
rotas.post('/register', register );
rotas.post('/logout', logout );
rotas.post('/send-verify-otp', userAuth, sendVerifyOtp);
rotas.post('/verify-account', userAuth, verifyEmail);

export default rotas;