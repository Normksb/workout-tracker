const app = require("express").Router();
const db = require("../models");

// this route responds to get requests on /api/workouts and includes the current workout with aggregate information
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

// this route responds to put requests on /api/workouts/a-workout-id and updates the current workout with new exercises.
app.put("/api/workouts/:id", async (req, res) => {
    try {
      const workoutUpdate = await db.Workout.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body },
        }
      );
      res.json(workoutUpdate);
    } catch (error) {
      res.status(500).send(error);
    }
  });


// this route responds to post requests on /api/workouts to create a new workout
app.post("/api/workouts", async (req, res) => {
    try {
      const newWorkout = await db.Workout.create(req.body);
      res.json(newWorkout);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });


  module.exports = app;