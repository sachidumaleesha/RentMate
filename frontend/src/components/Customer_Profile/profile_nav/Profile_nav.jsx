import React from 'react'
import "./Profile_nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGear,
    faHeadset,
    faHouse, faMoneyBill1Wave, faTreeCity, faTruckRampBox
  } from "@fortawesome/free-solid-svg-icons";

const Profile_nav = () => {
  return (
    <div>
      <div className="profile_nav">
            <ul>
                <li className='list'>
                    <a href="/customer">
                        <span className='icon'><FontAwesomeIcon icon={faHouse} size="xl" style={{color: "#ffffff",}} /></span>
                        {/* <span className='list'>Home</span> */}
                    </a>
                </li>
                <li className='list'>
                    <a href="/customer/customer-property">
                        <span className='icon'><FontAwesomeIcon icon={faTreeCity} size="xl" style={{color: "#ffffff",}} /></span>
                        {/* <span className='list'>Property</span> */}
                    </a>
                </li>
                <li className='list'>
                    <a href="#">
                        <span className='icon'><FontAwesomeIcon icon={faTruckRampBox} size="xl" style={{color: "#ffffff",}} /></span>
                        {/* <span className='list'>Transport</span> */}
                    </a>
                </li>
                <li className='list'>
                    <a href="/customer/payment">
                        <span className='icon'><FontAwesomeIcon icon={faMoneyBill1Wave} size="xl" style={{color: "#ffffff",}} /></span>
                        {/* <span className='list'>Payment</span> */}
                    </a>
                </li>
                <li className='list'>
                    <a href="/customer/question">
                        <span className='icon'><FontAwesomeIcon icon={faHeadset} size="xl" style={{color: "#ffffff",}} /></span>
                        {/* <span className='list'>Support</span> */}
                    </a>
                </li>
                <li className='list'>
                    <a href="/customer/setting">
                        <span className='icon'><FontAwesomeIcon icon={faGear} size="xl" style={{color: "#ffffff",}} /></span>
                        {/* <span className='list'>Settings</span> */}
                    </a>
                </li>
            </ul>
      </div>
    </div>
  )
}

export default Profile_nav
