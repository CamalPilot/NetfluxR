import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

const NavMenu = ({isMenuOpen, closeMenu}) => {
  const menuClassName = isMenuOpen ? "menu__list menu__list__open" : "menu__list"
  return (
    <nav className='menu'>
        <ul className={menuClassName}>
            <li><Link to='/' onClick={closeMenu}>Home</Link></li>
            <li><Link to='/All-movies' onClick={closeMenu}>All Movies</Link></li>      
            <li><Link to='/Top-raiting' onClick={closeMenu}>Top Raiting</Link></li>
        <div className='menu__close' onClick={closeMenu}>X</div>
        </ul>
    </nav>
  )
}

export default NavMenu