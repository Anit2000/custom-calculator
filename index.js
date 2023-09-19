const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.port || 8000;
const userRoute = require("./routes/user");
const cookie = require("cookie-parser");
require("dotenv").config();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookie());
app.use("/api", userRoute);

// db
mongoose.connect("mongodb://localhost:27017/custom-calculator");
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(errr);
});
db.once("open", () => {
  app.listen(port, () => {
    console.log("listening to server");
  });
});
