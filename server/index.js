const express = require("express");
const {connect} = require("./Config/database");
const scrapeRouter = require("./Routes/ScrapeRoute")
const {checkAndUpdateProduct} = require("./Controlers/checkAndUpdatePrices")

const app = express();


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.use(express.json()); 
connect();
checkAndUpdateProduct();

app.use("/api/v1/scrapeData" , scrapeRouter)


app.listen(3000,()=> {
	console.log(`App is running at ${3000}`)
})
