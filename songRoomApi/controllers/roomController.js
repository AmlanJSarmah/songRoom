const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const random = require("random-string-alphanumeric-generator");

// models
const room = require("../models/room");
const user = require("../models/user");

const JWT_SECRET = "u7$K!9zQ@1pL#xV2wR^eT8bS%jN6mC4aD0fG";

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.get("Authorization").split(" ")[1];
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const loggedInUser = await user.findById(decodedToken.id);
    req.user = loggedInUser;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).send({ res: "Invalid Token" });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const isRoomExist = await room.findOne({ creator: req.user._id });
    if (isRoomExist) return res.status(409).send({ res: "Bad Request" });
    const newRoom = new room({
      creator: req.user._id,
      token: random.randomAlphanumeric(5, "lowercase"),
    });
    await newRoom.save();
    res.status(200).send({ res: "room created" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ res: "Internal Server Error" });
  }
};
