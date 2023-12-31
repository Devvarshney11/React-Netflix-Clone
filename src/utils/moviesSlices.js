import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        backgroundTrailer: null,
        popular:null,
        top_rated:null,
        upcoming:null,
        now_playing: null,
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.now_playing = action.payload;
        },
        setBackgroundTrailer : (state, action) => {
            state.backgroundTrailer = action.payload;
        },
        setPopularMovies: (state, action) => {
            state.popular = action.payload;
        }, 
        setTopRatedMovies: (state, action) => {
            state.top_rated = action.payload;
        },
        setUpcomingMovies: (state, action) => {
            state.upcoming = action.payload;
        },
    },
});

export  const { setNowPlayingMovies, setBackgroundTrailer, setPopularMovies, setTopRatedMovies, setUpcomingMovies } = movieSlice.actions;  
export default movieSlice.reducer;