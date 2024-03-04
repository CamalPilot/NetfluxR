import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from '../../Components/MovieItem/MovieItem'
import { setWatchCount, setWatchList } from '../../Redux/movieSlice'
import './PopularMovies.scss'

const PopularMovies = ({ detailMovies, addWatchList}) => {
  const {movies} = useSelector(state=> state.movies)
  const dispatch = useDispatch()
  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    dispatch(setWatchList(storedWatchList));
    dispatch(setWatchCount(storedWatchList.length));
  }, [dispatch]);
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