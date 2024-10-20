const mongoose = require("mongoose");

// Modèle Commande
const CommandeSchema = mongoose.Schema({
    date: { type: Date, default: Date.now }, 
    client: { type: String, required: true }, 
    produits: [
        {
            produitId: { type: mongoose.Schema.Types.ObjectId, ref: "Produit", required: true }, 
            quantite: { type: Number, required: true }, 
        },
    ],
});

module.exports = mongoose.model("Commande", CommandeSchema);
