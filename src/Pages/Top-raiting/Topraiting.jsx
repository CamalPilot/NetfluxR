import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from '../../Components/MovieItem/MovieItem'
import { setWatchCount, setWatchList } from '../../Redux/movieSlice'
import Loading from '../../UI/Loading/Loading'
import './Topraiting.scss'

const Topraiting = ({detailMovies, addWatchList}) => {
    const {raitingMovies} = useSelector(state => state.movies)
    const {isLoading} = useSelector(state=> state.movies)
    if (!Array.isArray(raitingMovies)) {
        return null;
      }
      const dispatch = useDispatch()
  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    dispatch(setWatchList(storedWatchList));
    dispatch(setWatchCount(storedWatchList.length));
  }, [dispatch]);
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