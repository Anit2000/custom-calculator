const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.port || 8000;
const { addUser } = require("./controllers/UserController");

//middlewares
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/test", (req, res) => {
  res.send({
    name: "Anit",
  });
});

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
