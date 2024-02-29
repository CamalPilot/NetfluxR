import React from 'react'
import { useSelector } from 'react-redux'
import MovieItem from '../../Components/MovieItem/MovieItem'
import './AllMovies.scss'

const AllMovies = ({detailMovies, addWatchList}) => {
  const {allMovies} = useSelector(state=> state.movies)
  return (
    <div className='movies container'>
      <h2>All Movies</h2>
      <div className="movies__item">
        {
          allMovies.map(movie =>(
            
            <MovieItem key={movie.id} movie={movie} detailMovies={detailMovies} addWatchList={addWatchList}/>

          ))
        }
      </div>
    </div>
  )
}

export default AllMovies