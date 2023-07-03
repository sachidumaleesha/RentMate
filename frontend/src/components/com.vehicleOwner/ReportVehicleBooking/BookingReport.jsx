import React, { useRef, useState, useEffect } from "react";
import styles from "./bookingreport.module.css";
import styless from '../../../Pages/VehicleOwner_Dashboard/Bookings/VehicleBookings.jsx'
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
} from "@fortawesome/free-solid-svg-icons";

const BookingReport = () => {
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

    
  const [bookingvehicles, setbookingVehicle] = useState([]);
    
  useEffect(() => {
    function getbooking() {
      axios
        .get("http://localhost:7070/api/bookingVehicle/")
        .then((res) => {
          setbookingVehicle(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getbooking();
  }, []);
  
  const filteredData = bookingvehicles.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      ` ${data.date} ${data.vin} ${data.pick} ${data.drop}`.toLowerCase();
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
     
        <div className={styless.tablearea__content} >
              <table>
                <tr>

                  <th>Delivery Location</th>
                  <th>Delivery Date</th>
                  <th>Return Location</th>
                  <th>Distance</th>
                  <th>Price</th>
                </tr>
                {filteredData.map((data) => (
                  <tr key={data._id}>
                    <td>{data.deliveryLocation}</td>
                    <td>{data.deliveryDate.split("T")[0]}</td>
                    <td>{data.returnLocation}</td>
                    <td>{data.distance}</td>
                    <td>Rs.{data.amount}</td>
                  </tr>
                ))}
              </table>
            </div>
      </div>
    </div>
  );
};

export default BookingReport;