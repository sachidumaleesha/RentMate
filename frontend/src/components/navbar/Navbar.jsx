import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar__logo">LOGO</div>
            <ul className="navbar__buttons">
                <li><a href="#">Become a host</a></li>
                <li><a href="#">Sign up</a></li>
                <li><a href="#">Sign in</a></li>
            </ul>
        </nav>
    </div>    
  )
}

export default Navbar