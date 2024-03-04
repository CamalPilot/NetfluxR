import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from '../../Components/MovieItem/MovieItem'
import { setWatchCount, setWatchList } from '../../Redux/movieSlice'
import './AllMovies.scss'

const AllMovies = ({detailMovies, addWatchList}) => {
  const {allMovies} = useSelector(state=> state.movies)
  const {isLoading} = useSelector(state=>state.movies)
  const dispatch = useDispatch()
  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    dispatch(setWatchList(storedWatchList));
    dispatch(setWatchCount(storedWatchList.length));
  }, [dispatch]);
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