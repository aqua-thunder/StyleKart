const Wishlist = require("../models/wishlist-model");

// Add product to wishlist
const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    const { userId } = req.body;
    const { productDetails } = req.body;

    if (!userId || !productId || !productDetails) {
      return res.status(400).json({ message: "Missing data" });
    }

    // Check if already in wishlist
    const exists = await Wishlist.findOne({ userId, productId });
    if (exists) {
      return res.json({ message: "Already in wishlist" });
    }

    const item = await Wishlist.create({
      userId,
      productId,
      productDetails,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get wishlist of a user
const getWishlist = async (req, res) => {
  try {
    const { userId } = req.params;

    const wishlist = await Wishlist.find({ userId }).populate("productId");

    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove wishlist item
const removeWishlist = async (req, res) => {
  try {
    const { id } = req.params;

    await Wishlist.findByIdAndDelete(id);

    res.json({ message: "Removed from wishlist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addToWishlist,
  getWishlist,
  removeWishlist,
};
