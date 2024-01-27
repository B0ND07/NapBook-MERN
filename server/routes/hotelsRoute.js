const express=require("express")

const { createHotel, updateHotel, deleteHotel, getHotel, getHotels } = require("../controllers/hotelController")
const verifyAdmin = require("../utils/verifyAdmin")

const router=express.Router()

router.post("/",verifyAdmin,createHotel)

router.put("/:id",verifyAdmin,updateHotel)

router.delete("/:id",verifyAdmin,deleteHotel)

router.get("/:id",getHotel)

router.get("/",getHotels)





module.exports=router