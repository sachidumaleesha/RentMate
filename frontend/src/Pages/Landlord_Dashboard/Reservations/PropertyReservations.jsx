import React, { useRef, useState } from "react";
import Sidebar from "../../../components/com.landlord/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import istyles from "./PropertyReservation.module.css";
import ReactToPrint from "react-to-print";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";

const PropertyReservations = () => {
  const items = [{ label: "reservations", url: "/landlord/reservations" }];
  const home = { icon: "pi pi-th-large", url: "/landlord" };

  const componentRef = useRef();

  const PropertyName = (text) => {
    return text.substring(0, 25) + " ...";
  };

  const CustomerName = (text) => {
    return text.substring(0, 15) + " ...";
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = [
    {
      propertyName: "The Divine Villa Diwan",
      customerName: "Diwan",
      contactNumber: "0766598143",
      address: "Colombo",
      bookedDate: "08-02-2023",
      endDate: "08-02-2024",
      duration: "12 Months",
    },
    {
      propertyName: "The Divine Villa Sachidu",
      customerName: "Sachidu",
      contactNumber: "0756598143",
      address: "Gampaha",
      bookedDate: "10-02-2022",
      endDate: "08-02-2024",
      duration: "24 Months",
    },
    {
      propertyName: "The Divine Villa Mallesha",
      customerName: "Mallesha",
      contactNumber: "0716598143",
      address: "Kaluthara",
      bookedDate: "07-02-2020",
      endDate: "08-02-2024",
      duration: "06 Months",
    },
    {
      propertyName: "The Divine Villa Kasun",
      customerName: "Kasun",
      contactNumber: "0725498143",
      address: "Galle",
      bookedDate: "05-01-2023",
      endDate: "08-02-2024",
      duration: "06 Months",
    },
    {
      propertyName: "The Divine Villa Chamara",
      customerName: "Chamara",
      contactNumber: "0778598143",
      address: "Kandy",
      bookedDate: "19-02-2019",
      endDate: "08-02-2024",
      duration: "12 Months",
    },
    {
      propertyName: "The Divine Villa Supun",
      customerName: "Supun",
      contactNumber: "0777598143",
      address: "NuwaraEliya",
      bookedDate: "18-02-2019",
      endDate: "08-02-2024",
      duration: "06 Months",
    },
    {
      propertyName: "The Divine Villa Shehan",
      customerName: "Shehan",
      contactNumber: "0718998143",
      address: "Mathara",
      bookedDate: "12-04-2023",
      endDate: "08-02-2024",
      duration: "36 Months",
    },
  ].filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.propertyName} ${data.customerName} ${data.contactNumber} ${data.address} ${data.bookedDate} ${data.endDate} ${data.duration}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Reservations</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>
            <div className={istyles.top__content}>
              <div className={istyles.left__side}>
                <input
                  type="search"
                  placeholder="Search..."
                  className="form-control search-input"
                  data-table="dataTable-list"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className={istyles.right__side}>
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

            <div className={istyles.tablearea__content} ref={componentRef}>
              <table>
                <tr>
                  <th>Property Name</th>
                  <th>Cu. Name</th>
                  <th>Cu. Number</th>
                  <th>Address</th>
                  <th>Booked Date</th>
                  <th>End Date</th>
                  <th>Duration Period</th>
                </tr>
                {filteredData.map((data) => (
                  <tr>
                    <td>{PropertyName(data.propertyName)}</td>
                    <td>{CustomerName(data.customerName)}</td>
                    <td>{data.contactNumber}</td>
                    <td>{data.address}</td>
                    <td>{data.bookedDate}</td>
                    <td>{data.endDate}</td>
                    <td>{data.duration}</td>
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

export default PropertyReservations;
