let jwt = require("jsonwebtoken");

let loginMiddleware = (req, res, next) => {
  let token = req.header("x-token");
  if (!token) {
    res.send("No Token");
  }

  let decode = jwt.verify(token, "JSONString123");
  req.user = decode.user;
  next();
};

module.exports = loginMiddleware;
