const Booking = require("../models/booking");

exports.createBooking = async (req, res) => {
  try {
    const { user_name, date, start_time, end_time } = req.body;

    if (end_time <= start_time) {
      return res.status(400).json({ message: "End time must be after start time" });
    }

    const overlapping = await Booking.findOne({
      date,
      start_time: { $lt: end_time },
      end_time: { $gt: start_time }
    });

    if (overlapping) {
      return res.status(400).json({ message: "Time slot already booked" });
    }

    const booking = new Booking({ user_name, date, start_time, end_time });
    await booking.save();

    res.status(201).json(booking);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const { date, page = 1, limit = 5 } = req.query;

    let filter = {};
    if (date) filter.date = date;

    const bookings = await Booking.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(bookings);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getBookingById = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ message: "Not found" });
  res.json(booking);
};

exports.deleteBooking = async (req, res) => {
  const booking = await Booking.findByIdAndDelete(req.params.id);
  if (!booking) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Booking cancelled" });
};
