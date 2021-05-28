// USER IS COMING FROM MONGODB SCHEMA
const User = require("../model/User");
const bcrypt = require("bcryptjs");
// DONT FORGET TO REQUIRE

// PROMISE VERSION
module.exports = {
  getAllUsers: function () {
    return new Promise((resolve, reject) => {
      User.find({})
        .then((payload) => {
          resolve(payload);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }, //CREATE USER
  createUser: function (body) {
    //WRAPPING PROMISE FOR THIS ENTIRE FUNCTION
    return new Promise((resolve, reject) => {
      bcrypt
        .genSalt(10) //METHOD
        .then((salt) => {
          //RESULT
          return bcrypt.hash(body.password, salt); //RETURNS SALT
        })
        .then((hashedPassword) => {
          let savedUser = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            password: hashedPassword,
            email: body.email,
            username: body.username,
          });
          return savedUser.save();
        })
        .then((savedUser) => {
          resolve(savedUser);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateUserByID: function (id, body) {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate({ _id: id }, body, { new: true })
        .then((updatedUser) => resolve(updatedUser))
        .catch((error) => reject(error));
    });
  },
  deleteUserByID: function (id, callback) {
    return new Promise((resolve, reject) => {
      User.findByIdAndRemove({ _id: id })
        .then((deletedUser) => resolve(deletedUser))
        .catch((error) => reject(error));
    });
  },
};
