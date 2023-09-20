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
  let data = await new User(req.body).save();
  res
    .cookie("cred_jwt", createToken(data._id.valueOf()))
    .status(201)
    .json({
      user: {
        email: data.email,
      },
    });
};

const authenticateUser = async (req, res) => {
  let jwt = req.cred_jwt;
  console.log(jwt);
};
module.exports = {
  createUser,
  authenticateUser,
};
