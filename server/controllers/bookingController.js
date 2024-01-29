const Booking = require("../models/BookingSchema");

exports.createBooking = async (req, res) => {
  const newRoom = req.body;
  const savedRoom = await Booking.create(newRoom);
  res.json(savedRoom);
};

exports.getBookings = async (req, res) => {
  const { user } = req.params;
  const bookings = await Booking.find({ user });

  if (!bookings) {
    return res.json("You have no booking yet");
  }

  res.json({ bookings });
};



exports.getAllBookings = async (req, res) => {
    // const { Booked } = req.params;
    const bookings = await Booking.find();
  
    if (!bookings) {
      return res.json(" no booking yet");
    }
  
    res.json({ bookings });
  };
  
 

