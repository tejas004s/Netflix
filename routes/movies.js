const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().limit(20);
    res.json({ movies });
  } catch (err) {
    console.error('Movies error:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;