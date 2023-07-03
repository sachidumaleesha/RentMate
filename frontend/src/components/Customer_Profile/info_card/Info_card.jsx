import React, { useEffect, useState } from "react";
import "./info_card.css";
import axios from "axios";
import imagePath from "../../../uploads/file-1684405353607-923478245.JPG";

const Info_Card = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);

//user data get
  const [customerinfo, setCustomerinfo] = useState({});
  const [customerinfo2, setCustomerinfo2] = useState({});
  
  const [avatarUrl, setAvatarUrl] = useState("");

  const userid = localStorage.getItem("id");

  useEffect(() => { 
  function getcustomerinforeal() {
    axios(`http://localhost:7070/api/customer/customer_info/${userid}`)
      .then((res) => {
        setCustomerinfo2(res.data);
        const temppic = res.data.avatar;
        console.log(res.data);
        const dynamicAvatarUrl = `../../../uploads/${temppic}`; // Build the dynamic URL based on the received data
          setAvatarUrl(dynamicAvatarUrl);
        console.log(dynamicAvatarUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getcustomerinforeal()
}, []);


  // const pictureid = customerinfo2.avatar;
  // const imagePath = `../../../uploads/${pictureid}`;


  // console.log(imagePath);

  useEffect(() => {
    const userid = localStorage.getItem("id");
  
    function getcustomerinfo() {
      axios(`http://localhost:7070/api/customer/customer_basic_info/${userid}`)
        .then((res) => {
          setCustomerinfo(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getcustomerinfo();
  }, []);
  
  return (
    <div>
      <div className="info_card">
        <div className="card1_back">
          <div className="profile_pic">
          <img src={imagePath} alt="Profile Picture" />
          </div>
          <h3 className="profile_pic_h2">{customerinfo.fname} {customerinfo.lname}</h3>
          <h3>{customerinfo.email}</h3>
        </div>
        <div className="notification_card">
          <div className="notification_title">
            <div className="notification_name">
              <h1 className="h1_notifi">Notifications</h1>
            </div>
            <div className="notification_date">
              <h1 id="current_date" className="h1_notifi_date">{currentDate}</h1>
            </div>
          </div>
          <div className="notification_master">
            <div className="clear_notifications">
              <a href="#">
                <span>clear all</span>
              </a>
            </div>
            <div className="notification_lable">
              <span>No any notification 😥</span>
              <hr />
            </div>
            <div className="notification_lable">
              <span>No any notification 😥</span>
              <hr />
            </div>
            <div className="notification_lable">
              <span>No any notification 😥</span>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info_Card;
