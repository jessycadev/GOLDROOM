import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {

    const {token} = req.cookies;

    req.body = req.body || {};

    if(!token) {
        return res.json({ success: false, message: 'Not Authorized. Try Login Again'});
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        
        if(tokenDecode.id) {
            req.body.userId = tokenDecode.id
        }else{
            return res.json({ success: false, message: 'Not Authorized, try login again'});
        }
        
        next();

    } catch (error) {
        return res.json({ success: false, message: error.message});
    }
}

export default userAuth;