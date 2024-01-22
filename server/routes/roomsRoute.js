const express=require("express");
const { deleteRoom, updateRoomAvailability, updateRoom, createRoom, getRoom, getRooms } = require("../controllers/roomController");
const verifyAdmin = require("../utils/verifyAdmin");

const router=express.Router()


router.post("/:hotelid", verifyAdmin, createRoom);


router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getRooms);

module.exports=router