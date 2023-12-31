import { useDispatch } from "react-redux";
import { options } from "./constant";
import { setNowPlayingMovies,setPopularMovies,setTopRatedMovies,setUpcomingMovies } from "./moviesSlices";
import { useEffect } from "react";


const useNowPlayingVideos = () => {
  const dispatch = useDispatch();
  const movieList = ["now_playing", "popular", "top_rated", "upcoming"];
  const DispatchAction = (movie, data) => {
    switch (movie) {
      case "now_playing":
        dispatch(setNowPlayingMovies(data));
        break;
      case "popular":
        dispatch(setPopularMovies(data));
        break;
      case "top_rated":
        dispatch(setTopRatedMovies(data));
        break;
      case "upcoming":
        dispatch(setUpcomingMovies(data));
        break;
      default:
        break;
    }
  };
  const getNowPlayingVideo = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie + "?language=en-US&page=1",
      options
    );
    const movies = await data.json();
    DispatchAction(movie, movies.results);
  };

  useEffect(() => {
    movieList.map((movie) => getNowPlayingVideo(movie));
  }, []);
};
export default useNowPlayingVideos;
