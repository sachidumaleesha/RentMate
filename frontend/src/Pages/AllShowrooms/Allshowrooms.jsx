import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import styles from './allShowrooms.module.css'
import { Dropdown } from "primereact/dropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import styless from '../../Styles/general.module.css'

const Allshowrooms = () => {

  const [showrooms, setShowrooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7070/api/showroom/')
      .then(res => {
        setShowrooms(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
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
          <div className={styles.service__name}>All Showrooms</div>
          <div className={styles.filter__btn}>
            {/* <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              showClear
              placeholder="Select Property Type"
              className="w-full md:w-14rem"
            /> */}
          </div>
        </div>
        <div className={styles.all__datacards}>

          <div className={styles.row__datacards}>

            <div className={styless.CardSet}>

              {showrooms.map((showroom) => (
                <>
                  <div className={styles.column}>
                    <div className={styles.imageview}>
                      <Link to={`/showroom/${showroom._id}`} className={styles.link}>
                        <img src={showroom.image1} alt="" style={{ width: "320px", height: '280px', padding: '10px', borderRadius: '10px' }} />
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
      <Footer />
    </div>
  )
}

export default Allshowrooms