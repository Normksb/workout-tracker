const app = require("express").Router();
const path = require("path");


// route to serve index.html to any get request on /
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

// route serve exerice.html to get requests on /exercise
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  });

// route to serve stats.html to get requests on /stats
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  });

module.exports = app;