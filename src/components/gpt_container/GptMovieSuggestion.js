import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from '../secondar_container/MoviesList'
import { FaRobot } from "react-icons/fa";

const GptMovieSuggestion = () => {
    const {gptRecommendations,tmdbRecommendedMovies} = useSelector(store=>store.gpt)
    if (gptRecommendations.length === 0  || tmdbRecommendedMovies.length === 0) return;
  return (
    <div className='bg-black bg-opacity-70 p-4 mt-4'>
        <div className='text-white text-center py-4 px-4 font-bold text-xl'>
            <FaRobot className="inline-block text-xl mr-2" />
            Suggestion Based on Your Search
        </div>
        {
            gptRecommendations.map((movie,index) =><MoviesList title={movie} movies={tmdbRecommendedMovies[index]} />        )
        }
    </div>
  )
}
export default GptMovieSuggestion