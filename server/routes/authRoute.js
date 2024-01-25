const express=require("express")
const { register, login, logoutUser, reUser } = require("../controllers/authController")
const verifyToken = require("../utils/verifyToken")


const router=express.Router()


router.post("/register", register)
router.post("/login", login)
router.get("/logout",logoutUser)
router.get("/me",verifyToken,reUser)



module.exports=router