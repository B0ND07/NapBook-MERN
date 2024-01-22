const verifyToken = require("./verifyToken");

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res,next, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return res.json("you are not authorised")
      }
    });
  };

module.exports=verifyAdmin
  
 