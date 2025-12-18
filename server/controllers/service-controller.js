const { response } = require("express");
const { Service, Deals, Categorie, Men, Women, Kid, Beauty, Genz, Product } = require("../models/service-model");
const services = async (req, res) => {
    try {
        const response = await Service.find();
        if (!response) {
            res.status(404).json({ msg: "No Service Found" });
            return;
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`service: ${error}`)
    }
};

const deals = async (req, res) => {
    try {
        const response = await Deals.find();
        if (!response) {
            res.status(404).json({ msg: "No Deals Found" });
            return;
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`Deals: ${error}`)
    }
};

const categories = async (req, res) => {
    try {
        const response = await Categorie.find();
        if (!response) {
            res.status(400).json({ msg: "No Category Found" })
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        console.log(`Category ${error}`)
    }
}

const mens = async (req, res) => {
    try {
        const response = await Men.find();
        if (!response) {
            res.status(400).json({ msg: "No Men's detail Found" })
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        console.log(`Mens ${error}`);
    }
}

const womens = async (req, res) => {
    try {
        const response = await Women.find();
        if (!response) {
            res.status(400).json({ msg: "No Women's detail Found" })
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        console.log(`Women ${error}`)
    }
}

const kids = async (req, res) => {
    try {
        const response = await Kid.find();
        if (!response) {
            res.status(400).json({ msg: "No Kids detail found" })
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        console.log(`Kids ${error}`)
    }
}

const beauties = async (req, res) => {
    try {
        const response = await Beauty.find();
        if (!response) {
            res.status(400).json({ msg: "No beauty detail found" })
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        console.log(`Beauty ${error}`)
    }
}

const genzs = async (req, res) => {
    try {
        const response = await Genz.find();
        if (!response) {
            res.status(400).json({ msg: "No genz detail found" })
        }
        res.status(200).json({ msg: response })
    } catch (error) {
        console.log(`Genz ${error}`)
    }
}

const productDetail = async (req, res) => {
  const { id } = req.params;

  // search in all collections
  const collections = [Product, Men, Women, Kid, Beauty, Genz];

  for (let Col of collections) {
    const item = await Col.findById(id);
    if (item) return res.json(item);
  }

  return res.status(404).json({ message: "Product not found" });
}

module.exports = { services, deals, categories, mens, womens, kids, beauties, genzs, productDetail }
