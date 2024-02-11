const express = require("express");
const {
  getBookings,
  createBooking,
  getAllBookings,
} = require("../controllers/bookingController");
const isAuthenticated = require("../utils/isAuthenticated");
const verifyAdmin = require("../utils/verifyAdmin");
const router = express.Router();

router.route("/:user").get(isAuthenticated, getBookings);
router.route("/book").post(isAuthenticated, createBooking);
router.route("/allbookings/booked").get(verifyAdmin,getAllBookings);

module.exports = router;
