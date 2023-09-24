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
module.exports = {
  createUser,
  authenticateUser,
};
