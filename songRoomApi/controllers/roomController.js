const jwt = require("jsonwebtoken");

const JWT_SECRET = "u7$K!9zQ@1pL#xV2wR^eT8bS%jN6mC4aD0fG";

exports.isAuth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split(" ")[1];
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).send({ res: "Invalid Token" });
  }
};
