const Booking = require("../models/BookingSchema");
const Stripe = require("stripe");
const User = require("../models/UserSchema");
const Hotel = require("../models/HotelSchema");

// exports.createBooking = async (req, res) => {
//   try {
//     const newRoom = req.body;
//     const savedRoom = await Booking.create(newRoom);
//     res.json(savedRoom);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

exports.getBookings = async (req, res) => {
  try {
    const { user } = req.params;
    const bookings = await Booking.find({ user })

    if (!bookings) {
      return res.json("You have no booking yet");
    }

    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    // const { Booked } = req.params;
    const bookings = await Booking.find()

    if (!bookings) {
      return res.json(" no booking yet");
    }

    res.json({ bookings });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getCheckOutSession = async (req, res) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const user = await User.findById(req.user);
    const hotel = await Hotel.findById(req.params.hotelId);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}`,
      cancel_url: `${process.env.CLIENT_URL}`,
      customer_email: user.email, 
      billing_address_collection: "required",
      line_items: [
        {
          price_data: {
            currency: "inr",
            unit_amount: 500 * 100,
            product_data: {
              name: hotel.name,
              description: hotel.city,
              images: [hotel.photos],
            },
          },
          quantity: 1,
        },
      ],
    });

    //book room
    const newRoom = req.body;
    await Booking.create(newRoom);

    //detach room
    hotel.rooms = hotel.rooms.filter((room) => room !== newRoom.roomno);
    await hotel.save();

    res.json({ message: "success", session });
  } catch (err) {
    console.log(err);
  }
};
