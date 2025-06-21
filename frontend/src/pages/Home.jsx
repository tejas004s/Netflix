import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/movies`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">
      <Hero movie={movies[0]} />
      <MovieRow title="Trending Now" movies={movies} />
    </div>
  );
}

export default Home;