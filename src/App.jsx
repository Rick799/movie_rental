import { CartProvider } from "./components/CartContext";
import MovieRental from "./components/MovieRental";

function App() {
  return (
    <div>
      <CartProvider>
        <MovieRental />
      </CartProvider>
    </div>
  );
}

export default App;
