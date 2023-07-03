import React, { useRef, useState } from "react";
import Sidebar from "../../../components/com.landlord/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import istyles from "./landlordRevenue.module.css";
import ReactToPrint from 'react-to-print';
import { BreadCrumb } from "primereact/breadcrumb";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

const LandlordRevenue = () => {
  const items = [{ label: "revenue", url: "/landlord/revenue" }];
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
      propertyType: "House",
      price: "5999",
      status: "booked",
    },
    {
      propertyName: "The Divine Villa Sachidu",
      customerName: "Sachidu",
      contactNumber: "0756598143",
      address: "Gampaha",
      propertyType: "Room",
      price: "4999",
      status: "booked",
    },
    {
      propertyName: "The Divine Villa Mallesha",
      customerName: "Mallesha",
      contactNumber: "0716598143",
      address: "Kaluthara",
      propertyType: "Apartment",
      price: "10999",
      status: "booked",
    },
    {
      propertyName: "The Divine Villa Kasun",
      customerName: "Kasun",
      contactNumber: "0725498143",
      address: "Galle",
      propertyType: "House",
      price: "8999",
      status: "booked",
    },
    {
      propertyName: "The Divine Villa Chamara",
      customerName: "Chamara",
      contactNumber: "0778598143",
      address: "Kandy",
      propertyType: "Apartment",
      price: "499",
      status: "booked",
    },
    {
      propertyName: "The Divine Villa Supun",
      customerName: "Supun",
      contactNumber: "0777598143",
      address: "NuwaraEliya",
      propertyType: "House",
      price: "999",
      status: "booked",
    },
    {
      propertyName: "The Divine Villa Shehan",
      customerName: "Shehan",
      contactNumber: "0718998143",
      address: "Mathara",
      propertyType: "Room",
      price: "1499",
      status: "booked",
    },
  ].filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.propertyName} ${data.customerName} ${data.contactNumber} ${data.address} ${data.propertyType} ${data.price}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  return (
    <div>
      <Sidebar />
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
            <div className="landlord__revenuCards">
              <div class="grid">
                <div class="col">
                  <Card title="Homes">
                    <p className="m-0">$499</p>
                  </Card>
                </div>
                <div class="col">
                  <Card title="Rooms">
                    <p className="m-0">$499</p>
                  </Card>
                </div>
                <div class="col">
                  <Card title="Apartments">
                    <p className="m-0">$499</p>
                  </Card>
                </div>
                <div class="col">
                  <Card title="Total Revenue">
                    <p className="m-0">$499</p>
                  </Card>
                </div>
              </div>
            </div>

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
                  <th>Property Type</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
                {filteredData.map((data) => (
                  <tr>
                    <td>{PropertyName(data.propertyName)}</td>
                    <td>{CustomerName(data.customerName)}</td>
                    <td>{data.contactNumber}</td>
                    <td>{data.address}</td>
                    <td>{data.propertyType}</td>
                    <td>${data.price}</td>
                    <td>
                      <Tag
                        className={istyles.status__btn}
                        icon="pi pi-check"
                        severity="success"
                        value="Booked"
                      />
                    </td>
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

export default LandlordRevenue;
