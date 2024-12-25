const mongoose = require("mongoose");

const details = new mongoose.Schema(
    {
        url:{
        type : String
        },

        title :{
            type : String

        },
        originalPrice : {
            type : Number

        },
        currentPrice :{
            type : Number

        },
        maxPrice : {
            type : Number

        },
        lowestPrice :{
            type : Number,

        },
        avgPrice : {
            type : Number,
        },

        outOfStock:{
            type : Boolean,
        },
        discount :{
            type : String,
        },

        trackPrice: [
            { type: Number }
        ],

        imgeUrl : {
            type : String

        },
        email : [{
            type : String,
        }]

    }

);

module.exports = mongoose.model("ProductDetails" , details);