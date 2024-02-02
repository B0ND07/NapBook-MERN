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

    const user=await User.create(newUser)
    
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin,username: user.username, email: user.email },
      process.env.JWT_SECRET, {expiresIn: '20m'}
    );
    const refreshToken = jwt.sign({id: user._id, isAdmin: user.isAdmin,username: user.username, email: user.email}, 
      process.env.JWT_REFRESH_SECRET, {expiresIn: '7d'})

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.cookie('accessToken', accessToken, {maxAge: 900000, httpOnly: true, secure: true, sameSite: 'None'}) //15m
    res.cookie('refreshToken', refreshToken, 
    {maxAge: 86400000, httpOnly: true, secure: true, sameSite: 'None'}) //7d
return res.json({ user: user });
  } catch (err) {
    res.json(err)
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

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin,username: user.username, email: user.email },
      process.env.JWT_SECRET, {expiresIn: '20m'}
    );
    const refreshToken = jwt.sign({id: user._id, isAdmin: user.isAdmin,username: user.username, email: user.email}, 
      process.env.JWT_REFRESH_SECRET, {expiresIn: '50m'})

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.cookie('accessToken', accessToken, {maxAge: 60000, httpOnly: true, secure: true, sameSite: 'None'})
    res.cookie('refreshToken', refreshToken, 
    {maxAge: 300000, httpOnly: true, secure: true, sameSite: 'None'})
return res.json({ user: user });
  } catch (err) {
    res.json(err)
    console.log(err);
  }
};

exports.logoutUser=async(req,res)=>{
  try{
  res.cookie("accessToken",null,{
    expires: new Date(Date.now()),
    httpOnly: true
  })
  res.cookie("refreshToken",null,{
    expires: new Date(Date.now()),
    httpOnly: true
  })
  res.json({
    success: true,
    message: "Logged Out"
})
}catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
};

exports.reUser = async (req, res, next) => {
  try{
  res.status(200).json({
    
    
      user: req.user
  })
  console.log("reUser")
}catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
};

