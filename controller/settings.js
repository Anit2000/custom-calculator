const Settings = require("../models/settings");

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
module.exports = saveSettings;
