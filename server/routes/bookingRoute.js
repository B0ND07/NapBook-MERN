const express = require('express');
const { getBookings, createBooking } = require('../controllers/bookingController');
const router=express.Router()




router.route('/:user').get(getBookings);
router.route('/book').post(createBooking);

module.exports=router