const verifyToken = require("./verifyToken");

const verifyUser = (req, res, next) => {
  try{
    verifyToken(req, res,next, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return res.json("Token is not authorised!")
      }
    });
  }catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports=verifyUser