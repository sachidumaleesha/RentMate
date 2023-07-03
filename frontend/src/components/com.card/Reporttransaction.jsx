import React, { useRef, useState, useEffect } from "react";
import styles from "./reporttransaction.module.css";
import styless from '../../Pages/Customer_Profile/Customer_Payment/Customer_Payment.jsx'
import axios from "axios";
import { Tag } from "primereact/tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from '../../components/navbar/images/RentMate.png'
import {
    faEarthAmericas,
    faLocationCrosshairs,
    faMobileScreen,
  } from "@fortawesome/free-solid-svg-icons"; 

function Reporttransaction() {

    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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

const [reservation, setReservation] = useState([]);

useEffect(() =>{

    function getReservationDetails(){
      axios.get("http://localhost:7070/reservation/").then((res) =>{
        setReservation(res.data)
      }).catch((err) => {
        alert(err.message);
      })
    }

    getReservationDetails();
  }, []);

  const filteredreservationData = reservation.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.cardNumber} ${data.reserveItem} ${data.bookingDate} ${data.amount}`.toLowerCase();
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
        <div className={styles.trans_table}>
                <table>
                  <thead>
                    <tr>
                      <th>Card Number</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredreservationData.map((data) => (
                    <tr>
                      <td>{data.cardNumber}</td>
                      <td>{data.reserveItem}</td>
                      <td>{data.bookingDate}</td>
                      <td>
                        <strong>{data.amount}</strong>
                      </td>
                    </tr>
                    ))}
                    
                  </tbody>
                </table>
              </div>
      </div>
    </div>
  )
}

export default Reporttransaction