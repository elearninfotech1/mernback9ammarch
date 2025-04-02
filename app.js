const express = require("express");
let cors = require("cors");
const userRouting = require("./router/userRouting");
const signupRouting = require("./router/signupRouting");
const treatmentRouting = require("./router/treatmentRouting");
const doctorRouting = require("./router/doctorRouting");
const appointmentRouting = require("./router/appointmentRouting");
const contactusRouting = require("./router/contactusRouting");
require("./dbconfig/dbconfig");
let app = express();

app.use(cors());
app.use(express.json());
app.use("/", userRouting);
app.use("/", signupRouting);
app.use("/", treatmentRouting);
app.use("/", doctorRouting);
app.use("/", appointmentRouting);
app.use("/", contactusRouting);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
