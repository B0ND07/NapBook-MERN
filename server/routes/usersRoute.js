const express=require("express")
const verifyUser = require("../utils/verifyUser")
const verifyAdmin = require("../utils/verifyAdmin")
const { updateUser, deleteUser, getUser, getUsers, updateUsers } = require("../controllers/userController")

const router=express.Router()



router.put("/:id",verifyUser,updateUser)
router.delete("/:id",verifyUser,deleteUser)
router.get("/:id",verifyUser,getUser)   
router.get("/",verifyAdmin,getUsers)
router.put("/updateprofile/:username",updateUsers)
router.delete("/delete/:username",deleteUser)



module.exports=router