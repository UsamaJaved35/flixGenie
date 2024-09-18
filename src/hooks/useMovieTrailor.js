import { useDispatch, useSelector } from "react-redux"
import { addTrailorVideo } from "../utils/moviesSlice"
import { useCallback, useEffect } from "react"
import { TMDB_API_OPTIONS } from "../utils/constants"

const useMovieTrailor = (movieId) =>{
    const dispatch = useDispatch()
    const storedTrailer = useSelector(store => store.movies?.TrailorVideo);
    const getMovieTrailor = useCallback(async ()=>{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_API_OPTIONS)
      const JsonData = await data.json()
      const results = JsonData?.results
      if(!results) return;
      console.log(results);
      const trailors = results.filter(trailor => trailor.type === "Trailer")
      const trailor = trailors.length ? trailors[0] : results[0]
      dispatch(addTrailorVideo(trailor))
    },[dispatch, movieId]
  )
  
    useEffect(() => {
       !storedTrailer && getMovieTrailor();
    }, [getMovieTrailor,storedTrailer])
}

export default useMovieTrailor;