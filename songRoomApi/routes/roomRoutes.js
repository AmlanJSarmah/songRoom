const express = require("express");
const router = express.Router();

// Controllers
const roomController = require("../controllers/roomController");

router.use("/room", roomController.isAuth);
router.get("/room/create", roomController.createRoom);
router.get("/room/join/:token", roomController.joinRoom);

module.exports = router;
