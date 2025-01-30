const Hotel = require("../models/HotelSchema");

exports.createHotel = async (req, res) => {
  try {
    const newHotel = req.body;
    const savedHotel = await Hotel.create(newHotel);
    res.json(savedHotel);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedHotel);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const id = req.params.id;
    await Hotel.findByIdAndDelete(id);
    res.json("deleted");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getHotel = async (req, res) => {
  try {
    const id = req.params.id;
    const getHotel = await Hotel.findById(id);
    res.json(getHotel);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getHotels = async (req, res) => {
  try {
    const updateHotel = await Hotel.find();
    res.json(updateHotel);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.searchHotels = async (req, res) => {
  try {
    const { query } = req.params;
    const foundHotels = await Hotel.find({ city: query });
    if (foundHotels.length === 0) {
      return res.json("No hotels found in the specified city");
    }
    res.json(foundHotels);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// exports.bookedRoom=async(req,res)=>{
//   const { hotelId, roomNumber } = req.body;
//   try{
//     const hotel = await Hotel.findById(hotelId);
//     hotel.rooms = hotel.rooms.filter(room => room !== roomNumber);
//     await hotel.save();
//     res.json({ message: 'Room removed successfully' });

//   }catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
