const jwt = require("jsonwebtoken");
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
    // Check if creator already has a room
    const isCreatorOwnRoom = await room.findOne({ creator: req.user._id });

    // Check if creator is part of any room
    const isCreatorInRoom = await room.find({
      members: { $in: [req.user._id] },
    });

    if (isCreatorOwnRoom || isCreatorInRoom.length > 0)
      return res.status(409).send({ res: "Bad Request" });

    // Create new room
    const newRoom = new room({
      creator: req.user._id,
      token: random.randomAlphanumeric(5, "lowercase"),
      members: [],
    });
    await newRoom.save();

    res.status(200).send({ res: "room created" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ res: "Internal Server Error" });
  }
};

exports.joinRoom = async (req, res) => {
  try {
    const token = req.params.token;

    // Check if logged in user is a room owner/creator
    const isARoomCreator = await room.findOne({ creator: req.user._id });
    const isARoomMember = await room.find({ members: { $in: [req.user._id] } });

    if (isARoomCreator || isARoomMember.length > 0)
      return res.status(409).send({ res: "bas request" });

    // Find Room and update value
    await room.findOneAndUpdate(
      { token: token },
      { $push: { members: req.user._id } }
    );

    res.status(200).send({ res: "added to room" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ res: "Internal Server Error" });
  }
};
