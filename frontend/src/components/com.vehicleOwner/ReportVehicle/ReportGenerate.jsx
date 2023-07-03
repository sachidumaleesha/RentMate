import React, { useRef, useState, useEffect } from "react";
import styles from "./reportgenerate.module.css";
import styless from '../../../Pages/VehicleOwner_Dashboard/Vehicles/Vehicles.jsx'
import { Button } from "primereact/button";
import { Image } from "primereact/image";
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

const ReportGenerate = () => {
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

  const [vehicles, setVehicle] = useState([]);
  useEffect(() => {
    function getVehicle() {
      axios
        .get("http://localhost:7070/api/vehi/")
        .then((res) => {
          setVehicle(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getVehicle();
  }, []);
  const filteredData = vehicles.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.name} ${data.email} ${data.contact} ${data.date} ${data.status} ${data.image} `.toLowerCase();
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
        <div className={styless.tablearea__content}>
        <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Date</th>
                <th>Status</th>
                <th>Image</th>
              </tr>
              {filteredData.map((data) => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                  <td>{data.date}</td>
                  <td>{pickStatus(data.status)}</td>
                   <td>
                    {data.image.length > 0 && (
                      <Image
                        src={data.image[0]}
                        zoomSrc={data.image[0]}
                        alt="Image"
                        width="70"
                        height="50"
                        preview
                      />
                    )}
                  </td> 
                </tr>
              ))}
            </table>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerate;