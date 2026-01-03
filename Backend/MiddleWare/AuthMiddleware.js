const jwt = require('jsonwebtoken');
const User = require("../Models/Users")

const authMiddleWare = async (req, res, next) => {
    token = req.headers.authorization
    try {
        if (token && token.startsWith("Bearer ")) {
            token = token.split(" ")[1];
            decoded = jwt.verify(token, process.env.JWT_PASS)
            req.user = await User.findById(decoded.id).select("-password")
            next();
        }
    } catch (err) {
        res.status(401).json({ message: "Unauthorized", error: err.message })
    }
}

module.exports = authMiddleWare;
