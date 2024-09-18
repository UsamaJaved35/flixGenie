import React from 'react'
import {IMG_CDN_URL} from '../../utils/constants'
import { useDispatch } from 'react-redux';
import { setShowMoviePlayer,setPlayingMovieId } from '../../utils/configSlice';

const MovieCard = ({movieId,posterPath,title}) => {
  const dispatch = useDispatch()

  const handlePlayMovie = () => {
    dispatch(setShowMoviePlayer(true))
    dispatch(setPlayingMovieId(movieId))
  };
  if(!posterPath) return;
  return (
    <div className="w-36 md:w-48 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
      onClick={handlePlayMovie}  >
        <img className='pr-6 hover:opacity-80'
        alt={title}
        src = {IMG_CDN_URL+ posterPath}
        />
    </div>
  )
}

export default MovieCard;