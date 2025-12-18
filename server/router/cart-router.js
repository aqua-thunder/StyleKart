const express = require("express")
const { addToCart, getToCart, removeFromCart } = require("../controllers/cart-controller.js")
const router = express.Router();

// add product into the cart
router.post("/add", addToCart)

// get product for user
router.get("/:userId", getToCart)


// delete product form the cart
router.delete("/remove/:id", removeFromCart)

module.exports = router;
