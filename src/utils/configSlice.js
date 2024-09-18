import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState:{
        showMoviePlayer: false,
        playingMovieId:null
    },
    reducers:{
        setShowMoviePlayer:(state,action) => {
            state.showMoviePlayer = action.payload
        },
        setPlayingMovieId: (state,action)=>{
            state.playingMovieId = action.payload
        }
    },
});

export const {setShowMoviePlayer,setPlayingMovieId} = configSlice.actions;

export default configSlice.reducer;