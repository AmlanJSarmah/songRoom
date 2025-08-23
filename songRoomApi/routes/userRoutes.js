const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.status(200).send({ server: "running" });
});

module.exports = router;
