import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingVideos from "../utils/useNowPlayingVideos";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Body = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingVideos();
  return (
    <div>
    <Header />
    {showGptSearch ? (
      <GptSearch />
    ) : (
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    )}
  </div>
  );
};

export default Body;
