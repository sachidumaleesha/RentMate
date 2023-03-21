import React from 'react'
import './customer_Profile.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Customer_Profile = () => {
  return (

    <div>
        <Navbar /> 
        <div className='master'>
            <div className='profile_nav'>

            </div>
            <div className="profile_home">
              <div className="info_card">
                  <div className="card_back">
                        <div className="profile_pic">
                              <img src='https://i.pinimg.com/564x/5d/96/cc/5d96ccb062419e3845e4f51c592c0deb.jpg' />
                        </div>
                        <h2>Eshan Imesh</h2>
                        <h3>21 Years Old</h3>
                  </div>
              </div>
            </div>
        </div>
        <Footer />
    </div>

  )
}

export default Customer_Profile