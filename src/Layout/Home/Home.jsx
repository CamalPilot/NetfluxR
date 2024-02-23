import React from 'react'
import MovieItem from '../../Components/MovieItem/MovieItem'
import DetailMovie from '../../Pages/DetailMovie/DetailMovie'
import PopularMovies from '../PopularMovies/PopularMovies'
// import Main from '../Main/Main'
import SimpleSlider from '../Slider/Slider'
import './Home.scss'

const Home = ({movies, detailMovies, addWatchList, watchList}) => {
  return (
    <div className='home'>
        {/* <Main/> */}
        <SimpleSlider movies={movies}/>
        <PopularMovies movies = {movies} detailMovies = {detailMovies} addWatchList={addWatchList} watchList={watchList} />
    </div>
  )
}

export default Home