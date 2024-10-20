const Commande = require("../Model/orderModel");


exports.create = (req, res) => {
    const { client, produits } = req.body;

    if (!client || !Array.isArray(produits) || produits.length === 0) {
        return res.status(400).send({ message: "Client and products are required!" });
    }

    const commande = new Commande({ client, produits });

    commande
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Commande.",
            });
        });
};


exports.findAll = (req, res) => {
    Commande.find()
        .populate("produits.produitId") 
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving commandes.",
            });
        });
};
