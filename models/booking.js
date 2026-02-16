const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  date: { type: String, required: true },
  start_time: { type: String, required: true },
  end_time: { type: String, required: true }
}, { timestamps: { createdAt: "created_at" } });

module.exports = mongoose.model("Booking", bookingSchema);
