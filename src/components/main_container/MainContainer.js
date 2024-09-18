import React from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.NowPlayingMovies)
    if(!movies) return;
    const mainMovie = movies[0];
    const {id,title,overview} = mainMovie;
  return (
    <div className='mt-[20%] md:mt-0'>
        <VideoTitle movieId={id} title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer