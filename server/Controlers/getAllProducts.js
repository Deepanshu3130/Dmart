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

exports.getRecentProduct = async(req, res) =>{

    try{
        const products = await ProductDetails.find().sort({_id:-1}).limit(10);
        console.log(products);
        return res.status(200).json({
            success : true,
            message: "recent product fetched succcessfully",
            products,
        })

    }catch(error){
        return res.status(401).json({
            success : false,
            message:"cannot fetch the recent product details",
            error: error.message
        })

    }
}

exports.getMostSearch = async(req, res) =>{

    try{
        const products = await ProductDetails.find().sort({searchCount:-1}).limit(10);
        console.log(products);
        return res.status(200).json({
            success : true,
            message: "most searched product fetched succcessfully",
            products,
        })

    }catch(error){
        return res.status(401).json({
            success : false,
            message:"cannot fetch the most searched product details",
            error: error.message
        })

    }
}

exports.getMostTrackedProduct = async(req,res)=>{
    try{
        const products = await ProductDetails.aggregate([
            { 
                $match: { email: { $exists: true, $ne: [] } } 
            },
            { 
                $addFields: { emailCount: { $size: "$email" } } 
            },
            { 
                $sort: { emailCount: -1 } 
            },
            { 
                $limit: 10 
            }
        ]);
        console.log(products);
        return res.status(200).json({
            success : true,
            message: "most tracked product fetched succcessfully",
            products,
        })

    }catch(error){
        return res.status(401).json({
            success : false,
            message:"cannot fetch the most tracked product",
            error: error.message
        })

    }
};





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
                success: false,
                message : "did not get the response",

            })
        }
        console.log(response)
        return res.status(200).json({
            success : true,
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
