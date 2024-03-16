import React, {useState, useEffect, useRef} from "react";
import NavMenu from "../../Components/Nav-menu/NavMenu";
import logo from "../../assets/logoN.png";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillFolderAdd } from "react-icons/ai";


import "./Header.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../Redux/movieSlice";


const Header = ({searchMovie}) => {
  const {search} = useSelector(state => state.movies)
  const {watchCount} = useSelector(state => state.movies)
  const dispatch = useDispatch()
  // const menuRef = useRef(null)

  const[isMenuOpen,setIsMenuOpen] = useState(false);
  const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // const handleClickOutside = (event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     setIsMenuOpen(false);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="headerfix">
      <div className="container header">
        <div className="header__menu">
          <div className="header__menu__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <NavMenu isMenuOpen = {isMenuOpen} closeMenu={closeMenu}/>
        </div>
        <div className="header__end">
          <form className="header__end__search">
          <input type="text" placeholder="search" value={search} onChange={(e)=>dispatch(setSearch(e.target.value))}/>
          <Link to="/All-movies"><button className="header__end__search__icon" type="submit" onClick={searchMovie}><CiSearch className="search__icon" /></button></Link>
          </form>

          {/* <Link to='/Watchlist' className="header__end__icon"><AiFillFolderAdd
            className="header__end__setting"
            style={{ fill: "#fff", fontSize:"2.2rem" }}
          />Watchlist <span>{watchCount}</span></Link> */}
          <Link to="/Watchlist" className="header__end__icon">
            <AiFillFolderAdd
              className="header__end__setting"
              style={{ fill: "#fff", fontSize: "2.2rem" }}
            />
            {windowWidth > 600 && "Watchlist" }{<span>{watchCount}</span>}
            {/* {windowWidth < 600 && <span>{watchCount}</span>} */}
          </Link>
          <Link className="burger" onClick={toggleMenu}><GiHamburgerMenu style={{fontSize:"1.8rem"}}/></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
