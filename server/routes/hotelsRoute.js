const express=require("express")

const { createHotel, updateHotel, deleteHotel, getHotel, getHotels, searchHotels, bookedRoom } = require("../controllers/hotelController")
const isAuthenticated = require("../utils/isAuthenticated")

const router=express.Router()

router.post("/",isAuthenticated,createHotel)

router.put("/:id",isAuthenticated,updateHotel)

router.delete("/:id",isAuthenticated,deleteHotel)

router.get("/:id",getHotel)

router.get("/",getHotels)

router.get("/search/:query",searchHotels)

router.post("/booked",bookedRoom)





module.exports=router