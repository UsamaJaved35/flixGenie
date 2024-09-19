import React, { useRef, useState } from 'react'
import client from '../../utils/gptClient'
import { useDispatch, useSelector } from 'react-redux'
import { addGptRecommendations, addTmdbRecommendedMovies } from '../../utils/gptSlice'
import { TMDB_API_OPTIONS } from '../../utils/constants'
import Loader from '../widgets/Loader'

const GptSearchBar = () => {
    const [searchClicked , setSearchClicked] = useState(false)
    const searchText = useRef()
    const dispatch = useDispatch()
    const recommendations = useSelector(store => store.gpt.gptRecommendations)
    const movies = useSelector(store => store.gpt.tmdbRecommendedMovies)
    const fetchMovieFromTMDb= async (movie)=>{
      const movieData = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', TMDB_API_OPTIONS)
      const movieDataJson = await movieData.json()
      return movieDataJson.results;
    }

   const fetchGptRecommendations= async (gptQuery)=>{
        const gptResults =  await client.chat.completions.create({
            messages: [
                {
                role: "user",
                content: gptQuery,
                },
            ],
            model: "llama3-8b-8192",
            });
        const recommendations = gptResults.choices?.[0]?.message?.content?.split(",")
        dispatch(addGptRecommendations(recommendations))
        if(recommendations){
          const promiseArray = recommendations.map(movie => fetchMovieFromTMDb(movie))
          const tmdbMovies = await Promise.all(promiseArray)
          dispatch(addTmdbRecommendedMovies(tmdbMovies))
        }
    }

   const handleSearchClick =()=>{
    setSearchClicked(true)
    const gptQuery = "You are a movie recommendation system. Based on this query: '"+searchText.current.value+"', return **only** a comma-separated list of 5 movie names. No additional text or explanations, just the movie names in this exact format: 'Don,Lagaan,Koi Mil Gaya,Dhadkan,Paa'."
    fetchGptRecommendations(gptQuery)
   }


  return (
    <>
    <div className='pt-[10%] mt-8 md:mt-0 flex justify-center'>
        {/* <RedToast message={"No Recommendations Found"}/> */}
        <form className='w-[95%] md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()} >
            <input type='text' className='p-4 m-4 col-span-9' placeholder='What would you like to watch?'/>
            <button ref={searchText} className='bg-red-700 text-white m-4 py-2 px-2 md:px-4 rounded-lg col-span-3' onClick={handleSearchClick}>Search</button>
        </form>
    </div>
    {
     movies.length === 0 && recommendations.length === 0 && searchClicked &&
        <Loader/>
    }
    </>
  )
}

export default GptSearchBar
