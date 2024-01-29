const express = require("express");
const {
  getBookings,
  createBooking,
  getAllBookings,
} = require("../controllers/bookingController");
const router = express.Router();

router.route("/:user").get(getBookings);
router.route("/book").post(createBooking);
router.route("/allbookings/booked").get(getAllBookings);

module.exports = router;
