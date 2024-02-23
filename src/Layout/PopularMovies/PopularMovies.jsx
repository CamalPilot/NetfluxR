import React from 'react'
import MovieItem from '../../Components/MovieItem/MovieItem'
import './PopularMovies.scss'

const PopularMovies = ({movies, detailMovies, addWatchList, watchList}) => {
  return (
    <div className='popular container'>
        <h2 className='popular__title'>Popular Movies</h2>
        <div className='popular__movies'>
            {
                movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} detailMovies={detailMovies} addWatchList={addWatchList} watchList={watchList}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default PopularMovies