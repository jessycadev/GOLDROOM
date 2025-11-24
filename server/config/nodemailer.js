import nodemailer from 'nodemailer';
//process env nao estava visivel nessa classe precisei adicionar o dotenv.config() para funcioar
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }

});

export default transporter;