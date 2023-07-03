import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../com.style/homepage.module.css";
import axios from "axios";

const Showrooms = () => {

  const [showrooms, setShowrooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7070/api/showroom/get/random')
      .then(res => {
        setShowrooms(res.data);
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
            <i class="bx bxs-store"></i>
            <span>Showrooms</span>
          </div>
          <div className={styles.viewall}>
            <Link to="/showrooms" className={styles.link}>
              View All
            </Link>
          </div>
        </div>

        <div className={styles.cards} >
          <div className={styles.row}>

            {showrooms.map((showroom) => (
              <>
                <div className={styles.column}>
                  <div className={styles.imageview}>
                    <Link to={`/showroom/${showroom._id}`} className={styles.link}>
                      <img src={showroom.image1} alt="" style={{ width: "340px", height: '250px' }} />
                    </Link>
                  </div>
                  <div className={styles.smallinfo}>
                    <Link to={`/showroom/${showroom._id}`} className={styles.link}>
                      <span>{showroom.name}</span>
                    </Link>
                    <div className={styles.location}>{showroom.city}</div>
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

export default Showrooms;
