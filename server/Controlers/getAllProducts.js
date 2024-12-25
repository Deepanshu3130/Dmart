const ProductDetails = require("../Model/objectDetail")


exports.getAllProduct = async(req, res) =>{

    try{
        const products = await ProductDetails.find({});
        console.log(products);
        return res.status(200).json({
            success : true,
            message: "product fetched succcessfully",
            products,
        })

    }catch(error){
        return res.status(401).json({
            success : false,
            message:"cannot fetch the all  product details",
            error: error.message
        })

    }
}

exports.getProductDetails = async(req, res) =>{
    try{
        const {productId} = req.body;
        if(!productId) {
            return res.status(401).json({
                success: false,
                message: "productID is missing"
           });  
        };
        const response = await ProductDetails.findById(productId);
        if(!response){
            return res.json({
                suceess: false,
                message : "did not get the response",

            })
        }
        console.log(response)
        return res.status(200).json({
            suceess : true,
            message: "got the product details sucessfully",
            response
        })

    }catch(error){
        return res.status(401).json({
            success : false,
            message:"cannot get the product details",
            error: error.message
        })
    }
}