import React, {useRef, useState, useEffect } from "react";
import styles from "./supportReport.module.css";
import styless from '../../../Pages/Main_Dashboard/SupportCenter/SupportCenterDash.jsx'
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

const SupportReport = () => {
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
    if (status === "Solved") {
      return (
        <Tag
          className={styless.status__btn}
          icon="pi pi-check"
          severity="success"
          value="Solved"
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
  
    const [problems, setProblems] = useState([]);
  
    useEffect(() => {
      function getProblems() {
        axios
          .get("http://localhost:7070/api/problems/")
          .then((res) => {
            setProblems(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getProblems();
    }, []);
  
    const filteredData = problems.filter((data) => {
      const searchTerms = searchTerm.toLowerCase().split(" ");
      const dataInfo =
        `${data.name} ${data.email} ${data.contactNumber} ${data.date} ${data.problemtype} ${data.problem} ${data.status}`.toLowerCase();
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
                    <th>Contact Number</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Problem Description</th>
                    <th>Status</th>
                   
                  </tr>
                  {filteredData.map((data) => (
                    <tr key={data.id}>
                      <td>{data.name}</td>
                     <td>{data.email}</td>
                      <td>{data.contactNumber}</td>
                      <td>{data.date}</td>
                      <td>{data.problemtype}</td>
                      <td>{data.problem}</td>
                      <td>{pickStatus(data.status)}</td>
                    
                    </tr>
                  ))}
                </table>
              </div>
        </div>
      </div>
    );
  };

export default SupportReport