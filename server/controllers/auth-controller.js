const { response } = require("express");
const User = require("../models/user-model")
const bcrypt = require("bcryptjs")


// *-----------------------
// * Home Logic
// *-----------------------
const home = async (req, res) => {
    try {
        res.status(200).json({ message: "Welcome to Home page using router" })
    } catch (error) {
        res.status(200).json({ message: "Internal server error" });
    }
}

// *-----------------------
// * Register Logic
// *-----------------------

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "Email already exist" });
        }

        const userCreated = await User.create({ username, email, phone, password });
        res.status(201).json({ message: "Registration successfull", token: await userCreated.generateToken(), userId: userCreated._id.toString() })
    } catch (error) {
        next(error)
    }
}

// *-----------------------
// * Login Logic
// *-----------------------

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credential" });
        }

        const user = await userExist.comparePassword(password)

        if (user) {
            res.status(201).json({ message: "Login successfull", token: await userExist.generateToken(), userId: userExist._id.toString() })
        }

    } catch (error) {
        console.error("Error in login:", error); // log error for debugging
        res.status(500).json({ msg: "Internal server error login" });
    }
};

// *-----------------------
// * User Logic
// *-----------------------
const user = async (req, res) => {
    try {
        const userData = req.user
        console.log(userData)
        return res.status(200).json({userData})
    } catch (error) {
        console.log("Error from the user root")
    }
}
module.exports = { home, register, login, user };