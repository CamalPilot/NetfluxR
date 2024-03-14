import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from '../../Components/MovieItem/MovieItem'
import { setWatchCount, setWatchList } from '../../Redux/movieSlice'
import './ComingSoon.scss'

const ComingSoon = ({detailMovies, addWatchList}) => {
    const {upComing} = useSelector(state => state.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        const storedWatchList = JSON.parse(localStorage.getItem('watchlist')) || [];
        dispatch(setWatchList(storedWatchList));
        dispatch(setWatchCount(storedWatchList.length))
    }, [dispatch])
  return (
    <div className='upcoming container'>
        <h2 className='upcoming__title'>Coming Soon</h2>
        <div className="upcoming__movies">
            {
                upComing.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} detailMovies={detailMovies} addWatchList={addWatchList}/>
                ))
            }
        </div>
    </div>
  )
}

export default ComingSoon