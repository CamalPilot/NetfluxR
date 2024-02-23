import React from 'react'
import './DetailMovie.scss'
import RaitingStar from "../../UI/RaitingStar/RaitingStar";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import Modal from '../../UI/Modal/Modal';

const DetailMovie = ({selectItemID}) => {
  return (
    <div className='detail container'>
        <div className="detail__heading">
            <h2>{selectItemID?.title}</h2>
            <span> •  {selectItemID?.runtime} min</span>
        </div>
        <div className="detail__content">
            <div className="detail__content__img">
                <img src={`https://image.tmdb.org/t/p/w500/${selectItemID?.backdrop_path}`} alt="" />
            </div>
            <div className="detail__content__about">
                <p>{selectItemID?.overview}</p>
                <h5>Country: {selectItemID?.production_countries[0]?.name}</h5>
                <h5>Release date:{selectItemID?.release_date}</h5>
                <h5>Genre: {selectItemID?.genres.map((item) => item.name + " ")}</h5>
                <div className='detail__content__about__raiting'>
                    <div className='detail__content__about__raiting-imdb'>
                        <h5>IMDB raiting</h5>
                        <Link><h4>{typeof selectItemID?.vote_average === 'number' ? selectItemID?.vote_average.toFixed(1) : ''} <span style={{opacity: '0.5'}}>/10</span> <RaitingStar style={{ fill: "gold", cursor: "pointer" }} /></h4></Link>
                    </div>
                    <div className='detail__content__about__raiting-imdb'>
                        <h5>Your raiting</h5>
                        <Link onClick={() => <Modal/>}><h4 style={{ color: "#5199EF"}}><IoIosStarOutline style={{ fill: "#5199EF", cursor: "pointer" }}/> Rate</h4></Link>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default DetailMovie