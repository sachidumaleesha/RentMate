import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './forgetPassword.css'
import { InputText } from 'primereact/inputtext';

const ForgetPassword = () => {
  return (
    <div>
        <Navbar/>
        <div className="main surface-card  shadow-4 border-round lg:w-4">
        <div className="maincon">
            <div className="maintext">Forget Password</div>
        </div>
        <div class="containerText">
            <label htmlFor="email">Email</label>
            <InputText  type="text" placeholder="Enter Email" name="email"  className="w-full "  />
        </div>    
        <button label="Submit" className="btn">Submit </button>
        </div>
        <Footer/>
    </div>
  )
}

export default ForgetPassword