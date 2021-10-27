const app = require("express").Router();
const db = require("../models");

// this route is for use on index.html and will provide aggregate workout information for get requests to /
app.get("/api/workouts", async (req, res) => {
    try {
      const workout = await db.Workout.aggregate([
        {
          $addFields: {
            totalDuration: { $sum: "$exercises.duration" },
          },
        },
      ]);
      res.status(200).json(workout);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  module.exports = app;