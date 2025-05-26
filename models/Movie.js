const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  thumbnail: String,
  videoUrl: String, // Placeholder for video or trailer
});
module.exports = mongoose.model('Movie', movieSchema);