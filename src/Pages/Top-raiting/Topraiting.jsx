import React from 'react'
import { useSelector } from 'react-redux'
import MovieItem from '../../Components/MovieItem/MovieItem'
import './Topraiting.scss'

const Topraiting = ({detailMovies, addWatchList}) => {
    const {raitingMovies} = useSelector(state => state.movies)
    if (!Array.isArray(raitingMovies)) {
        return null;
      }
  return (
    <div className='rating container'>
        <h2>Top Rating Movies</h2>
        <div className='rating__movies'>
            {
                raitingMovies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} detailMovies = {detailMovies} addWatchList={addWatchList}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default Topraiting