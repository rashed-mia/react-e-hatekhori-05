import { useState, useEffect } from "react";
import Header from "./Header";
import MovieFilters from "./MovieFilters";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
export default function MovieWatch() {
  const [movies, setMovies] = useState(() => {
    const storeMovies = JSON.parse(localStorage.getItem('storeData'));
    return storeMovies || [];
  });

  useEffect(() => {
    localStorage.setItem('storeData', JSON.stringify(movies));
  }, [movies]);
  const [filter, setFilter] = useState("all");

  const addMovie = ({ title, ott }) => {
    const newMovie = {
      id: crypto.randomUUID(),
      title,
      ott,
      rating: null,
      watched: false,
    };

    setMovies([...movies, newMovie]);
  };

  const rateMovie = (id, rating) => {
    setMovies(
      movies.map((movie) => (movie.id === id ? { ...movie, rating } : movie))
    );
  };

  const toggleWatched = (id) => {
    setMovies(
      movies.map(
        (movie) =>
          movie.id === id ? { ...movie, watched: !movie.watched } : movie // corrected
      )
    );
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filterMovies = movies.filter((movie) => {
    if (filter === "watched") return movie.watched;
    if (filter === "unWatched") return !movie.watched;
    return true; // corrected
  });
  
  return (
    <div className="flex flex-col md:w-1/2 mx-auto m-3 items-center justify-center p-6 bg-slate-900 text-white rounded-lg shadow-lg">
      <Header />
      <MovieForm addMovie={addMovie} />
      <MovieFilters setFilter={setFilter} />
      <MovieList
        movies={filterMovies}
        rateMovie={rateMovie}
        toggleWatched={toggleWatched} // corrected
        deleteMovie={deleteMovie}
      />
    </div>
  );
}
