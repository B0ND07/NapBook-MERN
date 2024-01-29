const User = require("../models/UserSchema");

exports.updateUser = async (req, res) => {
  const newUser = req.body;
  const id = req.params.id;
  const updateUser = await User.findByIdAndUpdate(id, newUser);
  res.json(updateUser);
};

// exports.deleteUser = async (req, res) => {
//   const id = req.params.id;
//   await User.findByIdAndDelete(id);
//   res.json("deleted");
// };
exports.deleteUser = async (req, res) => {
  const usernameToDelete = req.params.username;
  await User.findOneAndDelete({ username: usernameToDelete });
  res.json("deleted");
};

exports.getUser = async (req, res) => {
  const id = req.params.id;
  const getUser = await User.findById(id);
  res.json(getUser);
};

exports.getUsers = async (req, res) => {
  const getUsers = await User.find();
  res.json(getUsers);
};

exports.updateUsers = async (req, res, next) => {
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
};
