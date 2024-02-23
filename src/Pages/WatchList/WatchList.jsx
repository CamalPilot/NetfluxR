import React from 'react'
import MovieItem from '../../Components/MovieItem/MovieItem'
import './WatchList.scss'

const WatchList = ({watchList, addWatchList, detailMovies}) => {
  return (
    <div className='watchlist container'>
        <h2 className='watchlist__heading'>Your Watchlist</h2>
        <div className='watchlist__movies'>
            {watchList && watchList.map((movie) => (
                <MovieItem key={movie.id} movie={movie} detailMovies={detailMovies} addWatchList={addWatchList} watchList={watchList}/>
            ))}
        </div>
    </div>
  )
}

export default WatchList