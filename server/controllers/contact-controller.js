const Contact = require("../models/contact-model.js")

const contactForm = async (req,res)=>{
    try {
        const response = req.body;
        await Contact.create(response)
        return res.status(200).json({msg:"Message send successfully"})
    } catch (error) {
        return res.status(400).json({msg: "Message is not delivered"})        
    }
}

module.exports = contactForm;