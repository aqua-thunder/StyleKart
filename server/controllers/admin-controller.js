const User = require("../models/user-model.js")
const contact = require("../models/contact-model.js")


// *---------------------
// getAllUsers Logic
// *---------------------
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" })
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error)
    }
};

// *---------------------
// deleteUserById Logic
// *---------------------
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id })
        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        next(error)
    }
}


// *---------------------
// updateUserById Logic
// *---------------------
const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const updatedData = await User.updateOne({ _id: id }, { $set: data })
        return res.status(200).json(updatedData);

    } catch (error) {

    }

}

// *---------------------
// getUserById Logic
// *---------------------

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 })
        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
}
// *---------------------
// getAllContacts Logic
// *---------------------
const getAllContacts = async (req, res) => {
    try {
        const contacts = await contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contact found" })
        }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

// *---------------------
// deleteContactById Logic
// *---------------------

const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        await contact.deleteOne({ _id: id })
        return res.json({ message: "Contact deleted successfully" })
    } catch (error) {
        console.log(error)
    }
}



module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById,deleteContactById };