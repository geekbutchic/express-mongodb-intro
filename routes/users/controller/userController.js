// USER IS COMING FROM MONGODB SCHEMA
const User = require("../model/User");
var bcrypt = require('bcryptjs');

// EXPORTING AN OBJECT WITH KEY AND VALUE
module.exports = {
  // USER.FIND({}) IS A MONGOOSE FUNCTION TO QUERY THE DATABASE
  // IT TAKES IN A CALLBACK - THAT RETURN TWO PARAMETERS
  // FIRST - IS ALWAYS ERROR
  // SECOND PAYLOAD - USER DATA
  getAllUsers: function (callback) {
    User.find({}, function (err, payload) {
      if (err) {
        callback(err, null); // CALLBACKS SAME FUNCTION
      } else {
        callback(null, payload);
      }
    });
  },
  createUser: function (body, callback) {
    let createdUser = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      email: body.email,
      username: body.username,
    });
    createdUser.save(function (err, payload) {
      // SAVES TO DATABASE
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  updateUserByID: function (id, body, callback) {
    User.findByIdAndUpdate(
      { _id: id }, // MONGODB SPECIFIC _id
      body,
      { new: true },
      function (err, updatedPayload) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, updatedPayload);
        }
      }
    );
  },
  deleteUserByID: function (id, callback) {
    User.findByIdAndRemove({ _id: id }, function (err, deletedPayload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, deletedPayload);
      }
    });
  },
};
