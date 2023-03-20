const express = require("express");
const router = express.Router();
const ProductSectionController = require("../controllers/ProductSectionController");





router.get("/api/products" , ProductSectionController.getAllProducts);

router.get("/api/perfumes", ProductSectionController.getAllPerfumes)

router.get("/api/cosmetics", ProductSectionController.getAllCosmetics);

router.get("/api/perfumes/brands" , ProductSectionController.getAllBrandsOfPerfume);

router.get("/api/perfumes/of-brand/:brand", ProductSectionController.getPerfumesOfBrand);

router.get("/api/cosmetics/brands" , ProductSectionController.getAllBrandsOfCosmetics);

router.get("/api/cosmetics/of-brand/:brand", ProductSectionController.getCosmeticsOfBrand);


module.exports = router;