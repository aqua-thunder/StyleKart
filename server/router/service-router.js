const express = require('express');
const { services, deals, categories, mens, womens, genzs, beauties, kids, productDetail } = require('../controllers/service-controller');
const router = express.Router();

router.route("/service").get(services)
router.route("/deal").get(deals)
router.route("/Categorie").get(categories)
router.route("/men").get(mens)
router.route("/women").get(womens)
router.route("/kid").get(kids)
router.route("/beauty").get(beauties)
router.route("/genz").get(genzs)
router.route("/product/:id").get(productDetail)
module.exports = router;