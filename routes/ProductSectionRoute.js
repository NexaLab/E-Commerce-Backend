const express = require("express");
const router = express.Router();
const ProductSectionController = require("../controllers/ProductSectionController");





router.get("/api/products" , ProductSectionController.getAllProducts);



module.exports = router;