# 🛒 DMart - Product Price Tracker (MERN)

DMart is a full-stack **MERN application** that allows users to:
- 🧲 Paste a product URL (currently supports Amazon)
- 🔍 Automatically fetch and display product details (price, image, availability, etc.)
- 📬 Get notified via email when the product's price drops!

---

## 🚀 Features

- 🔗 **Paste a product link** and get real-time product info.
- 📦 **Product details** include:
  - Current Price
  - Discount (if any)
  - Availability (in stock / out of stock)
  - Product Image
- 📧 **Email alerts** when the price drops.
- 🕓 **Cron-based price tracking** using Node.js & MongoDB.
- 📊 Track search count for most searched products.

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS / Material Tailwind
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Cheerio (for web scraping)
- Axios
- Nodemailer (for email alerts)
- Node-cron (for scheduled price checks)
- dotenv

---




🧪 How It Works
User pastes a product URL.

Backend scrapes product details using cheerio.

Product info is saved in MongoDB and displayed on UI.

If the user opts for price alerts, their email is stored.

A scheduled cron job runs every few hours to:

Check the latest price

Send an email alert if the price drops.

wibesite will be live soonn.....



