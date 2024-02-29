import React from 'react'
import { useSelector } from 'react-redux'
import MovieItem from '../../Components/MovieItem/MovieItem'
import './WatchList.scss'

const WatchList = ({addWatchList, detailMovies}) => {
  const {watchList} = useSelector(state => state.movies)
  return (
    <div className='watchlist container'>
        <h2 className='watchlist__heading'>Your Watchlist</h2>
        <div className='watchlist__movies'>
            {watchList && watchList.map((movie) => (
                <MovieItem key={movie.id} movie={movie} detailMovies={detailMovies} addWatchList={addWatchList}/>
            ))}
        </div>
    </div>
  )
}

export default WatchList