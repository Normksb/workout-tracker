require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require('./models');
const path = require("path");
const htmlRoutes = require("./controller/html-routes");
const apiRoutes = require("./controller/api-routes");
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(htmlRoutes)
app.use(apiRoutes)

app.listen(PORT, () => {
    console.log("Now listening on port", PORT);
  });