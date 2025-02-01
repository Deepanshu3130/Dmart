const ProductDetails = require("../Model/objectDetail");
const {mailSender} = require("../Config/mailer")

exports.trackProduct = async(req,res) =>{
    try{
        const {id , email} = req.body;
        if(!id || !email) {
            return res.status(400).json({
                success : false,
                message : "parameters are missing in the request"
            })
        }
        const product = await ProductDetails.findById(id);
        if(!product){
            return res.status(404).json({
                success : false,
                message : "could not find  the product"
            })

        }
        const mailArray = product.email;
        const result = mailArray.includes(email);
        if(result){
            return res.status(200).json({
                success : true,
                message : "You Are Already Tracking This item"
            })
        };
        

        const mailRespone = await mailSender(email , product);
        product.email = [...product.email, email];
        //console.log("mail response is ",mailRespone.response)

        await product.save()
        return res.status(200).json({
            success : true,
            message : "mail sended successfully "
        })



        
    }catch(error){
        return res.status(500).json({
            success : false,
            message:"error in sending the mail",
            error: error.message
        })
    }

}