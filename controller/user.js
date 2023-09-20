const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  let token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: id,
    },
    process.env.SECRET_TOKEN
  );
  return token;
};
const createUser = async (req, res) => {
  console.log(req.body);
  let user = await new User(req.body).save();
  res.cookie(createToken(user._id.valueOf())).status(201).json(user);
};

module.exports = {
  createUser,
};
