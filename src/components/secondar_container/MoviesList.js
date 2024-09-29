import React, { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const MoviesList = ({title,movies}) => {
  const scrollContainerRef = useRef(null);
  const [showArrows, setShowArrows] = useState({ left: false, right: false });

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      // Check if there is overflow
      setShowArrows({
        left: container.scrollLeft > 0,
        right: container.scrollWidth > container.scrollLeft + container.clientWidth,
      });
    }
  }, [movies]); // Re-check when movies change

  const handleScrollUpdate = () => {
    const container = scrollContainerRef.current;

    if (container) {
      setShowArrows({
        left: container.scrollLeft > 0,
        right: container.scrollWidth > container.scrollLeft + container.clientWidth,
      });
    }
  };
  return (
    <div className='px-6 py-6'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
      <div className="relative">
        {/* Left Arrow */}
        {showArrows.left && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-4 rounded-full z-10"
            onClick={() => handleScroll('left')}
          >
            <FaChevronLeft className="w-10 h-10 md:w-15 md:h-15" />
          </button>
        )}

        {/* Right Arrow */}
        {showArrows.right && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-4 rounded-full z-10"
            onClick={() => handleScroll('right')}
          >
            <FaChevronRight className="w-10 h-10 md:w-15 md:h-15" />
          </button>
        )}
        <div className='flex overflow-x-scroll scrollbar-hide' ref={scrollContainerRef} onScroll={handleScrollUpdate} >
          <div className='flex'>
              {movies.map(movie => <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} title={movie.title} /> )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesList