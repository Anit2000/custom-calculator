const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require('cors');
const mongoose = require("mongoose");
const port = process.env.port || 8000;
const userRoute = require("./routes/user");
const claculatorRoute = require("./routes/calculators");
const storefrontRoute = require("./routes/storefront");

const cookie = require("cookie-parser");
const { authenticateUser } = require("./controller/user");
require("dotenv").config();

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookie());
app.use("/api", userRoute);
app.use("/calculators", claculatorRoute);
app.use("/storefront", storefrontRoute);

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
