const mongoose = require("mongoose");

// Modèle Produit
const ProduitSchema = mongoose.Schema({
  name: { type: String, required: true },
  prise: { type: Number, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true }, 
});

module.exports = mongoose.model("Produit", ProduitSchema);
