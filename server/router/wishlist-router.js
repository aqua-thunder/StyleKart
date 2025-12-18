const express = require("express");
const { addToWishlist, getWishlist, removeWishlist } = require("../controllers/wishlist-contoller");

const router = express.Router();

// add product to wishlist
router.post("/add", addToWishlist);

// get wishlist of a user
router.get("/:userId", getWishlist);

// remove item from wishlist
router.delete("/remove/:id", removeWishlist);

module.exports = router;    