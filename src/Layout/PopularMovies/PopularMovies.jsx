import React from 'react'
import { useSelector } from 'react-redux'
import MovieItem from '../../Components/MovieItem/MovieItem'
import './PopularMovies.scss'

const PopularMovies = ({ detailMovies, addWatchList}) => {
  const {movies} = useSelector(state=> state.movies)
  return (
    <div className='popular container'>
        <h2 className='popular__title'>Popular Movies</h2>
        <div className='popular__movies'>
            {
                movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} detailMovies={detailMovies} addWatchList={addWatchList}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default PopularMovies