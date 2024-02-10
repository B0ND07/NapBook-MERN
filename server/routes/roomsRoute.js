const express=require("express");
const { deleteRoom, updateRoomAvailability, updateRoom, createRoom, getRoom, getRooms } = require("../controllers/roomController");

const router=express.Router()


router.post("/:hotelid", createRoom);


router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", updateRoom);

router.delete("/:id/:hotelid", deleteRoom);
router.get("/:id", getRoom);
router.get("/", getRooms);

module.exports=router