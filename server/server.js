const express = require("express");
const connect = require("./config/database");
const authRoute = require("./routes/authRoute");
const hotelsRoute = require("./routes/hotelsRoute");
const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/usersRoute");
const bookingRoute = require("./routes/bookingRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const env = require("dotenv").config();

connect();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);

app.listen(process.env.PORT||5006, console.log("server is running on http://localhost:5006"));
