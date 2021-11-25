const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const dotenv = require("dotenv")
const axios = require("axios").default
var open = require("open");



dotenv.config()
const app = express();
app.use(express.json());


mongoose.connect("mongodb://localhost/store-db", {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);




app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(cookieparser());



// Models

const Products = require("./models/Products");

app.get("/products", async (req,res)=>{
	var result = await Products.find();
	res.send(result)
})


app.post("/products/create", async(req ,res)=>{
	var newProduct = await new Products({
		name: req.body.name,
		provider: req.body.provider,
		stock: req.body.stock,
		price: req.body.price
	})
	newProduct.save();
	res.send(newProduct)
})



app.listen(3001, console.log("on port 3001"));

/* open(
  "F:\store"
); */




