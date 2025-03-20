let express = require("express");
let jwt = require("jsonwebtoken");
let Signup = require("../model/signupModel");
const loginMiddleware = require("./loginMiddleware");
let signupRouting = express.Router();

signupRouting.post("/singup", async (req, res) => {
  try {
    let signup = new Signup(req.body);
    let result = await signup.save();
    res.send(result);
  } catch (err) {
    res.send("Error:", err);
  }
});

signupRouting.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let exists = await Signup.findOne({ email: email });
  if (!exists) {
    res.send("NoUser");
  } else if (exists.password !== password) {
    res.send("Invalid");
  } else {
    let payload = {
      user: {
        id: exists._id,
      },
    };
    jwt.sign(payload, "JSONString123", { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;
      res.send({ token });
    });
  }
});

signupRouting.get("/admindashboard", loginMiddleware, (req, res) => {
  res.send("Admin");
});

module.exports = signupRouting;
