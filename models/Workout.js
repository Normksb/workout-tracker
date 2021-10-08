const { Schema, model } = require('mongoose');

const WorkoutSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now(),
    },
    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  });


  const Workout = model("Workout", WorkoutSchema);

  module.exports = Workout;