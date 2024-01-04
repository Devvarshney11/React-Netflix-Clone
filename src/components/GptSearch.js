import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { LOGIN_BG_CDN } from "../utils/constant";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="w-full object-cover"
          src={LOGIN_BG_CDN}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
