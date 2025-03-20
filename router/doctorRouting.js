let express = require("express");
let Doctor = require("../model/doctorModel");
let doctorRouting = express.Router();

doctorRouting.post("/doctor", async (req, res) => {
  try {
    let doctor = new Doctor(req.body);
    let result = await doctor.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

doctorRouting.get("/doctor/:treatname", async (req, res) => {
  try {
    let doctor = await Doctor.find({ tname: req.params.treatname });
    res.send(doctor);
  } catch (err) {
    res.send(err);
  }
});

/*
doctorRouting.get("/treatment", async (req, res) => {
  try {
    let treatment = await Doctor.find();
    res.send(treatment);
  } catch (err) {
    res.send(err);
  }
});



doctorRouting.delete("/treatment/:tid", async (req, res) => {
  try {
    let treatment = await Doctor.deleteOne({ _id: req.params.tid });
    res.send(treatment);
  } catch (err) {
    res.send(err);
  }
});

doctorRouting.put("/treatment/:treatname", async (req, res) => {
  try {
    let treatment = await Doctor.updateOne(
      { tname: req.params.treatname },
      { $set: req.body }
    );
    res.send(treatment);
  } catch (err) {
    res.send(err);
  }
});
*/
module.exports = doctorRouting;
