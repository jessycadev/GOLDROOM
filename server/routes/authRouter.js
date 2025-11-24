import express from "express";
import { 
    login, 
    register, 
    logout, 
    sendVerifyOtp, 
    verifyEmail, 
    isAuthenticated, 
    sendResetOtp, 
    resetPassword 
} from '../controllers/authController.js';
import userAuth from "../middleware/userAuth.js";

const rotas = express.Router();

rotas.post("/login", login);
rotas.post('/register', register );
rotas.post('/logout', logout );

rotas.post('/send-verify-otp', userAuth, sendVerifyOtp);
rotas.post('/verify-account', userAuth, verifyEmail);

rotas.get('/is-auth', userAuth, isAuthenticated);

rotas.post('/send-reset-otp', sendResetOtp);
rotas.post('/reset-password', resetPassword);

export default rotas;