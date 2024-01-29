const mongoose=require("mongoose")

const hotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    specification:{
        type:[String],

    },  
    city: {
        type: String,
   
      },
      address: {
        type: String,
        
      },
      description: {
        type: String,
    },
      distance: {
        type: String,
       
      },
      price: {
        type: String,
   
      },
      photos: {
        type: String,
      },
      rooms: {
        type: [String],
      },
    

})

const Hotel=mongoose.model("Hotels",hotelSchema)

module.exports=Hotel