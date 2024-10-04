const mongoose = require('mongoose');

// Workout Schema
const WorkoutSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  intensity: {
    type: String,
    required: true,
    enum: ['Low', 'Moderate', 'High'],
  },
  calories_burned: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;
