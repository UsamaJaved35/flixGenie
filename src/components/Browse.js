import { useSelector } from "react-redux";
import useFetchMovies from "../hooks/useFetchMovies";
import Header from "./Header";
import MainContainer from "./main_container/MainContainer";
import SecondaryContainer from "./secondar_container/SecondaryContainer";
import MoviePlayer from './MoviePlayer'
import GptSearchPage from "./gpt_container/GptSearchPage";
const Browse=()=>{
    const showGptSearchPage = useSelector(store=>store.gpt.showGptSearchView)
    const showMoviePlayer = useSelector(store=>store.config.showMoviePlayer)
    useFetchMovies(); 
    return(
        <>
        <Header/>
        <div className="flex-grow">
        { !showMoviePlayer &&
            (showGptSearchPage ?
            <GptSearchPage/> :
             <> 
             <MainContainer/>
            <SecondaryContainer/>
            </>
            )
        }
        {
            showMoviePlayer && <MoviePlayer/>
        }
        </div>
        </>
    );
}
export default Browse;

//MainContainer
//  - VideoBackground
//  - VideoTitle
//SecondaryContainer
// - List of movies