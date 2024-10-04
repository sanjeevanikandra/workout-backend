// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); 

// Hardcoded MongoDB connection string for troubleshooting
const mongoURI = 'mongodb+srv://meenaranu8899:25Tn2WBLSIzJaT9L@cluster0.w3yw8.mongodb.net/WorkouCollections?retryWrites=true&w=majority&appName=Cluster0';

// Database connection
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Import Routes
const userRoutes = require('./routes/users');
const workoutRoutes = require('./routes/workouts');
const sessionRoutes = require('./routes/sessions');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/sessions', sessionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
