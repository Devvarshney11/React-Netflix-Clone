import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        backgroundTrailer: null,
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setBackgroundTrailer : (state, action) => {
            state.backgroundTrailer = action.payload;
        },
    },
});

export const {setBackgroundTrailer, setNowPlayingMovies} = movieSlice.actions;  
export default movieSlice.reducer;