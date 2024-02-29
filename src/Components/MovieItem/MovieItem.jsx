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

const MovieItem = ({movie, detailMovies, addWatchList}) => {

  const dispatch = useDispatch();

  const {watchList} = useSelector(state => state.movies);
  const {rating} = useSelector(state => state.movies);
  const {hover} = useSelector(state => state.movies)
  // const {yourRate} = useSelector(state => state.movies);
  // const {openModal} = useSelector(state => state.movies);

  const [openModal, setOpenModal] = useState(false);
  const [yourRate, setYourRate] = useState(0)
  // const [rating, setRating] = useState(0)
  // const [hover, setHover] = useState(null)

  const rateHandle = function(){
    setYourRate(rating)
    setOpenModal(false)
  }
  
  return (
    <>
        <div className="movie__item">
          <div className="movie__item__img">
            <Link to={`/${movie?.title}`} onClick={() => detailMovies(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
              
            </Link>
          </div>
          <div className="movie__item__detail">
            <div className="movie__item__detail__raiting">
              <span className="movie__item__detail__raiting__stars">
                <RaitingStar style={{ fill: "gold", cursor: "pointer" }} />
                {typeof movie?.vote_average === 'number' ? movie?.vote_average.toFixed(1) : ''}
                
              </span>
              <span className="movie__item__detail__raiting__count">
              <IoIosStarOutline style={{ fill: "#5199EF", cursor: "pointer" }} onClick={() => setOpenModal(!openModal)}/>
              <span style={{color: '#888888'}}>{yourRate}</span>

              </span>
              <Modal className="movie__item__detail__raiting__modal" isOpen={openModal} onClose={() => setOpenModal(false)}>
                <div className="movie__item__detail__raiting__modal__count" 
                  style={{transform: rating !== 0 ? 'scale(1.5)' : 'none', transition:'all 1s'}}>
                  <RaitingStar style={{ fill: "#5199EF", cursor: "pointer" , fontSize:'10rem', position:'relative'}}/>
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
                        size={30}
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
            <div className="movie__item__detail__name">
              <Link><h4>{movie?.title}</h4></Link>
            </div>
            <div className="movie__item__detail__watchlist">
              <Button onClick={() => addWatchList(movie)}>
                {!watchList.includes(movie) ?  <><FaPlus /> Watchlist</> : <><FaCheck /> Watchlist</> }
                
              </Button>
            </div>
          </div>
        </div>
    </>
      
  );
};

export default MovieItem;
