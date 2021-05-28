const express = require("express");
const router = express.Router();

// BRING IN THE USER CONTROLLER
const { getAllUsers, createUser, updateUserByID, deleteUserByID } = require("./controller/userController");
// 

// GET USERS LISTING
router.get("/", function (req, res, next) {
  res.json({
    test: true,
  });
});

// USER FUNCTION
router.get("/get-all-users", function (req, res) {
  getAllUsers()
    .then((payload) => {
      res.json({ message: "success", data: payload });
    })
    .catch((error) => {
      res.status(500).json({ message: "error", error });
    });
});

// CREATE USER 
router.post("/create-user", function (req, res) {
  createUser(req.body)
    .then((payload) => {
      res.json({ message: "success", data: payload });
    })
    .catch((error) => {
      res.status(500).json({ message: "error", error });
    });
});

// UPDATE USER BY ID
router.put("/update-user-by-id/:id", function (req, res) {
  updateUserByID(req.params.id, req.body)
    .then((updatedUser) => res.json({ message: "success", updatedUser }))
    .catch((error) =>
      res.status(500).json({ message: "error", error: error.message })
    );
});

router.delete("/delete-user-by-id/:id", function (req, res) {
  deleteUserByID(req.params.id)
    .then((deletedUser) => res.json({ message: "success", deletedUser }))
    .catch((error) =>
      res.status(500).json({ message: "error", error: error.message })
    );
});

module.exports = router;
