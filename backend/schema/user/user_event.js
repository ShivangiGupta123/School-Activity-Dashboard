const mongoose = require("mongoose");
const event_schema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Class: { type: String, required: true },
    Roll_no: { type: Number, required: true },
    House: { type: String, required: true },
    Activity_name: { type: String, required: true },
  
  },
  { timestamps: true }
);
module.exports = mongoose.model("event", event_schema);
