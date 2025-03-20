let express = require("express");
let Treatment = require("../model/treatmentModel");
let treatmentRouting = express.Router();

treatmentRouting.post("/treatment", async (req, res) => {
  try {
    let treatment = new Treatment(req.body);
    let result = await treatment.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

treatmentRouting.get("/treatment", async (req, res) => {
  try {
    let treatment = await Treatment.find();
    res.send(treatment);
  } catch (err) {
    res.send(err);
  }
});

treatmentRouting.get("/treatment/:treatname", async (req, res) => {
  try {
    let treatment = await Treatment.findOne({ tname: req.params.treatname });
    res.send(treatment);
  } catch (err) {
    res.send(err);
  }
});

treatmentRouting.delete("/treatment/:tid", async (req, res) => {
  try {
    let treatment = await Treatment.deleteOne({ _id: req.params.tid });
    res.send(treatment);
  } catch (err) {
    res.send(err);
  }
});

treatmentRouting.put("/treatment/:treatname", async (req, res) => {
  try {
    let treatment = await Treatment.updateOne(
      { tname: req.params.treatname },
      { $set: req.body }
    );
    res.send(treatment);
  } catch (err) {
    res.send(err);
  }
});

module.exports = treatmentRouting;
