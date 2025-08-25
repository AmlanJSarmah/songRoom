const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Models
const user = require("../models/user");

// JWT Secret
const JWT_SECRET = "u7$K!9zQ@1pL#xV2wR^eT8bS%jN6mC4aD0fG";

exports.userSignUp = async (req, res) => {
  try {
    // Expects data in format { username: "AJ", password: "XYZ"}
    const userName = req.body.username;
    const isUser = await user.find({ username: userName });
    if (isUser.length == 0) {
      const password = await bcrypt.hash(req.body.password, 12);
      const newUser = new user({ username: userName, password: password });
      await newUser.save();
      res.status(200).send({ res: "user signed up" });
    } else {
      res.status(409).send({ res: "user already exist" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ res: "Internal server error" });
  }
};

exports.userLogIn = async (req, res) => {
  try {
    const userName = req.body.username;
    const appUser = await user.findOne({ username: userName });
    if (appUser) {
      const isAuth = await bcrypt.compare(req.body.password, appUser.password);
      if (!isAuth) res.status(401).send({ res: "Wrong Password" });
      const token = jwt.sign(
        { username: appUser.username, is: appUser._id },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).send({ token: token, res: "LoggedIn" });
    } else {
      res.status(409).send({ res: "User Doesn't Exist" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ res: "Internal Server error" });
  }
};
