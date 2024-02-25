const express=require("express")
const { register, login, logoutUser, reUser, googleAuth } = require("../controllers/authController")
const isAuthenticated = require("../utils/isAuthenticated")


const router=express.Router()


router.post("/register", register)
router.post("/login", login)
router.post("/logout",logoutUser)
router.post("/gauth",googleAuth)
router.get("/me",isAuthenticated,reUser)



module.exports=router