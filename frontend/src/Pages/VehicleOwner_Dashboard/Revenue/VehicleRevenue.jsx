
import React, { useRef, useState, useEffect } from "react";
import Sidebar from "../../../components/com.vehicleOwner/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import styless from './vehiclerevenue.module.css';
import ReactToPrint from "react-to-print";
import { Button } from "primereact/button";
import axios from "axios";
import RevenueReport from "../../../components/com.vehicleOwner/ReportRevenue/RevenueReport";


const VehicleRevenue = () => {
  const componentRef = useRef();
  const items = [
    { label: "Revenue", url: "/vehicleOwner/revenue" }
  ];
  const home = { icon: "pi pi-th-large", url: "/vehicleOwner" };


  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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

  const filteredData = bookingvehicles.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      ` ${data.vehicleID} ${data.distance} ${data.date}  ${data.amount}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  // Delete Function Call
  const deletebooking = (id) => {
    axios
      .delete(`http://localhost:7070/api/revenuVehicle/${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      });
  };


  return (
    <div>
      <Sidebar />
      <div ref={componentRef}>
         <RevenueReport /> 
      </div>
      <div className={styles.content}>
        <div className={styles.text}>Revenue</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>


            <div className={styless.top__content}>
              <div className={styless.left__side}>
                <input
                  type="search"
                  placeholder="Search..."
                  className="form-control search-input"
                  data-table="dataTable-list"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>


              <div className={styless.right__side}>
                <ReactToPrint
                  trigger={() => (
                    <Button variant="contained" color="primary">
                      Print
                    </Button>
                  )}
                  content={() => componentRef.current}
                />
              </div>
            </div>

            <div className={styless.tablearea__content} >
              <table>
                <tr>

                  <th>VIN</th>
                  <th>Distance</th>
                  <th>Date</th>
                  <th>Price</th>
                </tr>
                {filteredData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.vehicleID}</td>
                    <td>{data.distance} km</td>
                    <td>{data.deliveryDate.split("T")[0]}</td>
                    <td>Rs. {data.amount}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default VehicleRevenue;