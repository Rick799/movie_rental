/* eslint react/prop-types: 0 */

import { FaShoppingCart, FaStar } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";
import MovieModal from "./MovieModal";
import { useCart } from "./CartContext";
import { useState } from "react";

const MovieList = ({ movies }) => {
  const { addToCart } = useCart();
  const [movieModal, setMovieModal] = useState(null);

  const handleAddToCart = (movie) => {
    addToCart(movie);
  };

  const openModal = (movie) => {
    setMovieModal(movie);
  };

  const closeModal = () => {
    setMovieModal(false);
  };

  return (
    <div className="bg-black grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 ">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="flex flex-col border border-gray-600 rounded-lg bg-slate-900 cursor-pointer hover:border-slate-300"
        >
          <img className="w-full h-80" src={movie.poster} alt={movie.name} />
          <div className="p-2 text-gray-400">
            <h3 className="font-bold text-white mb-1">{movie.name}</h3>
            <div className="flex justify-between items-center font-extralight mb-3">
              <p>{movie.genre}</p>
              <VscCircleFilled className="text-xs" />
              <div className="flex items-center">
                <FaStar className="text-xs mr-1" />
                <p>{movie.rating}</p>
              </div>
              <VscCircleFilled className="text-xs" />
              <p>${movie.price}</p>
            </div>
            <div className="flex  text-sm">
              <div className="flex-grow">
                <button
                  className="bg-yellow-400 text-black w-full px-3 py-1 rounded flex items-center justify-center"
                  onClick={() => handleAddToCart(movie)}
                >
                  <FaShoppingCart />
                  <h2 className="ml-1 font-semibold">Add</h2>
                </button>
              </div>
              <div className="flex-grow ml-4">
                <button
                  onClick={() => openModal(movie)}
                  className="border w-full px-3 py-1 rounded"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {movieModal && (
        <MovieModal
          movie={movieModal}
          closeModal={closeModal}
          handleAddToCart={() => handleAddToCart(movieModal)}
        />
      )}
    </div>
  );
};

export default MovieList;
