function Hero({ movie }) {
  if (!movie) return null;
  return (
    <div className="hero" style={{ backgroundImage: `url(${import.meta.env.VITE_TMDB_IMAGE_URL}${movie.backdrop_path})` }}>
      <div className="hero-content">
        <h1>{movie.title}</h1>
        <p>{movie.overview || movie.description}</p>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
}

export default Hero;