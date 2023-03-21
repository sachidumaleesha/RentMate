import React from "react";
import "./customer_Profile.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Customer_Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="master">
        <div className="profile_nav"></div>
        <div className="profile_home">
          <div className="info_card">
            <div className="card1_back">
              <div className="profile_pic">
                <img src="https://i.pinimg.com/564x/5d/96/cc/5d96ccb062419e3845e4f51c592c0deb.jpg" />
              </div>
              <h2>Eshan Imesh</h2>
              <h3>example@gmail.com</h3>
            </div>
            <div className="notification_card">
              <div className="notification_title">
                <div className="notification_name">
                  <h1>Notifications</h1>
                </div>
                <div className="notification_date">
                  <h1>3 March 2023</h1>
                </div>
              </div>
              <div className="notification_master">
                
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customer_Profile;
