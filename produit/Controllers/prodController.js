const Produit = require("../Model/prodModel");

// Create and Save a new Message
exports.create = (req, res) => {
  const message = new Produit({
    name: req.body.name,          // Remplacez 'message' par 'name'
    prise: req.body.prise,        // Remplacez 'message' par 'prise'
    description: req.body.description, // Remplacez 'message' par 'description'
  });
  message
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

// Retrieve all messages from the database.
exports.findAll = (req, res) => {
  Produit.find()  // Remplacez 'App' par 'Produit'
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving messages.",
      });
    });
};


// Find a single message with a messageId
exports.findOne = (req, res) => {
  App.findById(req.params.productId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.productId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.productId,
      });
    });
};

// Update a message identified by the messageId in the request
exports.update = (req, res) => {
  App.findByIdAndUpdate(
    req.params.productId,
    {
      message: req.body.message,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Error updating message with id " + req.params.productId,
      });
    });
};

// Delete a message with the specified messageId in the request
exports.delete = (req, res) => {
  Produit.findByIdAndRemove(req.params.productId) // Remplacez 'messageId' par 'productId'
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.productId,
        });
      }
      res.send({ message: "Message deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Could not delete message with id " + req.params.productId,
      });
    });
};



