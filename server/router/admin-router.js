const express = require('express');
const { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById } = require('../controllers/admin-controller');
const authMiddleware = require("../middlewares/auth-middleware.js");
const addminMiddleware = require('../middlewares/admin-middleware.js');
const router = express.Router();

router.route("/users").get(authMiddleware, addminMiddleware, getAllUsers);
router.route("/users/:id").get(authMiddleware, addminMiddleware, getUserById);
router.route("/users/update/:id").patch(authMiddleware, addminMiddleware, updateUserById)
router.route("/users/delete/:id").delete(authMiddleware, addminMiddleware, deleteUserById);
router.route("/contacts").get(authMiddleware, addminMiddleware, getAllContacts);
router.route("/contacts/delete/:id").delete(authMiddleware, addminMiddleware, deleteContactById)
module.exports = router