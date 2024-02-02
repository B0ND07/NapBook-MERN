const Booking = require("../models/BookingSchema");

exports.createBooking = async (req, res) => {
  try{
  const newRoom = req.body;
  const savedRoom = await Booking.create(newRoom);
  res.json(savedRoom);
}catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
};

exports.getBookings = async (req, res) => {
  try{
  const { user } = req.params;
  const bookings = await Booking.find({ user });

  if (!bookings) {
    return res.json("You have no booking yet");
  }

  res.json({ bookings });
}catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
};



exports.getAllBookings = async (req, res) => {
  try{
    // const { Booked } = req.params;
    const bookings = await Booking.find();
  
    if (!bookings) {
      return res.json(" no booking yet");
    }
  
    res.json({ bookings });
  }catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
 

