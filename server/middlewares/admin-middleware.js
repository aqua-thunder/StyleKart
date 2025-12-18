const addminMiddleware = async (req, res, next) => {
    try {
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            res.status(404).json({message: "Access denined. User is not an admin"})
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = addminMiddleware;