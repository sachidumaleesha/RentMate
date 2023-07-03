import React, { useState,useEffect } from 'react';
import Sidebar from '../../../components/com.showRoom/sidebar/Sidebar';
import styles from "../../../components/com.style/contentArea.module.css";
import styless from './showroomdash.module.css'
import { BreadCrumb } from "primereact/breadcrumb";
import axios from 'axios';


const ShowroomDash = () => {
  const items = [
    { label: "Dashboard", url: "/showroomOwner" }
  ];
  const home = { icon: "pi pi-th-large", url: "/showroomOwner" };

  const [showRoom, setShowRoom] = useState([])

  const userId = localStorage.getItem('id');

  useEffect(() => {
    axios.get(`http://localhost:7070/api/Showroom/user/${userId}`)
      .then((res) => setShowRoom(res.data))
      .catch((err) => console.log(err))
  }, [])

  if (showRoom.length > 0) {
    console.log("Showroom already added");
    const id = showRoom[0]._id;
    localStorage.setItem('showroomId', id)
  }
  else {
    console.log("Showroom not added")
  }

  // localStorage.setItem('showroomId', showRoom[0]._id)

  const [furniture, setFurniture] = useState([])

  const showroomId = localStorage.getItem('showroomId')

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:7070/api/Furniture/showroom/${showroomId}`)
        .then((response) => setFurniture(response.data))
        .catch((err) => { console.log(err) })

      console.log(furniture);
    }

    fetchData()

  })


  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Dashboard</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.welcomemsg}>
            👋 Welcome Showroom Owner, You're Back Again!
          </div>
          <div className={styles.contentbody}>
            <div className={styless.featured}>
            <div className={styless.featuredItem}>
                <span className={styless.featuredTitle}>Furnitures</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>{furniture.length}</span>
                  <span className={styless.featuredMoneyRate}>
                    +2.4 <div className={styless.featuredIcon}></div>
                    <i class='bx bx-up-arrow-alt' ></i>
                  </span>
                </div>
                <span className={styless.featuredSub}>Compared to last month</span>
              </div>
              <div className={styless.featuredItem}>
                <span className={styless.featuredTitle}>Views</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>763</span>
                  <span className={styless.featuredMoneyRate}>
                    -11.4 <div className={styless.featuredIcon_negative}></div>
                    <i class='bx bx-down-arrow-alt' ></i>
                  </span>
                </div>
                <span className={styless.featuredSub}>Compared to last month</span>
              </div>
              <div className={styless.featuredItem}>
                <span className={styless.featuredTitle}>Sales</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>$4,415</span>
                  <span className={styless.featuredMoneyRate}>
                    -1.4 <div className={styless.featuredIcon_negative}></div>
                    <i class='bx bx-up-arrow-alt' ></i>
                  </span>
                </div>
                <span className={styless.featuredSub}>Compared to last month</span>
              </div>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ShowroomDash;
