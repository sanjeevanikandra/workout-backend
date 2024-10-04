const express = require('express');
const Session = require('../models/Session');
const router = express.Router();

// Create a session (token storage)
router.post('/', async (req, res) => {
  const { user_id, token } = req.body;
  try {
    const session = new Session({ user_id, token });
    await session.save();
    res.status(201).json({ message: 'Session created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
