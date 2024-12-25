const ProductDetails = require("../Model/objectDetail");
const {mailSender} = require("../Config/mailer")

exports.trackProduct = async(req , res) =>{
    try{
        const {id , email} = req.body;
        if(!id || !email) {
            return res.json({
                success : false,
                message : "parameters are missing in the req body"
            })
        }
        const product = await ProductDetails.findById(id);
        if(!product){
            return res.json({
                success : false,
                message : "can not fetch the product"
            })

        }
        const mailArray = product.email;
        const result = mailArray.includes(email);
        if(result){
            return res.status(200).json({
                success : true,
                message : "You Are Already Tracking The Item"
            })
        };
        

        const mailRespone = await mailSender(email , product);
        product.email = [...product.email, email];
        console.log(mailRespone.response)

        await product.save()
        return res.status(200).json({
            success : true,
            message : "mail sended successfully and and email has been added to the db"
        })



        
    }catch(error){
        return res.status(401).json({
            success : false,
            message:"error in sending the mail",
            error: error.message
        })
    }

}