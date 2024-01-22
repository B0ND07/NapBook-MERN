const Hotel = require("../models/HotelSchema");

exports.createHotel = async (req, res) => {
  const newHotel = req.body;
  const savedHotel = await Hotel.create(newHotel);
  res.json(savedHotel);
};

exports.updateHotel = async (req, res) => {
  const updatedHotel = await Hotel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json(updatedHotel);
};

exports.deleteHotel = async (req, res) => {
  const id = req.params.id;
  await Hotel.findByIdAndDelete(id);
  res.json("deleted");
};

exports.getHotel = async (req, res) => {
  const id = req.params.id;
  const getHotel = await Hotel.findById(id);
  res.json(getHotel);
};

exports.getHotels = async (req, res) => {
  const updateHotel = await Hotel.find();
  res.json(updateHotel);
};
