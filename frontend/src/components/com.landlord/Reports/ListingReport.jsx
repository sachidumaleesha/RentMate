import React, { useRef, useState, useEffect } from "react";
import styles from "./listingReport.module.css";
import istyles from '../../../Pages/Landlord_Dashboard/Listings/propertyListings.module.css'
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

const ListingReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const ListingName = (text) => {
    return text.substring(0, 20) + " ...";
  };

  const LocationText = (text) => {
    return text.substring(0, 15) + " ...";
  };

  const pickStatus = (status) => {
    if (status.toLowerCase() === "active") {
      return (
        <Tag
          className={istyles.status__btn}
          icon="pi pi-check"
          severity="success"
          value="Active"
        />
      );
    } else {
      return (
        <Tag
          className={istyles.status__btn}
          icon="pi pi-info-circle"
          severity="warning"
          value="Pending"
        ></Tag>
      );
    }
  };

  const [listings, setListings] = useState([]);
  useEffect(() => {
    function getListings() {
      axios
        .get("http://localhost:7070/api/manageListings/")
        .then((res) => {
          setListings(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getListings();
  }, []);
  const filteredData = listings.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.name} ${data.address} ${data.rooms} ${data.beds} ${data.baths} ${data.price} ${data.type} ${data.description} ${data.status}`.toLowerCase();
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
        <h4 style={{textAlign:'center', justifyContent:'center'}}><ul>All Properties Report</ul></h4>
        <div className={istyles.tablearea__content}>
          <table>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Bedrooms</th>
              <th>Beds</th>
              <th>Baths</th>
              <th>Status</th>
            </tr>
            {filteredData.map((data) => (
              <tr key={data.id}>
                <td>{ListingName(data.name)}</td>
                <td>{LocationText(data.address)}</td>
                <td>{data.rooms}</td>
                <td>{data.beds}</td>
                <td>{data.baths}</td>
                <td>{pickStatus(data.status)}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListingReport;
