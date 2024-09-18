import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGptSearchView: false,
        gptRecommendations:[],
        tmdbRecommendedMovies:[]
    },
    reducers:{
        toggleGptSearchView: (state,action) =>{
            state.showGptSearchView = !state.showGptSearchView;
        },
        addGptRecommendations: (state,action) =>{
            state.gptRecommendations = action.payload
        },
        addTmdbRecommendedMovies: (state,action) =>{
            state.tmdbRecommendedMovies = action.payload
        }
    }
});

export const {toggleGptSearchView,addGptRecommendations,addTmdbRecommendedMovies} = gptSlice.actions;
export default gptSlice.reducer;