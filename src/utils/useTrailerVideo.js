import { useDispatch } from "react-redux";
import { options } from "./constant";
import { useEffect } from "react";
import { setBackgroundTrailer } from "./moviesSlices";

const useTrailerVideo = (video_id) =>{
    const dispatch = useDispatch();
    const getTrailerData = async (video_id) => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+video_id+'/videos?language=en-US', options)
        const movies = await data.json();

        const filterData = movies?.results?.filter((video)=>video.type === "Trailer");
        const trailer = filterData?filterData[0]:movies[0];
        dispatch(setBackgroundTrailer(trailer));
    }

    useEffect(()=>{
        getTrailerData(video_id);
    },[])    
}
export default useTrailerVideo;
