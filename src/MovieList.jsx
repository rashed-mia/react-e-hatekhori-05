import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
export default function MovieList({
  movies,
  rateMovie,
  toggleWatched,
  deleteMovie,
}) {
  //console.log(movies);
  return (
    <div className="w-full mt-4">
      {movies.length === 0 ? (
        <p className="text-center text-gray-400">
          No movie found. please add movie
        </p>
      ) : (
        <ul className="w-full space-y-3">
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              rateMovie={rateMovie}
              toggleWatched={toggleWatched}
              deleteMovie={deleteMovie}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      ott: PropTypes.string.isRequired,
      watched: PropTypes.bool.isRequired,
      rating: PropTypes.number,
    })
  ).isRequired,
  rateMovie: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};
