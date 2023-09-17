const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    required: [true, "Email is required"],
  },
  website: {
    type: String,
    validate: {
      validator: (val) => {
        urlRegex =
          /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
        return urlRegex.test(val);
      },
      message: "Invalid url",
    },
  },
  password: {
    type: String,
    required: true,
    required: [true, "Password is required"],
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
