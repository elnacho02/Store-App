const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	provider: {
		type: String,
		required: true
	},
	stock:{
		type: Number
	},
	price: {
		type: Number
	}

}, {collection: "products"});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;