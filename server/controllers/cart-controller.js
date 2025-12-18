const Cart = require("../models/cart-model.js")

const addToCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const { productId } = req.body;
        const { productDetails } = req.body;

        if (!userId || !productId || !productDetails) {
            return res.status(400).json({ message: "Missing Data" })
        }

        // check already exist or not
        const exists = await Cart.findOne({ userId, productId })
        if (exists) {
            return res.json({ message: "Already exist in the cart" })
        }

        const item = await Cart.create({
            userId,
            productId,
            productDetails
        });

        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


const getToCart = async (req, res) => {
    try {
        const { userId } = req.params;

        const cart = await Cart.find({ userId }).populate("productId")
        res.json(cart)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const removeFromCart = async (req, res) => {
    try {
        const { id } = req.params;
        await Cart.findByIdAndDelete(id);
        res.json(500).json({ message: "Remove from cart" })
    } catch (error) {
        res.json(500).json({ message: error.message })
    }
};


module.exports = { addToCart, getToCart, removeFromCart }