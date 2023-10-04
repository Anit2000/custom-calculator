const Settings = require("../models/settings");
const jwt = require("jsonwebtoken");

const saveSettings = async (req, res) => {
  try {
    let data = await new Settings(req.body).save();
    res.status(201).json(data);
  } catch (err) {
    res
      .json({
        message: err.message,
      })
      .status(400);
  }
};
const getSettings = async (req, res) => {
  let cookieId = req.cookies.cred_jwt;
  let userId = await jwt.verify(
    cookieId,
    process.env.SECRET_TOKEN,
    async function (err, decoded) {
      if (err) {
        res.json({
          err: err.message,
        });
      } else {
        return decoded.data;
      }
    }
  );
  let settings = await Settings.findOne({ user: userId });
  if (settings) {
    res.send({
      ok: true,
      domain: settings.domain,
      accessToken: settings.accessToken,
    });
  } else {
    res.send({
      ok: false,
      message: "no existing settings found",
    });
  }
};
module.exports = { saveSettings, getSettings };
