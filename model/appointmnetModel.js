let mongoose = require("mongoose");

let appointmentSchema = new mongoose.Schema({
  tname: {
    type: String,
    required: true,
  },
  dname: {
    type: String,
    required: true,
  },
  pname: {
    type: String,
    required: true,
  },
  bdate: {
    type: String,
    required: true,
  },
  btime: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("appointments", appointmentSchema);
