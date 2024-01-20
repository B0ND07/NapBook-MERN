const express=require("express")
const Hotel = require("../models/HotelSchema")
const { createHotel, updateHotel, deleteHotel, getHotel, getHotels } = require("../controllers/hotelController")

const router=express.Router()

router.post("/",createHotel)

router.put("/:id",updateHotel)

router.delete("/:id",deleteHotel)

router.get("/:id",getHotel)

router.get("/",getHotels)





module.exports=router