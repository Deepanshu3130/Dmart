const express = require("express")
const router = express.Router()

const {scrapAmazonProduct} = require("../Controlers/DataScrapper");
const {getAllProduct , getProductDetails , getRecentProduct , getMostTrackedProduct, getMostSearch} = require("../Controlers/getAllProducts");
const {trackProduct} = require("../Controlers/trackProduct")

router.post("/scrapeProduct", scrapAmazonProduct);
router.get("/getAllProduct" , getAllProduct);
router.post("/getProductDetails" , getProductDetails);
router.post("/trackProduct" , trackProduct);
router.get("/getRecentProduct" ,getRecentProduct );
router.get("/getMostTrackedProduct" , getMostTrackedProduct);
router.get("/getMostSearch" ,getMostSearch)
module.exports = router