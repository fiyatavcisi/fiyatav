require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI; // .env’deki bağlantıyı al
const client = new MongoClient(uri);

async function testMongo() {
  try {
    await client.connect();
    const db = client.db("fiyatDB"); // MongoDB veritabanı adı
    const collection = db.collection("products"); // collection adı

    // Örnek veri çekme
    const items = await collection.find({}).toArray();
    console.log("Veriler:", items);

    await client.close();
  } catch (err) {
    console.error("Hata:", err);
  }
}

testMongo();
