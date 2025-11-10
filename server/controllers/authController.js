import bcrypt from "bcryptjs";
import userSchema from "../models/userSchema.js";
import jwt from 'jsonwebtoken';
import transporter from "../config/nodemailer.js";

export const register = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({ success: false, message: 'Login Inválido' })
    }

    try {
        const existeUsuario = await userSchema.findOne({ email })

        if (existeUsuario) {
            return res.json({ success: false, message: "O usuário já existe!" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new userSchema({ name, email, password: hashedPassword })
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 160 * 60 * 1000
        })

        // Sending welcome email
        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to SERABI',
            text: `Welcome to Serabi website. You account has been created with email id: ${email}`
        }

        await transporter.sendMail(mailOption);

        return res.json({ success: true });

    } catch (error) {
        res.json({ success: false, message: 'teste: ' + error.message })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ success: false, message: 'Eamil and password are required' })
    }

    try {

        const user = await userSchema.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: 'Invalid email' })
        }

        const verificaSenha = await bcrypt.compare(password, user.password)

        if (!verificaSenha) {
            return res.json({ success: false, message: 'Invalid password' })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 160 * 60 * 1000
        });

        return res.json({ success: true })


    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

export const logout = async (req, res) => {

    try {
        res.clearCookie('token', ({
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        }))

        return res.json({ success: true, message: 'Logged Out' })

    } catch (error) {

        return res.json({ success: false, message: error.message });

    }
}

// Send verification OTP to the User's Email
export const sendVerifyOtp = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await userSchema.findById(userId);

        console.log(user.isAccountVerified);

        if (user.isAccountVerified) {
            return res.json({ success: false, message: "Account Already verified" });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000

        await user.save();

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Account verification OTP',
            text: `Your OTP is ${otp}. Verify your account using this OTP.`
        }
        await transporter.sendMail(mailOption);
        res.json({ success: true, message: 'Verification OTP Sent on Email' });

    } catch (error) {
        console.log('erro')
        res.json({ success: false, message: error.message });
    }
}

export const verifyEmail = async (req, res) => {

    const { userId, otp } = req.body;

    if (!userId || !otp) {
        return res.json({ success: false, message: 'Missing Details' })
    }

    try {

        const user = await userSchema.findById(userId);

        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }

        if (user.verifyOtp === '' || user.verifyOtp !== otp) {
            return res.json({ success: false, message: 'Invalid OTP' });
        }

        if (user.verifyOtpExpireAt < Date.now()) {
            return res.json({ success: false, message: 'OTP expired' });
        }

        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;

        await user.save();

        return res.json({ success: true, message: 'Email verified successfully' });

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export const isAuthenticated = async (req, res) => {
    try {

        return res.json({success: true})

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

// Send Password Reset OTP
export const sendResetOtp = async (req, res) => {

    const { email } = req.body;

    if (!email) {
        return res.json({ success: false, message: 'Email is required' })
    }

    try {

        const user = await userSchema.findOne({ email });

        if (!user) {
            return res.json({ success: true, message: 'User not found!' })
        }

        //codigo repetido fazer uma funcao
        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000

        await user.save();

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Password Reset OTP',
            text: `Your OTP is ${otp}. Verify your account using this OTP.`
        }
        await transporter.sendMail(mailOption);
        res.json({ success: true, message: 'Email Send To You Reset Password' });
        //final do codigo repetido

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

// Reset User Password
export const resetPassword = async (req, res) => {

    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
        return res.json({ success: false, message: 'Email, OTP and New Password are required' });
    }

    try {

        const user = await userSchema.findOne({ email })

        if (!user) {
            return res.json({ success: true, message: 'User not found!' })
        }

        if (user.resetOtp === "" || user.resetOtp !== otp) {
            return res.json({ success: false, message: 'OTP Invalid' })
        }

        if (user.resetOtpExpireAt < Date.now()) {
            return res.json({ success: false, message: 'OTP Expired' })
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetOtp = '';
        user.resetOtpExpireAt = 0;

        await user.save();

        return res.json({ success: true, message: 'Password has been reset successfully' })

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }

}


