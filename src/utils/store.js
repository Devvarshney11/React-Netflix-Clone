import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlices from "./moviesSlices";
import gptSlice from "./gptSlice";
const store = configureStore({
    reducer: {
        user:userSlice,
        movies:moviesSlices,
        gpt:gptSlice,
    }
})
export default store;