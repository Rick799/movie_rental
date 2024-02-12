/* eslint react/prop-types: 0 */

import { useContext } from "react";
import { CartContext } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";

const CartModal = ({ closeCartModal }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalItems = () => {
    return cart.length;
  };

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className=" fixed top-14 right-20 bg-slate-800 text-gray-300 w-72 rounded-lg overflow-y-auto">
      <div className="p-5">
        {cart.length > 0 ? (
          <div>
            <ul className="mb-4 border-b-2">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <div className="flex">
                    <img
                      src={item.poster}
                      alt="movie poster"
                      className="h-12 w-10 mr-2"
                    />
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="font-extralight">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="hover:text-red-600"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col items-center">
                <p>Number of Movies</p>
                <p className="font-semibold">{totalItems()}</p>
              </div>
              <div className="flex flex-col items-center">
                <p>Total Cost</p>
                <p className="font-semibold">${totalPrice()}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between mt-4">
              <button className="px-4 py-2 bg-yellow-400 text-black  rounded flex items-center justify-center  mb-4">
                <FaShoppingCart className="mr-2" />
                Checkout
              </button>
              <button
                onClick={closeCartModal}
                className="border text-white px-4 py-2 rounded"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-2">Cart is empty.</p>
            <button
              onClick={closeCartModal}
              className="border text-white px-4 py-1 rounded"
            >
              Add Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
