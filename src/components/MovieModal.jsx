/* eslint react/prop-types: 0 */

import { FaShoppingCart, FaStar } from "react-icons/fa";
import { VscCircleFilled } from "react-icons/vsc";

const MovieModal = ({ movie, closeModal, handleAddToCart }) => {
  return (
    <>
      <div className="backdrop-filter backdrop-blur-sm fixed top-20 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center">
        <div className="p-6 fixed w-7/12 h-3/6 bg-slate-900 overflow-hidden">
          <span
            className="absolute top-2 right-4 text-white cursor-pointer"
            onClick={closeModal}
          >
            X
          </span>
          <div className="flex font-extralight text-gray-300 ">
            <div className="h-80 lg:h-96 w-full">
              <img className="h-full w-full" src={movie.poster} alt="Poster" />
              <div className="">
                <button
                  className="w-full mt-3 px-2 py-1 rounded-sm bg-yellow-300 text-black flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <FaShoppingCart />
                  <h2 className="ml-2 font-semibold text-xs xl:text-base">
                    Add To Cart
                  </h2>
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5">
              <div className="">
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  {movie.name}
                </h2>
                <div className="flex space-x-1 sm:space-x-3 md:space-x-5 mb-3">
                  <p>{movie.year}</p>
                  <VscCircleFilled className="text-xs mt-2" />
                  <p>{movie.runtime} minutes</p>
                </div>
                <div className="flex space-x-1 sm:space-x-3 md:space-x-5">
                  <p>{movie.genre}</p>
                  <VscCircleFilled className="text-xs mt-2" />
                  <div className="flex items-center">
                    <FaStar className="text-sm" />
                    <p className="ml-2">{movie.rating}</p>
                  </div>
                  <VscCircleFilled className="text-xs mt-2" />
                  <p className="font-semibold">${movie.price}</p>
                </div>
              </div>
              <div className="border my-4"></div>
              <p className="text-xs sm:text-base">{movie.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieModal;
