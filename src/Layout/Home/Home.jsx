import React from 'react'
import MovieItem from '../../Components/MovieItem/MovieItem'
import DetailMovie from '../../Pages/DetailMovie/DetailMovie'
import PopularMovies from '../PopularMovies/PopularMovies'
// import Main from '../Main/Main'
import SimpleSlider from '../Slider/Slider'
import './Home.scss'

const Home = ({ detailMovies, addWatchList}) => {
  return (
    <div className='home'>
        {/* <Main/> */}
        <SimpleSlider/>
        <PopularMovies  detailMovies = {detailMovies} addWatchList={addWatchList} />
    </div>
  )
}

export default Home