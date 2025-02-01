const cron = require("node-cron");
const { scrapper } = require("../utils/scrapperFunction");
const ProductDetails = require("../Model/objectDetail");
const { mailSender } = require("../Config/mailer");

const checkAndUpdateProduct = async () => {
    try {
        // const products = await ProductDetails.find({});
        // for (const product of products) {
        //     const { url, currentPrice, email } = product;

        //     // Scrape products
        //     const data = await scrapper(url);
        //     if (!data.success) continue; // Skip if scraping fails

        //     const newPrice = 0 //data.currentPrice // You have hardcoded the price here, this should be from the scraped data

        //     // Compare new price with current price in the database
        //     if (newPrice < currentPrice) {
        //         // Update the price in the database
        //         product.currentPrice = newPrice;
        //         await product.save();

        //         // Ensure mailArray is an array before iterating
        //         if (Array.isArray(email) && email.length > 0) {
        //             for (const user of email) {
        //                 await mailSender(user, product);
        //                 console.log("mail has been successfully send to " , user)
        //             }
        //         } else {
        //             console.log("No valid email addresses to send the notification." , email);
        //         }
        //     }

        //     if (!Array.isArray(product.trackPrice)) {
        //         product.trackPrice = [];
        //     }
        //     product.trackPrice.push(data.currentPrice);
        //     await product.save();

            console.log("items updated successfully");
       // }
    } catch (error) {
        console.error("Error updating prices:", error.message);
    }
};

// Schedule the cron job to run every day at midnight
cron.schedule("0 0 * * *", checkAndUpdateProduct);

module.exports = { checkAndUpdateProduct };
