import propTypes from "prop-types";
import { useState } from "react";

export default function MovieForm({ addMovie }) {
  const [movieData, setMovieData] = useState({
    title: "",
    ott: "",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setMovieData({
      ...movieData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movieData.title.trim() || !movieData.ott.trim()) return;
    addMovie(movieData);
    setMovieData({ ...movieData, title: "", ott: "" });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto flex flex-col md:flex-row gap-2 mb-8"
    >
      <input
        type="text"
        name="title"
        value={movieData.title}
        onChange={handleChange}
        placeholder="searching movie..."
        className="flex-1 p-2 border border-gray-700 bg-gray-800 rounded text-white"
      />

      <select
        name="ott"
        value={movieData.ott}
        onChange={handleChange}
        className="border border-gray-300 rounded-md"
      >
        <option value="">Select an OTT</option>
        <option value="Amazon prime">Amazon prime</option>
        <option value="Desny +">Desny +</option>
        <option value="Netflix">Netflix</option>
        <option value="Apple TV">Apple TV</option>
        <option value="Hulu">Hulu</option>
        <option value="Hoster">Hoster</option>
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        Add
      </button>
    </form>
  );
}

MovieForm.propTypes = {
  addMovie: propTypes.func.isRequired,
};
