const express = require('express');
const Workout = require('../models/Workout');
const router = express.Router();

// Log a new workout
router.post('/', async (req, res) => {
  const { user_id, type, duration, intensity, calories_burned } = req.body;
  try {
    const workout = new Workout({ user_id, type, duration, intensity, calories_burned });
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all workouts for a user
router.get('/:user_id', async (req, res) => {
  try {
    const workouts = await Workout.find({ user_id: req.params.user_id });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
