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

router.get("/get-all-users", async function (req, res) {
  try {
    let foundAllUsers = await getAllUsers();
    res.json({ message: "success", foundAllUsers });
  } catch (error) {
    res.json({ message: "failure", error: error.message });
  }
});

router.post("/create-user", async function (req, res) {
  try {
    let createdUser = await createUser(req.body);
    res.json({ message: "success", createdUser });
  } catch (error) {
    res.json({ message: "failure", error: error.message });
  }
});

router.put("/update-user-by-id/:id", async function (req, res) {
  try {
    let updatedUser = await updateUserByID(req.params.id, req.body);
    res.json({ message: "success", updatedUser });
  } catch (e) {
    res.json({ message: "failure", error: error.message });
  }
});

router.delete("/delete-user-by-id/:id", async function (req, res) {
  try {
    let deletedUser = await deleteUserByID(req.params.id);
    res.json({ message: "success", deletedUser });
  } catch (e) {
    res.json({ message: "failure", error: e.message });
  }
});


module.exports = router;