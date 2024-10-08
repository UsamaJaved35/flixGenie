import React from 'react'
import { useDispatch } from 'react-redux';
import { setPlayingMovieId, setShowMoviePlayer } from '../../utils/configSlice';
import { FaPlay } from 'react-icons/fa';
const VideoTitle = ({movieId,title,overview}) => {
  const dispatch = useDispatch()

  const handlePlayMovie = () => {
    dispatch(setShowMoviePlayer(true))
    dispatch(setPlayingMovieId(movieId))
  };
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-6xl font-bold text-white'>{title}</h1>
        <p className='hidden md:inline-block py-6 w-1/4 text-lg text-white' >{overview}</p>
        <div className='flex items-center'>
            <button className='text-black flex items-center bg-white text-lg p-2 px-4 md:p-2 md:px-10 rounded-lg hover:bg-opacity-80' onClick={handlePlayMovie}> 
              <FaPlay className='mr-2'/> Play
            </button>
            <button className='text-white hidden md:inline-block mx-2 bg-gray-500 text-lg p-4 px-10 rounded-lg hover:bg-opacity-60 md:p-2 md:px-10'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle