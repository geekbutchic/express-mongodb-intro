// In the productController.js create createProduct *, getAllProducts * , getProductByID *, updateProductByID *, deleteProductByID *

const Product = require("../model/Product");

module.exports = {
  getAllProduct: function (callback) {
    Product.find({}, function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  createProduct: function (body, callback) {
    let createProduct = new Product({
      productName: body.productName,
    });
    createProduct.save(function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  getProductByID: function(id, body, callback) {
    Product.findById(
      { _id: id },
      body,
      { new: true },
      function (err, updatedPayload) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, updatedPayload)
        }
      }
    )
  },
  updateProductByID: function (id, body, callback) {
    Product.findByIdAndUpdate(
      { _id: id },
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
  deleteProductByID: function (id, callback) {
    Product.findByIdAndRemove({ _id: id }, function (err, deletedPayload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, deletedPayload);
      }
    });
  },
};
