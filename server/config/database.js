const mongoose = require("mongoose");

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected");
    }catch(err){
        console.log("DB failed to connect",err);  
    }
}
module.exports=connect