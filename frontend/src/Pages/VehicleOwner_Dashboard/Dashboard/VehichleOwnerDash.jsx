// import React from "react";
import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/com.vehicleOwner/sidebar/Sidebar';
import styles from "../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import styless from './vehicleownerdash.module.css';
import { Chart } from 'primereact/chart';
import axios from 'axios';

const VehichleOwnerDash = ({ type }) => {

  //start

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Revenue',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56, 70, 60]
        },
        {
          label: 'Cost',
          backgroundColor: documentStyle.getPropertyValue('--pink-500'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [28, 48, 40, 19, 86, 27, 30]
        }
      ]
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const [vehicle, setVehicle] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:7070/api/vehi/user/" + localStorage.getItem("id"))
        .then((response) => setVehicle(response.data))
        .catch((err) => { console.log(err) })
      console.log(vehicle);
    }
    fetchData()
  })

  const [bookingvehicles, setbookingVehicle] = useState([]);

  useEffect(() => {
    function getbooking() {
      axios
        .get("http://localhost:7070/api/bookingVehicle/")
        .then((res) => {
          setbookingVehicle(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getbooking();
  }, []);

  //get total revenue
  let totAmount = 0
  bookingvehicles.map((booking) => {
    totAmount = totAmount + Number(booking.amount)
  })

  //end
  const items = [
    { label: "Dashboard", url: "/vehicleOwner" }
  ];
  const home = { icon: "pi pi-th-large", url: "/vehicleOwner" };
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
          {/* <div className={styles.welcomemsg}>
             Welcome Nayani, You're Back Again!
          </div> */}
          <div className={styles.contentbody}>

            <div className={styless.featured}>
              <div className={styless.featuredItem}>
                <div className={styless.icon}>
                  <i class='bx bxs-dollar-circle'></i>
                </div>
                <span className={styless.featuredTitle}>Revanue</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>Rs. {totAmount.toFixed(2)}</span>
                  <span className={styless.featuredMoneyRate}>
                    -11.4 <div className={styless.featuredIcon_negative}></div>
                    <i class='bx bx-down-arrow-alt' ></i>
                  </span>
                </div>
                <span className={styless.featuredSub}>Compared to last month</span>
              </div>
              <div className={styless.featuredItem}>
                <div className={styless.icon}>
                  <i class='bx bx-line-chart-down'></i>
                </div>
                <span className={styless.featuredTitle}>Vehicles</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>{vehicle.length}</span>
                  <span className={styless.featuredMoneyRate}>
                    -1.4 <div className={styless.featuredIcon_negative}></div>
                    <i class='bx bx-up-arrow-alt' ></i>
                  </span>
                </div>
                <span className={styless.featuredSub}>Compared to last month</span>
              </div>
              <div className={styless.featuredItem}>
                <div className={styless.icon}>
                  <i class='bx bx-bar-chart-square'></i>
                </div>
                <span className={styless.featuredTitle}>Cost</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>Rs. {totAmount.toFixed(2) * 60 / 100}</span>
                  <span className={styless.featuredMoneyRate}>
                    +2.4 <div className={styless.featuredIcon}></div>
                    <i class='bx bx-up-arrow-alt' ></i>
                  </span>
                </div>
                <span className={styless.featuredSub}>Compared to last month</span>
              </div>
            </div>

            {/* start */}
            <div className="card">
              <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehichleOwnerDash;
