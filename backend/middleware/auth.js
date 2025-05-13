require("dotenv").config();
const jwt= require("jsonwebtoken");

function authMiddleWare(req, res, next){

    const authHeader = req.headers?.authorization; // ✅ safer

    if (!authHeader) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token= req.headers.authorization?.split(" ")[1]; //extract the tocken id from header

    if(!token){
        return res.status(401).json({error: "No token provided"});
        
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    }catch(error){
        return res.status(401).json({error:"Invalid token"});
    }

}

module.exports = authMiddleWare;