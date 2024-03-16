import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from '../../Components/MovieItem/MovieItem'
import { setRating, setWatchCount, setWatchList } from '../../Redux/movieSlice'
import './WatchList.scss'

const WatchList = ({addWatchList, detailMovies}) => {
  const {watchList} = useSelector(state => state.movies)
  // const {rating} = useSelector(state => state.movies)
  const dispatch = useDispatch()
  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    dispatch(setWatchList(storedWatchList));
    dispatch(setWatchCount(storedWatchList.length));
  }, [dispatch]);
  return (
    <div className='watchlist container'>
        <h2 className='watchlist__heading'>Your Watchlist</h2>
        {
          watchList.length > 0 ? 
          <div className='watchlist__movies'>
            {watchList && watchList.map((movie) => (
              
                <MovieItem key={movie.id} movie={movie} rating={movie.rating} detailMovies={detailMovies} addWatchList={addWatchList} watchList={watchList}/> 
            ))}
        </div>
        : 
        <div>
          <h2 style={{color: "red", marginTop: "4rem"}}>No Movie Added</h2>
        </div>
        }
    </div>
  )
}

export default WatchList