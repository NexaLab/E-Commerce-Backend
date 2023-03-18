const express = require("express");
const router = express.Router();
const ProductSectionController = require("../controllers/ProductSectionController");





router.get("/api/products" , ProductSectionController.getAllProducts);

router.get("/api/perfumes", ProductSectionController.getAllPerfumes)

router.get("/api/cosmetics", ProductSectionController.getAllCosmetics)


module.exports = router;