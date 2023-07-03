import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./allTransports.module.css";
import { Dropdown } from "primereact/dropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import styless from '../../Styles/general.module.css';

const Alltransports = () => {

  const [transports, setTransports] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7070/api/vehi/")
      .then((res) => {
        setTransports(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "House", code: "house" },
    { name: "Rooms", code: "rooms" },
    { name: "Apartments", code: "apartments" },
  ];

  const ListingName = (text) => {
    return text.substring(0, 15) + " ...";
  };
  return (
    <div>
      <Navbar />
      <div className={styles.content__area__section}>
        <div className={styles.top__filter__row}>
          <div className={styles.service__name}>All Transports</div>
          <div className={styles.filter__btn}>
          </div>
        </div>
        <div className={styles.all__datacards}>
          <div className={styless.CardSet}>

            {transports.map((transport) => (
              <>
                <div className={styles.column}>
                  <div className={styles.imageview}>
                    <Link to={`/vehicle/${transport._id}`} className={styles.link}>
                      <img src={transport.image} alt="" style={{ width: "340px", height: '250px', padding: '10px' }} />
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
      <Footer />
    </div>
  );
};


export default Alltransports;
