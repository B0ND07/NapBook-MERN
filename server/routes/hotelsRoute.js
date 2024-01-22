const express=require("express")
const Hotel = require("../models/HotelSchema")
const { createHotel, updateHotel, deleteHotel, getHotel, getHotels } = require("../controllers/hotelController")
const verifyAdmin = require("../utils/verifyAdmin")

const router=express.Router()

router.post("/",verifyAdmin,createHotel)

router.put("/:id",verifyAdmin,updateHotel)

router.delete("/:id",verifyAdmin,deleteHotel)

router.get("/:id",verifyAdmin,getHotel)

router.get("/",verifyAdmin,getHotels)





module.exports=router