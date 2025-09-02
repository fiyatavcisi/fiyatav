const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB bağlı"))
  .catch(err => console.log(err));

// Model
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  market: String,
  date: { type: Date, default: Date.now }
});
const Product = mongoose.model("Product", ProductSchema);

// API endpoint
app.get("/api/products", async (req, res) => {
  const products = await Product.find().sort({ date: -1 }).limit(20);
  res.json(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor`));
