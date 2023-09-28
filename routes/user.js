const express = require("express");
const router = express.Router();
const {
  createUser,
  authenticateUser,
  loginUser,
} = require("../controller/user");
const saveSettings = require("../controller/settings");

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/saveSettings", saveSettings);
router.use("/", authenticateUser);
module.exports = router;
