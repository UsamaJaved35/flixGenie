import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowMoviePlayer } from '../utils/configSlice';
import { TMDB_MOVIE_API } from '../utils/constants';


const MoviePlayer = () => {
    const dispatch = useDispatch()
    const id = useSelector(store=>store.config.playingMovieId)
    const movieUrl = TMDB_MOVIE_API + id;
    const handleClose = () => {
        dispatch(setShowMoviePlayer(false)); // Dispatch action to hide movie player
    };

  return (
    <>
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black">
        {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white text-6xl z-50"
      >
        &times;
      </button>
      <iframe className='w-full h-full'
        src={movieUrl}
        width="100%" height="100%" frameBorder="0" allowFullScreen>
      </iframe>
    </div>
    </>
  );
};

export default MoviePlayer;
