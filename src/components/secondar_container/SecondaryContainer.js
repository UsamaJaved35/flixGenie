import React from 'react'
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList'
const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.NowPlayingMovies);
  const topRatedMovies = useSelector((store) => store.movies.TopRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.UpcomingMovies);
  const popularMovies = useSelector((store) => store.movies.PopularMovies);
  return (
    <div className="bg-black">
      <div className=" md:-mt-52 pl-2 md:pl-12 relative z-20">
      {topRatedMovies && (
          <MoviesList title={"Top Rated"} movies={topRatedMovies} />
        )}
        {popularMovies && (
          <MoviesList title={"Popular"} movies={popularMovies} />
        )}
        {nowPlayingMovies && (
          <MoviesList title={"Now Playing"} movies={nowPlayingMovies} />
        )}
        {upcomingMovies && (
          <MoviesList title={"Upcoming"} movies={upcomingMovies} />
        )}
      </div>
    </div>
  )
}

export default SecondaryContainer;