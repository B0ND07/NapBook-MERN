const express = require("express");
const {
  getBookings,
  createBooking,
  getAllBookings,
} = require("../controllers/bookingController");
const isAuthenticated = require("../utils/isAuthenticated");
const router = express.Router();

router.route("/:user").get(isAuthenticated, getBookings);
router.route("/book").post(isAuthenticated, createBooking);
router.route("/allbookings/booked").get(isAuthenticated, getAllBookings);

module.exports = router;
