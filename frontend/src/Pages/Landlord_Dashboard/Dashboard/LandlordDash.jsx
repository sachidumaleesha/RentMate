import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/com.landlord/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import cstyles from "./landLordDash.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import { Card } from "primereact/card";
import ListingChart from "../../../components/com.landlord/Charts/ListingChart/ListingChart";
import LandlordRevenue from "../../../components/com.landlord/Charts/Revenue/LandlordRevenue";
import axios from "axios";

const LandlordDash = () => {
  const items = [{ label: "dashboard", url: "/landlord" }];
  const home = { icon: "pi pi-th-large", url: "/landlord" };

  const [users , setUsers] = useState([])
  const [Customer, setCustomer] = useState([])

  useEffect(()=>{
    const fetchData = async() => {
      await axios.get("http://localhost:7070/api/manageListings/")
      .then((response) => setUsers(response.data))
      .catch((err) => {console.log(err)})
      console.log(users);
    }

    fetchData()
  })

  useEffect(()=>{
    const fetchData = async() => {
      await axios.get("http://localhost:7070/reservation/")
      .then((response) => setCustomer(response.data))
      .catch((err) => {console.log(err)})
      console.log(Customer);
    }

    fetchData()
  })

  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Dashboard</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.welcomemsg}>
            👋 Welcome Diwan, You're Back Again!
          </div>
          <div className={styles.contentbody}>
            <div class="grid">
              <div class="col-3">
                <Card title="Total Listings">
                  <p className="m-0">{users.length}</p>
                </Card>
              </div>
              <div class="col-3">
                <Card title="Total Revenue">
                  <p className="m-0">$20199</p>
                </Card>
              </div>
              <div class="col-3">
                <Card title="Total Reservations">
                  <p className="m-0">{Customer.length}</p>
                </Card>
              </div>
              <div class="col-3">
                <Card title="Total Customers">
                  <p className="m-0">{Customer.length}</p>
                </Card>
              </div>
            </div>
            <div className={cstyles.data__charts}>
              <div class="grid">
                <div class="col-6">
                  <LandlordRevenue />
                </div>
                <div class="col-6">
                  <ListingChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordDash;
