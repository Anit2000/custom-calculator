const User = require("../models/Users");

const addUser = () => {
  let testUser = new User({
    name: "Anit",
    email: "bishwasanit3@gmail.com",
    website: "http://localhost:5173/",
    password: "test pass",
  });
  testUser.save();
};
module.exports = { addUser };
