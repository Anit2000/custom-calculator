const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/user");

router.post("/register", createUser);
router.post("/login", (req, res) => {
  console.log(req.body);
});
module.exports = router;
