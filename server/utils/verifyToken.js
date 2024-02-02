const jwt = require("jsonwebtoken");

const verifyToken = async(req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if(!accessToken) {
    try {
      await renewToken(req, res);
      next();
    } catch (error) {
      console.log(error)
      return res.json({  message: "Error Renewing Token or No Refresh Token" });
    }
  } else {
     jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
         
          renewToken(req, res)
            .then(() => next())
            .catch((renewError) =>
              res.json({  message: "Error Renewing Token", error: renewError })
            );
        } else {
          return res.json({  message: "Invalid Token", error: err });
        }
      } else {
        req.user = decoded;
       
        next();
      }
    });
  }
};

const renewToken = async(req, res) => {
  try{
  const refreshToken = req.cookies.refreshToken;
  
  if (!refreshToken) {
  
    return Promise.reject(new Error("No Refresh Token"));
  } else {
    return new Promise((resolve, reject) => {
      jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, async(err, user) => {
        if (err) {
        
          reject(new Error("Invalid Refresh Token"));
        } else {
          console.log("decode",user)
          const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin,username: user.username, email: user.email },
            process.env.JWT_SECRET, {expiresIn: '15m'}
          );
          console.log("New access token:", accessToken);
          res.cookie('accessToken', accessToken, { maxAge: 900000, overwrite: true });
        
          resolve();
        }
      });
    });
  }
}catch (error) {
  res.status(500).json({ error: 'Internal Server Error' });
}
};

module.exports = verifyToken;