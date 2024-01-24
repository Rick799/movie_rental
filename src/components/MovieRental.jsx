import MovieList from "./MovieList";
import { movieData } from "./MovieData";
import Navbar from "./Navbar";

function MovieRental() {
  return (
    <div>
      <Navbar />
      <MovieList movies={movieData} />
    </div>
  );
}

export default MovieRental;
