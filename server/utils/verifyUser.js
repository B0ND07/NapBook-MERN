const verifyToken = require("./verifyToken");

const verifyUser = (req, res, next) => {
    verifyToken(req, res,next, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return res.json("Token is not authorised!")
      }
    });
  };
module.exports=verifyUser