const express = require("express");
const connect = require("./config/database");
const authRoutes=require("./routes/auth")
const hotelsRoutes=require("./routes/hotels")
const roomsRoutes=require("./routes/rooms")
const usersRoutes=require("./routes/users")

const app = express();
const env=require("dotenv").config()
connect()
app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/hotels",hotelsRoutes)
app.use("/api/rooms",roomsRoutes)
app.use("/api/users",usersRoutes)

app.listen(5006, console.log('server is running on http://localhost:5006'));
