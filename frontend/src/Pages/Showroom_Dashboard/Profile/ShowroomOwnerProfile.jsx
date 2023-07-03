import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/com.showRoom/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import styless from './showroomownprofile.module.css'
import { BreadCrumb } from "primereact/breadcrumb";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowroomOwnerProfile = () => {

  const [user, setUser] = useState([])

  const userId = localStorage.getItem('id');

  useEffect(() => {
    axios.get(`http://localhost:7070/api/userr/${userId}`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err))
  }, [])

  const items = [
    { label: "Profile", url: "/showroomOwner/profile" }
  ];

  const home = { icon: "pi pi-th-large", url: "/showroomOwner" };
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Profile</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>
            <div className={styless.userContainer}>
              <div className={styless.userShow}>
                <div className={styless.userShowTop}>
                  <img
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className={styless.userShowImg}
                  />
                  <div className={styless.userShowTopTitle}>
                    <span className={styless.userShowUsername}>{user.fname} {user.lname}</span>
                  </div>
                </div>
                <div className={styless.userShowBottom}>
                  <span className={styless.userShowTitle}>Account Details</span>
                  <div className={styless.userShowInfo}>
                    <div className={styless.userShowIcon}>
                      <i class='bx bx-user'></i></div>
                    <span className={styless.userShowInfoTitle}>{user.username}</span>
                  </div>
                  <div className={styless.userShowInfo}>

                    <div className={styless.userShowIcon}>
                      <i class='bx bx-calendar-alt'></i></div>
                    <span className={styless.userShowInfoTitle}>10.12.1999</span>
                  </div>
                  <span className={styless.userShowTitle}>Contact Details</span>
                  <div className={styless.userShowInfo}>
                    <div className={styless.userShowIcon}>
                      <i class='bx bx-mobile'></i></div>
                    <span className={styless.userShowInfoTitle}>{user.contactNumber}</span>
                  </div>
                  <div className={styless.userShowInfo}>
                    <div className={styless.userShowIcon}>
                      <i class='bx bx-envelope'></i>
                    </div>
                    <span className={styless.userShowInfoTitle}>{user.email}</span>
                  </div>
                  <div className={styless.userShowInfo}>
                    <div className={styless.userShowIcon} >
                      <i class='bx bx-current-location'></i></div>
                    <span className={styless.userShowInfoTitle}>New York | USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowroomOwnerProfile;
