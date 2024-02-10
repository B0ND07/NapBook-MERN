const express=require("express")
const { updateUser, deleteUser, getUser, getUsers, updateUsers } = require("../controllers/userController")
const isAuthenticated = require("../utils/isAuthenticated")

const router=express.Router()



router.put("/:id",isAuthenticated,updateUser)
router.delete("/:id",isAuthenticated,deleteUser)
router.get("/:id",isAuthenticated,getUser)   
router.get("/",isAuthenticated,getUsers)
router.put("/updateprofile/:username",updateUsers)
router.delete("/delete/:username",deleteUser)



module.exports=router