import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../com.style/homepage.module.css";
import axios from "axios";

const Transports = () => {

  const [transports, setTransports] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7070/api/vehi/get/random')
      .then(res => {
        setTransports(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.navigation}>
          <div className={styles.servicename}>
            <i class="bx bxs-truck"></i>
            <span>Transports</span>
          </div>
          <div className={styles.viewall}>
            <Link to="/transports" className={styles.link}>
              View All
            </Link>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.row}>

            {transports.map((transport) => (
              <>
                <div className={styles.column}>
                  <div className={styles.imageview}>
                    <Link to={`/vehicle/${transport._id}`} className={styles.link}>
                      <img src={transport.image} alt="" style={{ width: "340px", height: '250px' }} />
                    </Link>
                  </div>
                  <div className={styles.smallinfo}>
                    <Link to={`/vehicle/${transport._id}`} className={styles.link}>
                      <span>{transport.name} </span>
                    </Link>
                    <div className={styles.price}>Rs. {transport.price}/Km</div>
                  </div>
                </div>
              </>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Transports;