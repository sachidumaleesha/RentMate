import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <i class='bx bxs-home-heart'></i>
          <span className='logo-name'>RentMate</span>
        </div>
        <ul className='nav-links'>
          <li>
            <a href="">
            <i class='bx bx-grid-alt'></i>
            <span className='link-name'>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar