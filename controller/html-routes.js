const app = require("express").Router();
const path = require("path");


// route to serve index.html to any get request on /
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

module.exports = app;