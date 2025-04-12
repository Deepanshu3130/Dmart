require('dotenv').config();
const express = require("express");
const {connect} = require("./Config/database");
const scrapeRouter = require("./Routes/ScrapeRoute")
const {checkAndUpdateProduct} = require("./Controlers/checkAndUpdatePrices")
const cors = require("cors")
const app = express();
const path = require('path')


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
		
		allowedHeaders: ['Authorization', 'Content-Type'],
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
	})
)

app.use(express.json()); 
connect();
checkAndUpdateProduct();

app.use("/api/v1/scrapeData" , scrapeRouter)

if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../front-end/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../front-end', 'build', 'index.html'));	
	});	
}

const PORT = process.env.NODE_ENV=== "production"? process.env.PORT : 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
