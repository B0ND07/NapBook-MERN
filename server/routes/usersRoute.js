const express=require("express")
// const verifyToken = require("../utils/verifyToken")
const verifyUser = require("../utils/verifyUser")
const verifyAdmin = require("../utils/verifyAdmin")
const { updateUser, deleteUser, getUser, getUsers } = require("../controllers/userController")

const router=express.Router()

// router.get("/checkauth", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//       res.send("hello admin, you are logged in and you can delete all accounts")
//     })

router.put("/:id",verifyUser,updateUser)
router.delete("/:id",verifyUser,deleteUser)
router.get("/:id",verifyUser,getUser)   
router.get("/",verifyAdmin,getUsers)

module.exports=router