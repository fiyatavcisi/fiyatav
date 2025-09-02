require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB Atlas bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas bağlantısı başarılı!"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

// Basit test route
app.get("/", (req, res) => {
  res.send("Fiyat Avcısı API çalışıyor 🚀");
});

// Sunucuyu başlat
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server çalışıyor: ${process.env.PORT || 5000}`);
});
