import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.now_playing && (
      <div className="bg-black">
        <div className="md:-mt-40 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.now_playing} />
          <MovieList title={"Top Rated"} movies={movies.top_rated} />
          <MovieList title={"Popular"} movies={movies.popular} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcoming} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
