const express=require("express")
const { updateUser, deleteUser, getUser, getUsers, updateUsers } = require("../controllers/userController")
const isAuthenticated = require("../utils/isAuthenticated")
const verifyAdmin = require("../utils/verifyAdmin")

const router=express.Router()



router.put("/:id",isAuthenticated,updateUser)
router.delete("/:id",verifyAdmin,deleteUser)
router.get("/:id",isAuthenticated,getUser)   
router.get("/",verifyAdmin,getUsers)
router.put("/updateprofile/:username",isAuthenticated,updateUsers)
router.delete("/delete/:username",isAuthenticated,deleteUser)



module.exports=router