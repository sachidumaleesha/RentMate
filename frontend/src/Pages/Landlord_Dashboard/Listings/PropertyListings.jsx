import React, { useRef, useState, useEffect } from "react";
import Sidebar from "../../../components/com.landlord/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import istyles from "./propertyListings.module.css";
import ReactToPrint from "react-to-print";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Tag } from "primereact/tag";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ListingReport from "../../../components/com.landlord/Reports/ListingReport";
import Swal from 'sweetalert2'

const PropertyListings = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const items = [{ label: "Listings", url: "/landlord/listings" }];
  const home = { icon: "pi pi-th-large", url: "/landlord" };

  const componentRef = useRef();

  const ListingName = (text) => {
    return text.substring(0, 20) + " ...";
  };

  const LocationText = (text) => {
    return text.substring(0, 15) + " ...";
  };

  const pickStatus = (status) => {
    if (status.toLowerCase() === "active") {
      return (
        <Tag
          className={istyles.status__btn}
          icon="pi pi-check"
          severity="success"
          value="Active"
        />
      );
    } else {
      return (
        <Tag
          className={istyles.status__btn}
          icon="pi pi-info-circle"
          severity="warning"
          value="Pending"
        ></Tag>
      );
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [listings, setListings] = useState([]);

  useEffect(() => {
    function getListings() {
      axios
        .get("http://localhost:7070/api/manageListings/")
        .then((res) => {
          setListings(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getListings();
  }, []);
  const filteredData = listings.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.name} ${data.address} ${data.rooms} ${data.beds} ${data.baths} ${data.price} ${data.type} ${data.description} ${data.status}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  //Update Listing
  const update = (id) => {
    navigate("/landlord/listings/update-listing", { state: { id } });
  };

  //Delete Listing
  const deleteListing = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:7070/api/manageListings/${id}`)
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });
        Swal.fire(
          'Deleted!',
          'Your listing has been deleted.',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            window.location.reload(false);
          }
        })
      }
    })
  };

  return (
    <div>
      <div ref={componentRef}>
        <ListingReport />
      </div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Listings</div>
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

                <Link to="/landlord/listings/add-listing">
                  <Button
                    label="Create Listing"
                    severity="secondary"
                    raised
                    className={istyles.function_btn}
                  />
                </Link>
              </div>
            </div>
            <div className={istyles.tablearea__content}>
              <table>
                <tr>
                  <th>Name</th>
                  {/* <th>Image</th> */}
                  <th>Location</th>
                  <th>Bedrooms</th>
                  <th>Beds</th>
                  <th>Baths</th>
                  <th>Status</th>
                  <th>Operation</th>
                </tr>
                {filteredData.map((data) => (
                  <tr key={data.id}>
                    <td>{ListingName(data.name)}</td>
                    {/* <td>
                      {data.images.length > 0 && (
                        <Image
                          src={data.images[0]}
                          zoomSrc={data.images[0]}
                          alt="Image"
                          width="70"
                          height="50"
                          preview
                        />
                      )}
                    </td> */}
                    <td>{LocationText(data.address)}</td>
                    <td>{data.rooms}</td>
                    <td>{data.beds}</td>
                    <td>{data.baths}</td>
                    <td>{pickStatus(data.status)}</td>
                    <td>
                      <Button
                        label="Edit"
                        severity="success"
                        onClick={() => update(data._id)}
                      />
                      <Button
                        label="Delete"
                        severity="danger"
                        raised
                        onClick={() => deleteListing(data._id)}
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

export default PropertyListings;
