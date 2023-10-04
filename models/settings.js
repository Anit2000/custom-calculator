const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settingsSchema = new Schema({
  domain: {
    type: String,
  },
  accessToken: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Settings = mongoose.model("settings", settingsSchema);

module.exports = Settings;
