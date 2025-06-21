const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  poster_path: { type: String },
  backdrop_path: { type: String },
  release_date: { type: String },
});

module.exports = mongoose.model('Movie', movieSchema);