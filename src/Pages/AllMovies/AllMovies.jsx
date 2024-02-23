import React from 'react'
import MovieItem from '../../Components/MovieItem/MovieItem'
import './AllMovies.scss'

const AllMovies = ({allMovies, detailMovies, addWatchList,search, watchList}) => {
  return (
    <div className='movies container'>
      <h2>All Movies</h2>
      <div className="movies__item">
        {
          allMovies.map(movie =>(
            
            <MovieItem key={movie.id} movie={movie} detailMovies={detailMovies} addWatchList={addWatchList} watchList={watchList}/>

          ))
        }
      </div>
    </div>
  )
}

export default AllMovies