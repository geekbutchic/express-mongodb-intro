const mongoose = require("mongoose");

// NEW KEYWORD CREATES NEW OBJECT {}
// STRING - COOKIE CUTTER
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
});

// USER IS THE ONE BEING USING IN ROBO 3T
module.exports = mongoose.model("user", userSchema);