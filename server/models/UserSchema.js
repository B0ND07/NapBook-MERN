const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    trim: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
 
},
{timestamps:true});

const User=mongoose.model("Users",userSchema)

module.exports=User