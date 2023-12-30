import { useDispatch } from "react-redux";
import { options } from "./constant";
import { setNowPlayingMovies } from "./moviesSlices";
import { useEffect } from "react";

const useNowPlayingVideos = () => {
    const dispatch = useDispatch();

    const getNowPlayingVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const movies = await data.json();
        dispatch(setNowPlayingMovies(movies.results));
    }

    useEffect(()=>{
        getNowPlayingVideo();
    },[])    
}
export default useNowPlayingVideos;
