
import React, { useRef, useState, useEffect } from "react";
import Sidebar from "../../../components/com.vehicleOwner/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import styless from "./booking.module.css";
import ReactToPrint from "react-to-print";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Image } from "primereact/image";
import { Tag } from "primereact/tag";
// import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog"; // For confirmDialog method
import axios from "axios";
import BookingReport from "../../../components/com.vehicleOwner/ReportVehicleBooking/BookingReport";



const VehicleBookings = () => {
  const componentRef = useRef();

  const items = [
    { label: "Bookings", url: "/vehicleOwner/bookings" }
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
      ` ${data.date} ${data.vin} ${data.pick} ${data.drop}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  // Delete Function Call
  const deletebooking = (id) => {
    axios
      .delete(`http://localhost:7070/api/bookingVehicle/${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      });
  };


  return (
    <div>
      <Sidebar />
      <div ref={componentRef}>
        <BookingReport/>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>Bookings</div>
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

            <div className={styless.tablearea__content} >
              <table>
                <tr>

                  <th>Delivery Location</th>
                  <th>Delivery Date</th>
                  <th>Return Location</th>
                  <th>Distance</th>
                  <th>Price</th>
                </tr>
                {filteredData.map((data) => (
                  <tr key={data._id}>
                    <td>{data.deliveryLocation}</td>
                    <td>{data.deliveryDate.split("T")[0]}</td>
                    <td>{data.returnLocation}</td>
                    <td>{data.distance}</td>
                    <td>Rs.{data.amount}</td>
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

export default VehicleBookings;
