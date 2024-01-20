const express=require("express")
const Hotel = require("../models/Hotel")

const router=express.Router()

router.post("/",async(req,res)=>{
    const newHotel=req.body
    const savedHotel=await Hotel.create(newHotel)
    res.json(savedHotel)
})

router.put("/:id",async(req,res)=>{
    const newHotel=req.body
    const id=req.params.id
    const updateHotel=await Hotel.findByIdAndUpdate(id,newHotel)
    res.json(updateHotel)
})

router.delete("/:id",async(req,res)=>{
    const id=req.params.id
    const updateHotel=await Hotel.findByIdAndDelete(id)
    res.json("deleted")
})

router.get("/:id",async(req,res)=>{
  
    const id=req.params.id
    const updateHotel=await Hotel.findById(id)
    res.json(updateHotel)
})

router.get("/",async(req,res)=>{
    const updateHotel=await Hotel.find()
    res.json(updateHotel)
})





module.exports=router