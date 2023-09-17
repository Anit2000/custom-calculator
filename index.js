const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.port || 8000;

//middlewares
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/test", (req, res) => {
  res.send({
    name: "Anit",
  });
});
app.listen(port, () => {
  console.log("listening to server");
});
