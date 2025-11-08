import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: '998243001@smtp-brevo.com',
        pass: 'xsmtpsib-938a546fda4d8816e7095b1cab49f0eb112aea53a3628c30e4e377837e92daf8-6dJ4mQtqOdRkR9W7',
    }
    
});

export default transporter;