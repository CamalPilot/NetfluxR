import React from 'react'
import MovieItem from '../../Components/MovieItem/MovieItem'
import './Topraiting.scss'

const Topraiting = ({raitingMovies, detailMovies, addWatchList, watchList}) => {
    if (!Array.isArray(raitingMovies)) {
        return null;
      }
  return (
    <div className='rating container'>
        <h2>Top Rating Movies</h2>
        <div className='rating__movies'>
            {
                raitingMovies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} detailMovies = {detailMovies} addWatchList={addWatchList} watchList={watchList}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default Topraiting