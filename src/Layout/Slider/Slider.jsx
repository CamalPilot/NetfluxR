import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import RaitingStar from "../../UI/RaitingStar/RaitingStar";
import { useSelector } from "react-redux";







export default function SimpleSlider() {
  const {movies} = useSelector(state => state.movies)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="container-lg">
      <Slider {...settings}>
        
              {

              movies.map((movie) => (
            <div key={movie.id} className="slider__img">
              <Link>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
              </Link>
              <div className="slider__img__about">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <h4>{movie.duration}</h4>
                <span style={{display:'flex', gap:'1rem'}}><RaitingStar style={{ fill: "gold", cursor: "pointer" }} />{(movie.vote_average).toFixed(1)}/10</span>
              </div>
              <div className="slider__img__raiting">
              </div>

            </div>
              ))}
              
              {/* <img src={`https://image.tmdb.org/t/p/w500/${item.image}`} alt="" /> */}
        

      </Slider>
    </div>
  );
}

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Slider.scss";
// import React from "react";
// import Slider from "react-slick";
// import RaitingStar from "../../UI/RaitingStar/RaitingStar";
// import Button from "../../UI/Button/Button";
// import { FaPlus } from "react-icons/fa6";







// export default function SimpleSlider({data}) {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };
//   return (
//     <div className="container">
//       <Slider {...settings}>
//         {data.map((item) => (
//           <div className="slider">
//             <div key={item.id} className="slider__content">
//               <div className="slider__content__title">
//                 <h2>{item.title}</h2>
//               </div>

//               <div className="slider__content__name">
//                 <h2>{item.stars.join(", ")}</h2>
//               </div>

//               <div className="slider__content__raiting">
//                 <span className="slider__content__raiting__stars">
//                   <RaitingStar style={{ fill: "gold", cursor: "pointer" }} />
//                   {item.rating}
//                 </span>

//                 <span className="slider__content__raiting__count">
//                   <RaitingStar style={{ fill: "#5199EF", cursor: "pointer" }} />
//                 </span>
//                 <span className="slider__content__raiting__time">
//                   {item.duration}
//                 </span>
//               </div>

//               <div className="slider__content__about">
//                 <p>{item.description}</p>
//               </div>

//               <div className="slider__content__buttons">
//                 <Button>
//                   <FaPlus />
//                   Watchlist
//                 </Button>
//               </div>
//             </div>
//             <div className="slider__img">
//               <img src={item.image} alt="" />
//               {/* <img src={`https://image.tmdb.org/t/p/w500/${item.image}`} alt="" /> */}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
