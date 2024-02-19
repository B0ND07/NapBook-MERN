const User = require("../models/UserSchema");
const jwt = require('jsonwebtoken');

const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    // if (!token) {
    //     return res.json("Please Login to access this resource.")
    // }
    if(token){

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedData.id)
    req.user = user;
}

    // if (!user) {
    //     return res.json("Please Login to access this resource.")
    // }

    
    next();
}
module.exports=isAuthenticated