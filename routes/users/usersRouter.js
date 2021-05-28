var express = require("express");
var router = express.Router();


var {
  getAllUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} = require("./controller/userController");


router.get("/", function (req, res, next) {
  res.json({
    test: true,
  });
});


router.get("/get-all-users", getAllUsers);
router.post("/create-user", createUser);
router.put("/update-user-by-id/:id", updateUserByID);
router.delete("/delete-user-by-id/:id", deleteUserByID);


module.exports = router;