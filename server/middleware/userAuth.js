import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {

    const {token} = req.cookies;

    req.body = req.body || {};

    if(!token) {
        return res.json({ success: false, message: 'Not Authorized. Try Login Again'});
    }

    const tokenDecode = jwt.verify(token, 'Secret#text');

    try {
        const tokenDecode = jwt.verify(token, 'Secret#text');
        
        if(tokenDecode.id) {
            req.body.userId = tokenDecode.id
        }else{
            return res.json({ success: false, message: 'Not Authorized, try login again'});
        }
        
        next();
        console.log('caiu aqui')

    } catch (error) {
        return res.json({ success: false, message: error.message});
    }
}

export default userAuth;