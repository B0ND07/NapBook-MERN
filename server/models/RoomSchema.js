const mongoose=require("mongoose")
const roomSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  isBooked: {
    type: Boolean,
    default: false,
  }},
    { timestamps: true }
  );

  const Room=mongoose.model("Rooms",roomSchema)

module.exports=Room
  