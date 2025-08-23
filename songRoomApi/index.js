const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Routes
const userRoutes = require("./routes/userRoutes");

// Setup
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Implement routes
app.use(userRoutes);
app.use((req, res) => {
  res.status(404).send({ error404: true });
});

mongoose
  .connect("mongodb://localhost:27017/songRoom")
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.error(err);
  });
