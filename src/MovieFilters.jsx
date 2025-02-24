import propTypes from "prop-types"
//import {useState} from "react"
export default function MovieFilters({setFilter}) {
   
  return (
    <div className=" flex flex-col sm:flex-row justify-center gap-3 my-4 rounded-2xl">
      <button 
      onClick={() =>setFilter("all")}
      className="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded">
        All
      </button>
      <button
      onClick={() => setFilter("watched")} 
      className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded">
        Watched
      </button>
      <button
      onClick={() => setFilter("unWatched")}
       className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
        Unwatched
      </button>
    </div>
  );
}

MovieFilters.propTypes = {
  setFilter: propTypes.func.isRequired,
 
}