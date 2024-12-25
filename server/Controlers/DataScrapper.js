
const {calcAvg ,calcLow, calcMax } =require("../utils/extractPrice");
const { json } = require("express");
const ProductDetails = require("../Model/objectDetail")
const {scrapper} = require("../utils/scrapperFunction")




exports.scrapAmazonProduct  = async(req, res) =>{
   try{
    const {url} = req.body;
    console.log("url is ",url)
    if(!url) {
       return res.status(401).json({
            success : false,
            message :"url is missing"
         
        })
    };
    // call the function
    const data = await scrapper(url);
    if(!data.success){
        return res.status(401).json({
            success: false,
            message: data.message,
            error: data.error
        })

    }
    const {
        title,
        currentPrice,
        originalPrice,
        outOfStock,
        discount,
        imgeUrl,
       
    } = data




        //  const trackPrice = [];
        //  trackPrice.push(currentPrice) // we have to design a function further which will add the new price in the array if their any change in the price and also upadte the current , avg and the lowest price
        //  //console.log("title is " , title )

         // now checking if the product already exist in the db if yes update the price and other things if no then make the new entry of the product in the database
         const product = await ProductDetails.findOne({url})
         if(product){
            // if product exist then update the all the price 
            
            product.currentPrice = currentPrice;
            product.trackPrice = [...product.trackPrice , currentPrice];
            product.originalPrice = originalPrice;
            product.outOfStock = outOfStock;
            product.discount = discount;
            product.maxPrice = calcMax(product.trackPrice);
            product.lowestPrice = calcLow(product.trackPrice);
            product.avgPrice = calcAvg(product.trackPrice);
            
            await product.save();
            return res.status(200).json({
                success: true,
                message: "Product updated successfully",
                product,
            });

         }
         const details = await ProductDetails.create({
            url,
            title,
            currentPrice,
            originalPrice: originalPrice || currentPrice,
            outOfStock,
            discount,
            maxPrice: originalPrice || currentPrice,
            lowestPrice: currentPrice || originalPrice,
            avgPrice : currentPrice,
            imgeUrl,
            trackPrice:[currentPrice]

         });
         console.log("details are" , details)


        return res.status(200).json({
            success:true,
            message:"product scrapped successfully",
            details
    
        })
   
    
   }catch(error){
   return res.json({
        success: false,
        message: "fail to scrap the product",
        error : error.message
    })
   }
}