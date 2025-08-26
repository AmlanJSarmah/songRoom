const express = require("express");
const router = express.Router();

// Controllers
const roomController = require("../controllers/roomController");

router.use("/room", roomController.isAuth);
router.get("/room/create", (req, res) => {
  res.status(200).send("Room Created");
});

module.exports = router;
