import userSchema from "../models/userSchema.js";

export const getUserData = async (req, res) => {
    try {

        const userId = req.body.userId;
        const user = await userSchema.findById(userId);

        if (!user) {
            return res.json({ success: false, message: 'User not Found' })
        }

        res.json({
            success: true,
            userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified
            }
        });

    } catch (error) {
        res.json({ success: false, messagem: error.messagem });
    }
}