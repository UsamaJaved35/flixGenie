import React from 'react'
import {useSelector } from 'react-redux'
import useMovieTrailor from '../../hooks/useMovieTrailor'

const VideoBackground = ({movieId}) => {
  const trailor = useSelector(store => store.movies?.TrailorVideo)
  useMovieTrailor(movieId)
  if(!trailor) return
  return (
    <div className='w-screen'>
      <iframe
      className='w-screen aspect-video'
        src ={"https://www.youtube.com/embed/"+ trailor.key +"?si=BpOOM-ZxLdpUP3WI&autoplay=1&mute=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  )
}

export default VideoBackground;