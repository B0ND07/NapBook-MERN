const express = require('express');
const { getBookings, createBooking } = require('../controllers/bookingController');
const router=express.Router()




router.route('/').get(getBookings);
router.route('/book').post(createBooking);

module.exports=router