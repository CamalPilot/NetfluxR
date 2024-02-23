import React from "react";
import NavMenu from "../../Components/Nav-menu/NavMenu";
import logo from "../../assets/logoN.png";
import { CiSearch } from "react-icons/ci";

// import { IoMdSettings } from "react-icons/io";
import { AiFillFolderAdd } from "react-icons/ai";


import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({search, setSearch, searchMovie, watchCount}) => {
  return (
    <div className="headerfix">
      <div className="container header">
        <div className="header__menu">
          <div className="header__menu__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <NavMenu />
        </div>
        <div className="header__end">
          {/* <div className="header__end__search">
            <input  type="text" placeholder="search" />
            <CiSearch className="header__end__search__icon" />
          </div> */}
          <form className="header__end__search">
          <input type="text" placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <Link to="/All-movies"><button className="header__end__search__icon" type="submit" onClick={searchMovie}><CiSearch className="search__icon" /></button></Link>
          </form>

          <Link to='/Watchlist' className="header__end__icon"><AiFillFolderAdd
            className="header__end__setting"
            style={{ fill: "#fff", fontSize:"2.2rem" }}
          />Watchlist <span>{watchCount}</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
