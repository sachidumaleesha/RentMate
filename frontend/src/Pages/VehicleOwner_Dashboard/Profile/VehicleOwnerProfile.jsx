import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/com.vehicleOwner/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import styless from './vehicleownerprofile.module.css';
import axios from "axios";

const VehicleOwnerProfile = () => {

  const id = localStorage.getItem("id");

  const [userDetails, setUserDetails] = useState({
    fname: '',
    lname: '',
    email: '',
    contactNumber: '',
    username: '',
    roll: '',
    password: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:7070/api/userr/${id}`)
        .then((res) => {
          setUserDetails(res.data.user)
          console.log(res.data.user)
        }
        )
        .catch((err) => console.log(err))
      console.log(userDetails);
    }
    fetchData();
  }, []);

  const items = [
    { label: "Profile", url: "/vehicleOwner/profile" }
  ];
  const home = { icon: "pi pi-th-large", url: "/vehicleOwner" };
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
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
                    alt=""
                    className={styless.userShowImg}
                  />
                  <div className={styless.userShowTopTitle}>
                    <span className={styless.userShowUsername}>{userDetails.fname} {userDetails.lname}</span>
                    <span className={styless.userShowUserTitle}>{userDetails.roll}</span>
                  </div>
                </div>
                <div className={styless.userShowBottom}>
                  <span className={styless.userShowTitle}>Account Details</span>
                  <div className={styless.userShowInfo}>
                    <div className={styless.userShowIcon}>
                      <i class='bx bx-user'></i></div>
                    <span className={styless.userShowInfoTitle}>{userDetails.username}</span>
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
                    <span className={styless.userShowInfoTitle}>{userDetails.contactNumber}</span>
                  </div>
                  <div className={styless.userShowInfo}>
                    <div className={styless.userShowIcon}>
                      <i class='bx bx-envelope'></i>
                    </div>
                    <span className={styless.userShowInfoTitle}>{userDetails.email}</span>
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
    </div >
  );
};

export default VehicleOwnerProfile;

