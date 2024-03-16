import React, {useState} from "react";
import "./MovieItem.scss";
import {Link} from  'react-router-dom'
import RaitingStar from "../../UI/RaitingStar/RaitingStar";
import { IoIosStarOutline } from "react-icons/io";
import {FaStar} from "react-icons/fa"
import { FaCheck } from "react-icons/fa6";

import Button from "../../UI/Button/Button";
import { FaPlus } from "react-icons/fa6";
import Modal from "../../UI/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setHover, setOpenModal, setRating, setYourRate } from "../../Redux/movieSlice";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const MovieItem = ({movie, detailMovies, addWatchList}) => {

  const dispatch = useDispatch();

  const {watchList} = useSelector(state => state.movies);
  const {rating} = useSelector(state => state.movies);
  const {hover} = useSelector(state => state.movies)
  const {isLoading} = useSelector(state => state.movies)
  // const {yourRate} = useSelector(state => state.movies);
  // const {openModal} = useSelector(state => state.movies);

  const [openModal, setOpenModal] = useState(false);
  const [yourRate, setYourRate] = useState(0)
  // const [rating, setRating] = useState(0)
  // const [hover, setHover] = useState(null)

  const rateHandle = function(){
    setYourRate(rating)
    setOpenModal(false)
    dispatch(setRating(0))
    
  }
  
  return (
    <>
        <div className="movie__item">
          <div className="movie__item__img">
           {
            isLoading ? <Skeleton height={250}/> :(
              <Link to={`/${movie?.title}`} onClick={() => detailMovies(movie.id)}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
              
              </Link>
            )
           }
          </div>
          <div className="movie__item__detail">
            {
              isLoading ? <Skeleton  width={"70%"} height={20}/> : (
                <div className="movie__item__detail__raiting">
              <span className="movie__item__detail__raiting__stars">
                <RaitingStar style={{ fill: "gold", cursor: "pointer" }} />
                {typeof movie?.vote_average === 'number' ? movie?.vote_average.toFixed(1) : ''}
                
              </span>
              <span className="movie__item__detail__raiting__count">
              <IoIosStarOutline className="movie__item__detail__raiting__count__svg" style={{ fill: "#5199EF", cursor: "pointer" }} onClick={() => setOpenModal(!openModal)}/>
              <span style={{color: '#888888'}}>{yourRate}</span>

              </span>
              <Modal className="movie__item__detail__raiting__modal" isOpen={openModal} onClose={() => setOpenModal(false)}>
                <div className="movie__item__detail__raiting__modal__count" 
                  style={{transform: rating !== 0 ? 'scale(1.5)' : 'none', transition:'all 1s'}}>
                  <RaitingStar className="bigstar" style={{ fill: "#5199EF", cursor: "pointer" , position:'relative'}}/>
                  <span>{rating}</span>
                </div>
                <h5 className="movie__item__detail__raiting__modal__heading">Rate this</h5>
                <h2 className="movie__item__detail__raiting__modal__title">{movie?.title}</h2>
                <div className="movie__item__detail__raiting__modal__stars">
                  {[...Array(10)].map((star, index) => {
                    const currentRating = index + 1
                    return( 
                      <label>
                        <input type="radio" name="rating" value={currentRating} onClick={()=> dispatch(setRating(currentRating))} />
                        <FaStar 
                        className="star"
                        
                        color={currentRating <= (hover || rating) ? '#5199EF' : '#FFF'}
                        onMouseEnter={() => dispatch(setHover(currentRating))}
                        onMouseLeave={() => dispatch(setHover(null))}
                        />
                        
                      </label>
                    )
                  })}
                </div>
                <Button className="movie__item__detail__raiting__modal__btn" 
                style={{background: rating !==0 ? 'gold' : '#313131', color: rating !==0 ? '#000' : '#888888'}}
                onClick={rateHandle}
                >Rate</Button>
              </Modal>
            </div>
              )
            }
            <div className="movie__item__detail__name">
              {
                isLoading ? <Skeleton width={"100%"} count={3} /> : (
                  <Link><h4>{movie?.title}</h4></Link>
                )
              }
            </div>
            <div className="movie__item__detail__watchlist">
              <Button onClick={() => addWatchList(movie)}>
                {!watchList.some(item => item.id === movie.id) ?  <><FaPlus /> Watchlist</> : <><FaCheck /> Watchlist</> }
                
              </Button>
            </div>
          </div>
        </div>
    </>
      
  );
};

export default MovieItem;
