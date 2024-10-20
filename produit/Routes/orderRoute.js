module.exports = (app) => {
    const Order = require("../Controllers/orderController.js");

    app.post("/order/create", Order.create); 
    app.get("/order/get-all", Order.findAll); 
};
