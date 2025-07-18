const mongoose = require("mongoose");

// Replace with your actual connection URI
const uri =
  "mongodb+srv://dhruvvayugundla:DDD123ddd@cluster1.j4w98fr.mongodb.net/papa-web2";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({}, { strict: false });
const remedySchema = new mongoose.Schema({}, { strict: false });

const Product = mongoose.model("products", productSchema);
const Remedy = mongoose.model("remedies", remedySchema);

async function updateLanguageField() {
  try {
    const productResult = await Product.updateMany(
      { language: { $exists: true } },
      { $set: { language: "en" } }
    );
    console.log(`Updated ${productResult.modifiedCount} products.`);

    const remedyResult = await Remedy.updateMany(
      { language: { $exists: true } },
      { $set: { language: "en" } }
    );
    console.log(`Updated ${remedyResult.modifiedCount} remedies.`);
  } catch (err) {
    console.error("Error updating documents:", err);
  } finally {
    mongoose.disconnect();
  }
}

updateLanguageField();
