/* eslint react/prop-types: 0 */

import { useState } from "react";
import { FaBell, FaShoppingCart, FaUser, FaVideo } from "react-icons/fa";
import { useCart } from "./CartContext";
import CartModal from "./CartModal";

const Navbar = () => {
  const { cart } = useCart();
  const [cartModal, setCartModal] = useState(false);

  const openCartModal = () => {
    setCartModal(true);
  };

  const closeCartModal = () => {
    setCartModal(false);
    console.log("close modal clicked");
  };

  return (
    <nav className="flex justify-between items-center bg-slate-900 px-12 py-3 text-white">
      <div className="flex items-center ">
        <FaVideo className="text-yellow-400 text-3xl mt-1 mr-2" />
        <h1 className="text-2xl font-bold ">CineFlix</h1>
      </div>
      <div className="w-28 flex justify-between cursor-pointer ">
        <FaBell />
        <FaShoppingCart className="hover:scale-125" onClick={openCartModal} />
        {cart.length > 0 && (
          <span className="bg-yellow-400 text-black absolute top-1 right-20 font-bold rounded-full h-5 w-5 text-sm flex items-center justify-center">
            {cart.length}
          </span>
        )}
        {cartModal && <CartModal closeCartModal={closeCartModal} />}
        <FaUser />
      </div>
    </nav>
  );
};

export default Navbar;
