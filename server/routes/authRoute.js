const express=require("express")
const { register, login, logoutUser, reUser } = require("../controllers/authController")
const isAuthenticated = require("../utils/isAuthenticated")


const router=express.Router()


router.post("/register", register)
router.post("/login", login)
router.get("/logout",logoutUser)
router.get("/me",isAuthenticated,reUser)



module.exports=router