//In the Product.js you only need to put productName and the type is string - reference the current code.

const mongoose = require("mongoose");

// NEW KEYWORD CREATES NEW OBJECT {}
// STRING - COOKIE CUTTER
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
});

// USER IS THE ONE BEING USING IN ROBO 3T
module.exports = mongoose.model("product", productSchema);