const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.dataBase_url , {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
   .then(()=>{
    console.log("db conneted successfuly ")
   })
   .catch((error)=>{
    console.log("error in dbConnection")
        console.error(error.message);
        process.exit(1)
   })
     
}
