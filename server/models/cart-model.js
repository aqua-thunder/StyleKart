const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        productDetails: { // store all product info
            type: Object,
            required: true,
        },
    },
    {
        timestamps: true, // createdAt & updatedAt
    }
);

cartSchema.index({ userId: 1, productId: 1 }, { unique: true })

const cart = mongoose.model("Cart", cartSchema)

module.exports = cart;