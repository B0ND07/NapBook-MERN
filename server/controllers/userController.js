const User = require("../models/UserSchema");

exports.updateUser = async (req, res) => {
  try{
  const newUser = req.body;
  const id = req.params.id;
  const updateUser = await User.findByIdAndUpdate(id, newUser);
  res.json(updateUser);
}catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
};

// exports.deleteUser = async (req, res) => {
//   const id = req.params.id;
//   await User.findByIdAndDelete(id);
//   res.json("deleted");
// };
exports.deleteUser = async (req, res) => {
  try{
  const usernameToDelete = req.params.username;
  await User.findOneAndDelete({ username: usernameToDelete });
  res.json("deleted");
}catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
};

exports.getUser = async (req, res) => {
  try{
  const id = req.params.id;
  const getUser = await User.findById(id);
  res.json(getUser);
}catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
};

exports.getUsers = async (req, res) => {
  try{
  const getUsers = await User.find();
  res.json(getUsers);
}catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
};

exports.updateUsers = async (req, res, next) => {
  try{
  const { username, email } = req.body;
  const oldusername = req.params.username;

  const user = await User.findOneAndUpdate(
    { username: oldusername },
    {
      $set: {
        username,
        email,
      },
    },
    { new: true }
  );

  res.status(200).json({
    user,
  });
}catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
};
