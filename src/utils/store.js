import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlices from "./moviesSlices";
const store = configureStore({
    reducer: {
        user:userSlice,
        movies:moviesSlices,
    }
})
export default store;