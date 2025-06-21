const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Movie = require('./models/Movie');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Movie.deleteMany({});
  await Movie.insertMany([
    {
      title: 'Sample Movie',
      description: 'A sample movie description',
      poster_path: '/sample.jpg',
      backdrop_path: '/sample-bg.jpg',
      release_date: '2023-01-01',
    },
  ]);
  console.log('Movies seeded in netflix database');
  mongoose.connection.close();
});