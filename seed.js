const mongoose = require('mongoose');
const Movie = require('./models/Movie');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to Atlas for seeding');
  const movies = [
    {
      title: 'The Dark Knight',
      genre: 'Action',
      thumbnail: 'https://via.placeholder.com/200x300?text=Dark+Knight',
      videoUrl: '',
    },
    {
      title: 'Inception',
      genre: 'Sci-Fi',
      thumbnail: 'https://via.placeholder.com/200x300?text=Inception',
      videoUrl: '',
    },
    {
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      thumbnail: 'https://via.placeholder.com/200x300?text=Shawshank',
      videoUrl: '',
    },
    {
      title: 'Pulp Fiction',
      genre: 'Crime',
      thumbnail: 'https://via.placeholder.com/200x300?text=Pulp+Fiction',
      videoUrl: '',
    },
  ];
  await Movie.deleteMany({}); // Clear existing movies
  await Movie.insertMany(movies);
  console.log('Movies seeded');
  mongoose.connection.close();
}).catch(err => console.error(err));