const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("test");
});

app.listen(5000, console.log('server is running on http://localhost:5000'));
