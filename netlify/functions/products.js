const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI; // Netlify'de env olarak ekleyeceksin
const client = new MongoClient(uri);

exports.handler = async function(event, context) {
  try {
    await client.connect();
    const db = client.db("fiyatavcisi");
    const collection = db.collection("products");

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
