const jwt = require("jsonwebtoken");
const User = require("../models/user-model")
const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) {
        return res
            .status(401)
            .json({ msg: "Unauthorized HTTP, Token not provided" });
    }
    const jwtToken = token.replace("Bearer", "").trim();
    console.log('token from auth Middleware', jwtToken)

    try {
        const isVarified = jwt.verify(jwtToken, process.env.JWT_SECRET);

        const userData = await User.findOne({ email: isVarified.email })

            .select({
                password: 0,
            })
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        next();
    } catch (error) {
        return res.status(401).json({ msg: "Unauthorized, Invalid token." })
    }
}
module.exports = authMiddleware