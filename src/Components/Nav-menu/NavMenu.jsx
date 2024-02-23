import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

const NavMenu = () => {
  return (
    <nav className='menu'>
        <ul className='menu__list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/All-movies'>All Movies</Link></li>
            {/* <li><Link to=''>All Categories</Link></li> */}
            
            <li><Link to='/Top-raiting'>Top Raiting</Link></li>
        </ul>
    </nav>
  )
}

export default NavMenu