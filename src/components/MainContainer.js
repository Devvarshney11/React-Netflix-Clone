import React from "react";
import VideoTittle from "./VideoTittle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const movies = useSelector((store)=>store.movies?.now_playing)
  if(!movies) return;
  const singleMovie = movies[0]
  const {original_title,overview,id} = singleMovie;
  return (
    <div>
      <VideoTittle title = {original_title} overview = {overview}/>
      <VideoBackground video_id = {id}/>
    </div>
  );
};

export default MainContainer;
