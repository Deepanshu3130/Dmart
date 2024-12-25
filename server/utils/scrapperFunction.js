const axios = require("axios");
const cheerio = require('cheerio');
require("dotenv").config();
const {extractPrice} = require("./extractPrice")

exports.scrapper = async(url) =>{
     
    const username = process.env.bright_username;
    const password = process.env.bright_password;
    const port   = 22225;
    const sessionId = (100000 * Math.random()) || 0;
    const options = {
        auth : {
        username : `${username}-session-${sessionId}`,
        password,
        },

        host : `brd.superproxy.io:33335`,
        port,
        rejectUnauthorized: false,
    }
    try{
        // fetching the product page
        const response = await axios.get(url , options);
        console.log("response is " , response.data);
        const $ = cheerio.load(response.data);
         // extract the product title
         const title = $("#productTitle").text().trim();
         const currentPrice = Number(extractPrice($(".priceToPay span.a-price-whole"),
        $("a.size.base.a-color-price"), 
        $("a.button-selected .a-color-base"),
        $("a-price.a-text-price")
         ));
         const originalPrice =Number(extractPrice ($("#priceblock_ourprice"),
         $(".a-price.a-text-price span.a-offscreen"),
         $("#listPrice"),
         $("#priceblock_dealprice"),
         $(".a-size-base.a-color-price")
        )) || currentPrice;
        const outOfStock = $("#availablity span").text().trim().toLowerCase() === "currently unavailable"
        const discount = $(".savingsPercentage").text().trim().replace("-", "");

         const img = $('#imgBlkFront').attr('data-a-dynamic-image') ||
         $('#landingImage').attr('data-a-dynamic-image');
         const imgeUrl = img ? Object.keys(JSON.parse(img))[0] : null;
        // Return the extracted data
            return {
                success: true,
                title,
                currentPrice,
                originalPrice,
                outOfStock,
                discount,
                imgeUrl,
                
            };
                
        }catch(error){
            return {
               message : "fail to extract  product ",
               success: false,
               error: error.message,     
             }
        }
}