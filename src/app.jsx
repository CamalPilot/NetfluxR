import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import { useEffect, useState } from 'react'
import Home from './Layout/Home/Home'
import MainLayout from './Layout/Mainlayout/MainLayout'
import axios from 'axios'
import DetailMovie from './Pages/DetailMovie/DetailMovie'

import Topraiting from './Pages/Top-raiting/Topraiting'
import AllMovies from './Pages/AllMovies/AllMovies'
import WatchList from './Pages/WatchList/WatchList'
import { API_URL } from './services/movie'
import { useDispatch, useSelector } from 'react-redux'
import { setAllMovies, setMovies, setRaitingMovies, setSelectItemID, setWatchCount, setWatchList } from './Redux/movieSlice'



// const key = "dab2765e";

export function App() {

  // const [movies, setMovies] = useState([])
  // const [allMovies, setAllMovies] = useState([]);
  // const [raitingMovies, setRaitingMovies] = useState([])
  // const [search, setSearch] = useState([]);
  // const [watchList, setWatchList] = useState([]);
  // const [selectItemID, setSelectItemID] = useState(null)
  // const [watchCount, setWatchCount] = useState(0)

  // const [openModal, setOpenModal] = useState(false);
  // const [filteredData, setFilteredData] = useState([]);

  // const {movies} = useSelector(state => state.movies)
  // const {allMovies} = useSelector(state => state.movies)
  // const {raitingMovies} = useSelector(state => state.movies)
  const {search} = useSelector(state => state.movies)
  const {watchList} = useSelector(state => state.movies)
  const {watchCount} = useSelector(state => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
   async function fetchMovies(){
      try{
        const response  = await axios.get(`${API_URL}movie/popular?api_key=${import.meta.env.VITE_API_KEY}`)
      const allMovies = response.data.results;
      const randomMovies = getRandomMovies(allMovies, 6)
      dispatch(setMovies(randomMovies))
      }catch (error) {
        console.error('Error Fetching movies', error)
      }
    }
    fetchMovies()
  }, [])

  
    async function detailMovies(id){
      try{
        const response = await axios.get(`${API_URL}movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`);
        dispatch(setSelectItemID(response.data))
      }catch(error){
        console.error('No Details', error)
      }

    }
    
    useEffect(() => {
      async function topRaiting(){
        try{
          const response = await axios.get(`${API_URL}movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`);
         dispatch(setRaitingMovies(response.data.results))
        }catch(error){
          console.error('Error Top Rating', error)
        }
      }
      topRaiting()
    },[])
    useEffect(() => {
      async function allMovies(){
        try{
          const response = await axios.get(`${API_URL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}`);
         dispatch(setAllMovies(response.data.results))
        }catch(error){
          console.error('Movie not found', error)
        }
      }
      allMovies()
    },[])
   
      async function searchMovie(){
        try{
          const response = await axios.get(`${API_URL}search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`);
         dispatch(setAllMovies(response.data.results))
        }catch(error){
          console.error('Search Error...', error)
        }
      }
 
    
    function getRandomMovies(allMovies, count) {
      const shuffled = allMovies.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }
    
    const addWatchList = function (movie){
      if(watchList.includes(movie)){
        dispatch(setWatchList(watchList.filter((item) => item !== movie)));
        dispatch(setWatchCount(watchCount - 1))
      }else{
        dispatch(setWatchList([...watchList, movie]))
        dispatch(setWatchCount(watchCount +1))
      }
    }

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout  searchMovie={searchMovie}/>}>
        <Route path='/'element={<Home  detailMovies={detailMovies} addWatchList={addWatchList} />}/>
        <Route path='/All-movies'element={<AllMovies  detailMovies={detailMovies} addWatchList={addWatchList}/>}/>
        <Route path='/:id'element={<DetailMovie />}/>
        <Route path='/Top-raiting'element={<Topraiting  detailMovies={detailMovies} addWatchList={addWatchList} />}/>
        <Route path='/Watchlist' element={<WatchList  detailMovies={detailMovies} addWatchList={addWatchList}/>}/>


      </Route>
    </Routes>
      
    </BrowserRouter>
  )
}
