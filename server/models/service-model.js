const { Schema, model } = require("mongoose")

const serviceSchema = new Schema({
    category: { type: String, required: true },
    about: { type: String, required: true },
    price: { type: String, required: true },
    mrp: { type: String, required: true },
    discount: { type: String, required: true },
    images: { type: [String], required: true },
    productDetails: { type: Object, required: true },
    imgUrl: { type: String, required: true },
    sizeAndFit: { type: Object, required: true }
});

const Service = model('Service', serviceSchema)
const Deals = model('Deal', serviceSchema)
const Categorie = model('Categorie', serviceSchema)
const Men = model('Men', serviceSchema)
const Women = model('Women', serviceSchema)
const Kid = model("Kid", serviceSchema)
const Beauty = model("Beauty", serviceSchema)
const Genz = model("Genz", serviceSchema)
const Product = model("Product", serviceSchema)
module.exports = { Service, Deals, Categorie, Men, Women, Kid, Beauty, Genz, Product };
