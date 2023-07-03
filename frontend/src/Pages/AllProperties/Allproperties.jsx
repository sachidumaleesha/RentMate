import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./allProperties.module.css";
import { Dropdown } from "primereact/dropdown";
import { Link } from "react-router-dom";

const Allproperties = () => {
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
          <div className={styles.service__name}>All Properties</div>
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
            <div class="grid">
              <div class="col-3">
                <Link to="/property">
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=1200" alt="card" style={{width:'340px', height:'250px'}}/>
                </Link>
                <div className={styles.smallinfo__show}>
                  <Link to="/property" className={styles.link}>
                    <div>{ListingName("Centre place Graslin - Private room La Cambronne")}</div>
                  </Link>
                  <div>$499</div>
                </div>
              </div>
              <div class="col-3">
                <Link to="/property">
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-6354436/original/bf9457a9-5093-4999-ba1f-35b38a0146f5.jpeg?im_w=720" alt="card" style={{width:'340px', height:'250px'}}/>
                </Link>
                <div className={styles.smallinfo__show}>
                  <Link to="/property" className={styles.link}>
                    <div>{ListingName("Double room in lovely apartment")}</div>
                  </Link>
                  <div>$299</div>
                </div>
              </div>
              <div class="col-3">
                <Link to="/property">
                  <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-714258423682866070/original/960755ad-ce79-4606-8f17-7c2d6c64fe41.jpg?im_w=720" alt="card" style={{width:'340px', height:'250px'}}/>
                </Link>
                <div className={styles.smallinfo__show}>
                  <Link to="/property" className={styles.link}>
                    <div>{ListingName("Private Garden, Charming, Quiet")}</div>
                  </Link>
                  <div>$799</div>
                </div>
              </div>
              <div class="col-3">
                <Link to="/property">
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-814937613380365669/original/7ee4b2be-ec19-4f57-bf2d-fe459b3b79cb.jpeg?im_w=720" alt="card" style={{width:'340px', height:'250px'}}/>
                </Link>
                <div className={styles.smallinfo__show}>
                  <Link to="/property" className={styles.link}>
                    <div>{ListingName("Private suite in charming house close to lake/train station")}</div>
                  </Link>
                  <div>$1599</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row__datacards}>
            <div class="grid">
              <div class="col-3">
                <Link to="/property">
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-761521121343082881/original/d334c373-bf21-4fce-aff6-0dc085f7bd28.jpeg?im_w=720" alt="card" style={{width:'340px', height:'250px'}}/>
                </Link>
                <div className={styles.smallinfo__show}>
                  <Link to="/property" className={styles.link}>
                    <div>{ListingName("Beautiful friendly family home")}</div>
                  </Link>
                  <div>$2599</div>
                </div>
              </div>
              <div class="col-3">
                <Link to="/property">
                  <img src="https://a0.muscache.com/im/pictures/c238f6c3-e3d8-44c4-b529-9fabce2004d4.jpg?im_w=720" alt="card" style={{width:'340px', height:'250px'}}/>
                </Link>
                <div className={styles.smallinfo__show}>
                  <Link to="/property" className={styles.link}>
                    <div>{ListingName("Twin room in Historic Georgian Home")}</div>
                  </Link>
                  <div>$239</div>
                </div>
              </div>
              <div class="col-3">
                <Link to="/property">
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-42654284/original/c87c0f17-3159-4619-b408-2a368618d7a9.jpeg?im_w=720" alt="card" style={{width:'340px', height:'250px'}}/>
                </Link>
                <div className={styles.smallinfo__show}>
                  <Link to="/property" className={styles.link}>
                    <div>{ListingName("Property Name")}</div>
                  </Link>
                  <div>$299</div>
                </div>
              </div>
              <div class="col-3">
                <Link to="/property">
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51733196/original/c32311bf-d607-4244-a871-8d8fe23be181.jpeg?im_w=720" alt="card" style={{width:'340px', height:'250px'}}/>
                </Link>
                <div className={styles.smallinfo__show}>
                  <Link to="/property" className={styles.link}>
                    <div>{ListingName("Luxury room in Ópera")}</div>
                  </Link>
                  <div>$599</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Allproperties;
