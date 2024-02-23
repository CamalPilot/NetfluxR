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



// const key = "dab2765e";

export function App() {

  const [movies, setMovies] = useState([])
  const [selectItemID, setSelectItemID] = useState(null)
  const [raitingMovies, setRaitingMovies] = useState([])
  const [search, setSearch] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [watchCount, setWatchCount] = useState(0)
  const [watchList, setWatchList] = useState([]);

  // const [openModal, setOpenModal] = useState(false);
  // const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
   async function fetchMovies(){
      try{
        const response  = await axios.get(`${API_URL}movie/popular?api_key=${import.meta.env.VITE_API_KEY}`)
      const allMovies = response.data.results;
      const randomMovies = getRandomMovies(allMovies, 6)
      setMovies(randomMovies)
      }catch (error) {
        console.error('Error Fetching movies', error)
      }
    }
    fetchMovies()
  }, [])

  
    async function detailMovies(id){
      try{
        const response = await axios.get(`${API_URL}movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`);
        setSelectItemID(response.data)
      }catch(error){
        console.error('No Details', error)
      }

    }
    // detailMovies()
    useEffect(() => {
      async function topRaiting(){
        try{
          const response = await axios.get(`${API_URL}movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`);
         setRaitingMovies(response.data.results)
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
         setAllMovies(response.data.results)
        }catch(error){
          console.error('Movie not found', error)
        }
      }
      allMovies()
    },[])
   
      async function searchMovie(){
        try{
          const response = await axios.get(`${API_URL}search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${search}`);
         setAllMovies(response.data.results)
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
        setWatchList(watchList.filter((item) => item !== movie));
        setWatchCount(watchCount - 1)
      }else{
        setWatchList([...watchList, movie])
        setWatchCount(watchCount +1)
      }
    }

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout search={search} setSearch={setSearch} searchMovie={searchMovie} watchCount={watchCount} />}>
        <Route path='/'element={<Home movies = {movies} detailMovies={detailMovies} addWatchList={addWatchList} watchList={watchList}/>}/>
        <Route path='/All-movies'element={<AllMovies allMovies={allMovies} detailMovies={detailMovies} search={search} addWatchList={addWatchList} watchList={watchList}/>}/>
        <Route path='/:id'element={<DetailMovie selectItemID={selectItemID}/>}/>
        <Route path='/Top-raiting'element={<Topraiting raitingMovies={raitingMovies} detailMovies={detailMovies} addWatchList={addWatchList} watchList={watchList}/>}/>
        <Route path='/Watchlist' element={<WatchList watchList={watchList} detailMovies={detailMovies} addWatchList={addWatchList}/>}/>


      </Route>
    </Routes>
      
    </BrowserRouter>
  )
}
