const Booking = require("../models/BookingSchema");
const Hotel = require("../models/HotelSchema");

exports.createBooking = async (req, res) => {
    const newRoom = req.body;
    const savedRoom = await Booking.create(newRoom);
    res.json(savedRoom);
  };
  

   


exports.getBookings = async (req, res) => {
    const bookings = await Booking.find({
        user: req.user.id
    })

    if (!bookings) {
        return res.json("You have no booking yet" );
    }

    res.json({bookings})
}
