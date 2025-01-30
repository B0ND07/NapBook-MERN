const express=require("express")

const { createHotel, updateHotel, deleteHotel, getHotel, getHotels, searchHotels, bookedRoom } = require("../controllers/hotelController")
const isAuthenticated = require("../utils/isAuthenticated")
const verifyAdmin = require("../utils/verifyAdmin")

const router=express.Router()

router.post("/",verifyAdmin,createHotel)

router.put("/:id",verifyAdmin,updateHotel)

router.delete("/:id",verifyAdmin,deleteHotel)

router.get("/:id",getHotel)

router.get("/",getHotels)

router.get("/search/:query",searchHotels)

// router.post("/booked",bookedRoom)





module.exports=router