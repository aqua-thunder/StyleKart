const express = require('express')
const router = express.Router();
const authController = require("../controllers/auth-controller.js")
const {signupSchema, loginSchema} = require("../validators/auth-validator.js")
const validate = require("../middlewares/validate-middleware.js")
const authMiddlware = require("../middlewares/auth-middleware.js")
router.route("/").get(authController.home)
router.route("/register").post(validate(signupSchema), authController.register) 
router.route("/login").post(validate(loginSchema),authController.login)
router.route("/user").get(authMiddlware, authController.user)
module.exports = router