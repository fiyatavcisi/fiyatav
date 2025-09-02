const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI; // Netlify ortam değişkeninden al
const client = new MongoClient(uri);

exports.handler = async function(event, context) {
  try {
    await client.connect();
    const db = client.db("fiyatDB"); // MongoDB’deki database adı
    const collection = db.collection("products"); // collection adı

    const products = await collection.find({}).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(products)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
