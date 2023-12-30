import React from 'react'
import useTrailerVideo from '../utils/useTrailerVideo'
import { useSelector } from 'react-redux';

const VideoBackground = ({video_id}) => {
    useTrailerVideo(video_id);
    const trailerVideo = useSelector((store)=>store.movies.backgroundTrailer);
    return (
        <div className="w-full">
          <iframe
            className="w-full aspect-video"
            src={
              "https://www.youtube.com/embed/" +
              trailerVideo?.key +
              "?&autoplay=1&mute=1&controls=0&rel=0&loop=1"
            }
            // allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
          ></iframe>
        </div>
      );
}

export default VideoBackground