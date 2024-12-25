const cron = require("node-cron");
const { scrapper } = require("../utils/scrapperFunction");
const ProductDetails = require("../Model/objectDetail");
const { mailSender } = require("../Config/mailer");

const checkAndUpdateProduct = async () => {
    try {
        const products = await ProductDetails.find({});
        for (const product of products) {
            const { url, currentPrice, mailArray } = product;

            // Scrape products
            const data = await scrapper(url);
            if (!data.success) continue; // Skip if scraping fails

            const newPrice = data.currentPrice;

            // Compare new price with current price in the database
            if (newPrice < currentPrice) {
                // Update the price in the database
                product.currentPrice = newPrice;
                await product.save();

                for (const email of mailArray) {
                    await mailSender(email, product);
                }
            }

            if (!Array.isArray(product.trackPrice)) {
                product.trackPrice = [];
            }
            product.trackPrice.push(data.currentPrice);
            await product.save();

            console.log("items updated successfully");
        }
    } catch (error) {
        console.error("Error updating prices:", error.message);
    }
};

// Schedule the cron job to run every day at midnight
cron.schedule("* * * * *", checkAndUpdateProduct);

module.exports = { checkAndUpdateProduct };

