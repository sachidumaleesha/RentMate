import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/com.mainDashboard/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import styless from "./maindashboard.module.css";
import axios from 'axios'
import { Chart } from 'primereact/chart';

const MainDashboard = () => {
  const items = [{ label: "Dashboard", url: "/siteowner" }];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };

  const [users, setUsers] = useState([])
  const [blog, setBlog] = useState([])
  const [property, setProperty] = useState([])
  const [vehicle, setVehicle] = useState([])
  const [showroom, setShowroom] = useState([])
  const [lowyer, setLowyer] = useState([])
  const [userNo, setUserNo] = useState(0)

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [reservation, setReservation] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:7070/api/userr/")
        .then((response) => {
          setUsers(response.data)
          setUserNo(response.data.users.length)
        }
        )
        .catch((err) => { console.log(err) })

      console.log(users);

      function getReservationDetails(){
        axios.get("http://localhost:7070/reservation/").then((res) =>{
          setReservation(res.data)
        }).catch((err) => {
          alert(err.message);
        })
      }

      getReservationDetails();
    }

    const fetchData1 = async () => {
      await axios.get("http://localhost:7070/api/blog/")
        .then((response) => setBlog(response.data))
        .catch((err) => { console.log(err) })

      //console.log(blog);
    }

    const fetchData3 = async () => {
      await axios.get("http://localhost:7070/api/manageListings/")
        .then((response) => setProperty(response.data))
        .catch((err) => { console.log(err) })

      //console.log(property);
    }
    const fetchData4 = async () => {
      await axios.get("http://localhost:7070/api/vehi/")
        .then((response) => setVehicle(response.data))
        .catch((err) => { console.log(err) })

      //console.log(vehicle);
    }
    const fetchData5 = async () => {
      await axios.get("http://localhost:7070/api/Showroom/")
        .then((response) => setShowroom(response.data))
        .catch((err) => { console.log(err) })

      //console.log(vehicle);
    }

    const fetchData6 = async () => {
      await axios.get("http://localhost:7070/api/lawyer/")
        .then((response) => setLowyer(response.data))
        .catch((err) => { console.log(err) })

      //console.log(vehicle);
    }
    fetchData()
    fetchData1()
    fetchData3()
    fetchData4()
    fetchData5()
    fetchData6()
  }, []);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ['Reguler User', 'Landloard', 'Vehicle Owner', 'Showroom Owner', 'Lowyer'],
      datasets: [
        {
          data: [40, 25, 7, 12, 6],
          backgroundColor: [
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--red-500'),
            documentStyle.getPropertyValue('--black-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--red-500'),
            documentStyle.getPropertyValue('--black-500')
          ]
        }
      ]
    }
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true
          }
        }
      }
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  let totalIncome = 0;
    reservation.forEach((data) => {
    totalIncome += data.amount;
    });

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
            👋 Welcome Site Owner, You're Back Again!
          </div>
          <div className={styles.contentbody}>
            <div className={styless.featured}>
              <div className={styless.featuredItem}>
                <div className={styless.featurediconnn}><i class='bx bxs-user'></i></div>
                <span className={styless.featuredTitle}>Total Active Users
                </span>


                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>{userNo}</span>
                 

                </div>
                
              </div>

              <div className={styless.featuredItem1}>
                <div className={styless.featurediconnn}><i class='bx bx-home'></i></div>
                <span className={styless.featuredTitle}>Total Property Listings</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>{property.length}</span>
                 
                </div>
                
              </div>
              
              <div className={styless.featuredItem}>
                <div className={styless.featurediconnn}><i class='bx bxl-blogger' ></i></div>
                <span className={styless.featuredTitle}>Total Blog Post</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>{blog.length}</span>
                  
                </div>
                
              </div>

              <div className={styless.featuredItem}>
                <div className={styless.featurediconnn}><i class='bx bxs-user-detail'></i></div>
                <span className={styless.featuredTitle}>Total Lowyers</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>{lowyer.length}</span>
                  
                </div>
                
              </div>
            </div>

            <div className={styless.featured}>
              
              <div className={styless.featuredItem1}>
                <div className={styless.featurediconnn}><i class='bx bx-car'></i>
                </div>
                <span className={styless.featuredTitle}>Total Vehicles</span>

                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>{vehicle.length}</span>
                  
                </div>
                
              </div>
              <div className={styless.featuredItem1}>
                <div className={styless.featurediconnn}><i class='bx bxs-home-smile'></i></div>
                <span className={styless.featuredTitle}>Total Showroom</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>{showroom.length}</span>
                  
                </div>
                
              </div>

              <div className={styless.featuredItem}>
                <div className={styless.featurediconnn}><i class='bx bx-dollar-circle' ></i></div>
                <span className={styless.featuredTitle}>Total Revenue</span>
                <div className={styless.featuredMoneyContainer}>
                  <span className={styless.featuredMoney}>$ {totalIncome}</span>
                  {/* <span className={styless.featuredMoneyRate}>
                    -1.4 <div className={styless.featuredIcon_negative}></div>
                    <i class="bx bx-up-arrow-alt"></i>
                  </span> */}
                  
                  
                </div>
               
              </div>



              
            </div>
            <div className={styless.roww12}>
              <div className={styless.colll12} >
              <Chart type="pie" data={chartData} options={chartOptions} className="w-30rem md:w-30rem" />
              </div>
              <div className={styless.colll12} >
              <div className={styless.titlllle}>
                    Total revenue
                  </div>
                  <Chart type="line" data={chartData} options={chartOptions} />
              </div>
            </div>
            {/* <div className="card">
              <Chart type="pie" data={chartData} options={chartOptions} className="w-30rem md:w-30rem" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
