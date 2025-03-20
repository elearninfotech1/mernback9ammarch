let express = require("express");
let User = require("../model/userModel");
const userModel = require("../model/userModel");
let userRouting = express.Router();

userRouting.get("/user", async (req, res) => {
  let user = await User.find();
  res.send(user);
});

userRouting.post("/user", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

userRouting.delete("/user/:sid", async (req, res) => {
  let user = await User.deleteOne({ _id: req.params.sid });
  res.send(user);
});

userRouting.get("/user/:sid", async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.params.sid });
    res.send(user);
  } catch (err) {
    res.send("Unable to hit the api");
  }
});

userRouting.put("/user/:sid", async (req, res) => {
  let user = await User.updateOne({ _id: req.params.sid }, { $set: req.body });
  res.send(user);
});

module.exports = userRouting;
