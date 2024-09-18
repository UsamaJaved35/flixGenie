import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        TopRatedMovies: null,
        UpcomingMovies: null,
        PopularMovies: null,
        TrailorVideo:null
    },
    reducers:{
        addNowPlayingMovies: (state ,action) => { 
            state.NowPlayingMovies = action.payload
        },
        addTopRatedMovies: (state ,action) => { 
            state.TopRatedMovies = action.payload
        },
        addUpcomingMovies: (state ,action) => { 
            state.UpcomingMovies = action.payload
        },
        addPopularMovies: (state ,action) => { 
            state.PopularMovies = action.payload
        },
        addTrailorVideo: (state,action) => {
            state.TrailorVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies,addPopularMovies,addUpcomingMovies,addTopRatedMovies, addTrailorVideo} = moviesSlice.actions
export default moviesSlice.reducer