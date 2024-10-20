module.exports = (app) => {
  const Product = require("../Controllers/prodController.js");

  app.post("/create", Product.create);

  app.get("/get-all", Product.findAll);

  app.get("/product/:productId", Product.findOne);

  app.put("/product/:productId", Product.update);

  app.delete("/product/:productId", Product.delete);
};