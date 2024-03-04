import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    allMovies:[],
    raitingMovies:[],
    search: [],
    watchList:[],
    selectItemID: null,
    watchCount:0,
    // openModal: false,
    rating:0,
    // yourRate:0,
    hover:null,
    isLoading: false,

}


export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies(state, action){
            state.movies = action.payload
        },
        setAllMovies(state, action){
            state.allMovies = action.payload
        },
        setRaitingMovies(state, action){
            state.raitingMovies=action.payload
        },
        setSearch(state,action){
            state.search=action.payload
        },
        setWatchList(state, action){
            state.watchList=action.payload
        },
        setSelectItemID(state, action){
            state.selectItemID = action.payload
        },
        setWatchCount(state, action){
            state.watchCount=action.payload
        },
        // setOpenModal(state, action){
        //     state.openModal = action.payload
        // },
        setRating(state, action){
            state.rating = action.payload
        },
        // setYourRate(state, action){
        //     state.yourRate = action.payload
        // },
        setHover(state, action){
            state.hover=action.payload;
        },
        setIsLoading(state, action){
            state.isLoading = action.payload
        }
    }
})

export const {setMovies,
    setAllMovies,
    setRaitingMovies, 
    setSearch, 
    setWatchList,
    setSelectItemID, 
    setWatchCount,
    setOpenModal,
    setRating,
    setYourRate,
    setHover,
    setIsLoading
} = movieSlice.actions 

export default movieSlice.reducer