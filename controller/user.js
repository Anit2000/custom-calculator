const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
  res.cookie("cred_jwt", createToken(data._id.valueOf())).status(201).json({
    user: data.email,
    id: data._id,
  });
};
const authenticateUser = (req, res, next) => {
  let jwtCookie = req.cookies.cred_jwt;
  let verify = jwt.verify(
    jwtCookie,
    process.env.SECRET_TOKEN,
    async function (err, decoded) {
      if (err) {
        res.json({
          err: err.message,
        });
      } else {
        let user = await User.findById(decoded.data);
        res
          .json({
            ok: true,
            email: user.email,
          })
          .status(201);
      }
    }
  );
};
const loginUser = async (req, res) => {
  const data = req.body;
  let user = await User.findOne({ email: data.email });
  let verify = bcrypt.compare(data.password, user.password, (err, result) => {
    if (!result) {
      res.status(401).json({
        ok: false,
        message: "User did not match",
      });
    } else {
      res.cookie("cred_jwt", createToken(user._id.valueOf())).status(200).json({
        ok: true,
        email: user.email,
      });
    }
  });
};
module.exports = {
  createUser,
  authenticateUser,
  loginUser,
};
