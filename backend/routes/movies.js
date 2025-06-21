const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await response.json();
    res.json(data.results);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;