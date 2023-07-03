import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../com.style/homepage.module.css";
import axios from "axios";

const Lawyers = () => {

  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7070/api/lawyer/get/random')
      .then(res => {
        setLawyers(res.data);
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
            <i class="bx bxs-id-card"></i>
            <span>Lawyers</span>
          </div>
          <div className={styles.viewall}>
            <Link to="/lawyers" className={styles.link}>
              View All
            </Link>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.row}>

            {lawyers.map((lawyer) => (
              <>
                <div className={styles.column}>
                  <div className={styles.imageview}>
                    <Link to={`/view-lawyer/${lawyer._id}`} className={styles.link}>
                      <img src={lawyer.image} alt="" style={{ width: "340px", height: '300px' }} />
                    </Link>
                  </div>
                  <div className={styles.smallinfo}>
                    <Link to={`/view-lawyer/${lawyer._id}`} className={styles.link}>
                      <span>{lawyer.name} </span>
                    </Link>
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

export default Lawyers;
