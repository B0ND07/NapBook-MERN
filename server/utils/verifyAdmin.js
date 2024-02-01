const verifyToken = require("./verifyToken");

const verifyAdmin = async (req, res, next) => {
  try {
    await verifyToken(req, res, async () => {
      const user = req.user;
  

      if (!user) {
        return res.json({ message: "User not found" });
      }

      if (user.isAdmin) {
        next();
      } else {
        return res.json({ message: "Not an admin user" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = verifyAdmin;
