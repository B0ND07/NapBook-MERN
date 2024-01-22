const User = require("../models/UserSchema")


    
    exports.updateUser=async(req,res)=>{
        const newUser=req.body
        const id=req.params.id
        const updateUser=await User.findByIdAndUpdate(id,newUser)
        res.json(updateUser)
    }
    
    exports. deleteUser=async(req,res)=>{
        const id=req.params.id
        await User.findByIdAndDelete(id)
        res.json("deleted")
    }
    
    exports.getUser=async(req,res)=>{
      
        const id=req.params.id
        const getUser=await User.findById(id)
        res.json(getUser)
    }
    
    exports.getUsers=async(req,res)=>{
        const getUsers=await User.find()
        res.json(getUsers)
    }