import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
         <div className="fixed -z-20">
            <img className='h-screen object-cover' src= {BG_URL} alt="logo"/>
        </div>
        <div className='pt-[30%] md:pt-0'>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </div>
    </div>
  )
}

export default GptSearchPage