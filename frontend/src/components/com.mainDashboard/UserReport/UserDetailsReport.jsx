import React, { useRef, useState, useEffect } from "react";
import styles from "./userReport.module.css";
import styless from '../../../Pages/Main_Dashboard/Dashboard/MainDashboard.jsx'
import { Button } from "primereact/button";
import axios from "axios";
import { Tag } from "primereact/tag";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "../../../components/navbar/images/RentMate.png";
import {
  faEarthAmericas,
  faLocationCrosshairs,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons"

const UserDetailsReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

//   const ListingName = (text) => {
//     return text.substring(0, 20) + " ...";
//   };

//   const LocationText = (text) => {
//     return text.substring(0, 15) + " ...";
//   };

  const pickStatus = (status) => {
    if (status.toLowerCase() === "active") {
      return (
        <Tag
          className={styless.status__btn}
          icon="pi pi-check"
          severity="success"
          value="Active"
        />
      );
    } else {
      return (
        <Tag
          className={styless.status__btn}
          icon="pi pi-info-circle"
          severity="warning"
          value="Pending"
        ></Tag>
      );
    }
  };

  const [users, setUsers] = useState([])
  useEffect(() => {
    function getUsers() {
      axios
        .get(`http://localhost:7070/api/userr/`)
        .then((res) => {
          const AllUsers = res.data.users;
          setUsers(AllUsers)
          console.log(res.data.users);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getUsers();
  }, []);
  const filteredData = users.filter((data) => {
    console.log(data);
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.fname} ${data.lname} ${data.email} ${data.contactNumber} ${data.roll} ${data.username} ${data.password}  `.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  return (
    <div>
          <div className={styles.contentbody}>
      <div className={styles.CReportpage_header}>
          <div className={styles.layer1}>
            <div className={styles.CReportpage_logo}>
              <div className={styles.CReportpage_logo_container}>
                <img src={Login} alt="site-logo" />
                <div className={styles.CReportpage_logo_container_sitename}>
                  <span className={styles.sitename}>RentMate</span>
                </div>
              </div>
            </div>

            <div className={styles.right_container}>
              <div className={styles.container_right}>
                <div className={styles.lay1}>
                  <div className={styles.data}>
                    <span>077-XXXXXXX</span>
                    <span>076-XXXXXXX</span>
                  </div>
                  <div className={styles.data_icon}>
                    <FontAwesomeIcon icon={faMobileScreen} style={{color: "#ffffff",width: "20px",height: "20px",margin: "0 auto",marginTop: "10px"}} />
                  </div>
                </div>
                <div className={styles.lay1}>
                  <div className={styles.data}>
                    <span>WWW.rentmate.com</span>
                    <span>rentmatehelpdesk@gmail.com</span>
                  </div>
                  <div className={styles.data_icon}>
                    <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#ffffff",width: "20px",height: "20px",margin: "0 auto",marginTop: "10px"}} />
                  </div>
                </div>
                <div className={styles.lay1}>
                  <div className={styles.data}>
                    <span>
                      Pasan Mawatha,Weliwita <br />
                      Sri lanka
                    </span>
                  </div>
                  <div className={styles.data_icon}>
                    <FontAwesomeIcon icon={faLocationCrosshairs} style={{color: "#ffffff",width: "20px",height: "20px",margin: "0 auto",marginTop: "10px"}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styless.table_content} >
              <table>
                <tr>
                  <th>Fist Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Conatct Number</th>
                  <th>Roll</th>
                  <th>Username</th>

                  
                </tr>
                {filteredData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.fname}</td>
                    <td>{data.lname}</td>
                    <td>{data.email}</td>
                    <td>{data.contactNumber}</td>
                    <td>{data.roll}</td>
                    <td>{data.username}</td>
                    
                  </tr>
                ))}
              </table>
            </div>
      </div>
    </div>
  )
}

export default UserDetailsReport