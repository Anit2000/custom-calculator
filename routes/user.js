const express = require("express");
const router = express.Router();
const { createUser, authenticateUser } = require("../controller/user");

router.post("/register", createUser);
router.post("/login", (req, res) => {
  console.log(req.body);
});
router.use("/", authenticateUser);
module.exports = router;
