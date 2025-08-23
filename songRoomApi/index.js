const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  console.log(req.body);
  res.status(200).send({ serverState: "running" });
});

mongoose
  .connect("mongodb://localhost:27017/songRoom")
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.error(err);
  });
