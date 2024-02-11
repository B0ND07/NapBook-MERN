const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");


const verifyAdmin = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json("Please Login to access this resource.")
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedData.id)

    if (user.isAdmin) {
       
  

   
    next();
}
}
module.exports=verifyAdmin
