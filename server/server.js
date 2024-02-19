const express = require("express");
const connect = require("./config/database");
const authRoute = require("./routes/authRoute");
const hotelsRoute = require("./routes/hotelsRoute");
const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/usersRoute");
const bookingRoute = require("./routes/bookingRoute");
const passport=require("passport")
const cookieParser = require("cookie-parser");
const cors = require("cors");

//gauth
const session=require("express-session");
const User = require("./models/UserSchema");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;



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

//gauth
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
      clientID:process.env.CLIENT_ID,
      clientSecret:process.env.CLIENT_SECRET,
      callbackURL:process.env.MY_URL+"/auth/google/callback",
      scope:["profile","email"]
  }, async(accessToken,refreshToken,profile,done)=>{
    try {
      let user = await User.findOne({email:profile.email});

            if(!user){
                user = new User({
                    username:profile.given_name,
                    email:profile.email,
                  
                });

                await user.save();
            }

       console.log(profile);

        return done(null,user)
    } catch (error) {
        return done(error,null)
    }
}
)
)
passport.serializeUser((user,done)=>{
  done(null,user);
})

passport.deserializeUser((user,done)=>{
  done(null,user);
});

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get('/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: 'http://localhost:3000',
        failureRedirect: 'http://localhost:3000/login'
}));

app.get("/login/sucess",async(req,res)=>{

  if(req.user){
      res.status(200).json({message:"user Login",user:req.user})
  }else{
      res.status(400).json({message:"Not Authorized"})
  }
})

app.get("/logout",(req,res,next)=>{
  req.logout(function(err){
      if(err){return next(err)}
      res.redirect("http://localhost:3000");
  })
})

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);

app.listen(5006, console.log("server is running on http://localhost:5006"));

