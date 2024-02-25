const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");

exports.register = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email or username already exists" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = {
      ...req.body,
      password: hash,
    };

    const user = await User.create(newUser);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    //expire in two day (that 2 indicates day)

    const options = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.cookie("token", token, options);

    res.json({ user });
  } catch (err) {
    res.json(err);
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

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    //expire in two day (that 2 indicates day)

    const options = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.cookie("token", token, options);

    res.json({ user });
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};

exports.googleAuth=async(req,res)=>{
 try{
  let user = await User.findOne({ email: req.body.email })
  if (!user) {
   
    user = new User({
      email:req.body.email,
      username:req.body.email,
    });
    await user.save();

  }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    //expire in two day (that 2 indicates day)

    const options = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.cookie("token", token, options);

    res.json({ user });}catch(err){
      console.log(err);
    }
  }

  

exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.reUser = async (req, res, next) => {
  try {
    res.status(200).json({
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
