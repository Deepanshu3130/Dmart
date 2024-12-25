const express = require("express")
const router = express.Router()

const {scrapAmazonProduct} = require("../Controlers/DataScrapper");
const {getAllProduct , getProductDetails} = require("../Controlers/getAllProducts");
const {trackProduct} = require("../Controlers/trackProduct")

router.post("/scrapeProduct", scrapAmazonProduct);
router.get("/getAllProduct" , getAllProduct);
router.get("/getProductDetails" , getProductDetails);
router.post("/trackProduct" , trackProduct)


module.exports = router