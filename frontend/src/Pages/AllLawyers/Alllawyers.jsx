import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./AllLawyers.module.css";
import { Dropdown } from "primereact/dropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import styless from "../../Styles/general.module.css"
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const Alllawyers = () => {

  const [lawyers, setLawyers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:7070/api/lawyer/")
      .then((res) => {
        setLawyers(res.data);
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
  // const viewFunc = (id) => {
  //   navigate(`/view-lawyer`, { state: { id } })
  // }


  return (
    <div>
      <Navbar />
      <div className={styles.content__area__section}>
        <div className={styles.top__filter__row}>
          <div className={styles.service__name}>All Lawyers</div>

        </div>
        <div className={styles.all__datacards}>
          <div className={styless.CardSet}>

            {lawyers.map((lawyer) => (
              <>
                <div className={styles.column}>
                  <div className={styles.imageview}>
                    <Link to={`/view-lawyer/${lawyer._id}`} className={styles.link}>
                      <img src={lawyer.image} alt="" style={{ width: "320px", height: '280px', padding: '10px', borderRadius: '10px' }} />
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
      <Footer />
    </div>
  );
};

export default Alllawyers;
