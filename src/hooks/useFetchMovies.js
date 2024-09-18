import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import {
    addNowPlayingMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addPopularMovies,
} from "../utils/moviesSlice";

const useFetchMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.NowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.PopularMovies);
  const upcomingMovies = useSelector((store) => store.movies.UpcomingMovies);
  const topRatedMovies = useSelector((store) => store.movies.TopRatedMovies);

  const fetchMovies = useCallback (async (endpoint, actionCreator) => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`, TMDB_API_OPTIONS);
      const moviesJson = await data.json();
      dispatch(actionCreator(moviesJson.results));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  },[dispatch]
);

  useEffect(() => {
    if (!nowPlayingMovies) fetchMovies('now_playing', addNowPlayingMovies);
    if (!popularMovies) fetchMovies('popular', addPopularMovies);
    if (!upcomingMovies) fetchMovies('upcoming', addUpcomingMovies);
    if (!topRatedMovies) fetchMovies('top_rated', addTopRatedMovies);
  }, [fetchMovies, nowPlayingMovies, popularMovies, upcomingMovies, topRatedMovies]);
};

export default useFetchMovies;
