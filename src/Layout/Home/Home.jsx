import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import MovieItem from '../../Components/MovieItem/MovieItem'
import DetailMovie from '../../Pages/DetailMovie/DetailMovie'
import { setWatchCount, setWatchList } from '../../Redux/movieSlice'
import ComingSoon from '../ComingSoon/ComingSoon'
import PopularMovies from '../PopularMovies/PopularMovies'
// import Main from '../Main/Main'
import SimpleSlider from '../Slider/Slider'
import './Home.scss'

const Home = ({ detailMovies, addWatchList}) => {
  const dispatch = useDispatch()
  useEffect(() => {
      const storedWatchList = JSON.parse(localStorage.getItem('watchlist')) || [];
      dispatch(setWatchList(storedWatchList));
      dispatch(setWatchCount(storedWatchList.length))
  }, [dispatch])
  return (
    <div className='home'>
        {/* <Main/> */}
        <SimpleSlider/>
        <PopularMovies  detailMovies = {detailMovies} addWatchList={addWatchList} />
        <ComingSoon detailMovies={detailMovies} addWatchList={addWatchList}/>
    </div>
  )
}

export default Home