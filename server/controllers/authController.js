const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");

exports.register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = {
      ...req.body,
      password: hash,
    };

    await User.create(newUser)
    res.json({details:newUser});
  } catch (err) {
    console.log(err);
  }
};
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.json("User not found!");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return res.json("Wrong password or username!");

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    res.json(err)
    console.log(err);
  }
};

exports.logoutUser=async(req,res)=>{
  res.cookie("access_token",null,{
    expires: new Date(Date.now()),
    httpOnly: true
  })
  res.json({
    success: true,
    message: "Logged Out"
})
}


