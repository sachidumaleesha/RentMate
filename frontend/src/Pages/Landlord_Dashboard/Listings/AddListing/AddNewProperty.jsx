import React, { useState, useEffect } from "react";
import Sidebar from "../../../../components/com.landlord/sidebar/Sidebar";
import styles from "../../../../components/com.style/contentArea.module.css";
import istyle from "./addNewProperty.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import axios from "axios";
import Swal from 'sweetalert2'

const AddNewProperty = () => {
  const items = [
    { label: "Listings", url: "/landlord/listings" },
    { label: "Add New Listing", url: "/landlord/listings/add-listing" },
  ];
  const home = { icon: "pi pi-th-large", url: "/landlord" };

  //get user id from local storage
  const userid = localStorage.getItem("id");
  

  const [name, setProperty] = useState("");
  const [address, setLocation] = useState("");
  const [rooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [price, setPrice] = useState("");
  const [type, setPropertyType] = useState("");
  const [description, setDescription] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [images, setImages] = useState([]);

  const [error, setError] = useState(false);

  function sendData(event) {
    event.preventDefault();
    if (
      name.length === 0 ||
      address.length === 0 ||
      rooms.length === 0 ||
      rooms.length < 0 ||
      beds.length === 0 ||
      beds.length < 0 ||
      baths.length === 0 ||
      baths.length < 0 ||
      description.length === 0 ||
      mapLink.length === 0
    ) {
      setError(true);
      return;
    } else {
      const newListing = {
        userid : userid,
        name,
        address,
        rooms,
        beds,
        baths,
        price,
        type,
        description,
        mapLink,
      };
      console.log(newListing);
      axios
        .post("http://localhost:7070/api/manageListings/add", newListing)
        .then((response) => {
          Swal.fire(
            'Success',
            'Successfully Added New Listing',
            'success'
          ).then(function () {
            window.location.href = "/landlord/listings";
          })
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Add New Listing</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <form style={{ padding: "0" }} onSubmit={sendData}>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div class="col-md-6">
              <label class="form-label">Property Name:</label>
              <input
                type="text"
                class="form-control"
                onChange={(event) => {
                  setProperty(event.target.value);
                }}
              />
              {error && name.length <= 0 ? (
                <label className={istyle.DangerLabel}>
                  *Property Name can't be Empty
                </label>
              ) : (
                ""
              )}
            </div>
            <div class="col-md-6">
              <label class="form-label">Location:</label>
              <input
                type="text"
                class="form-control"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
              {error && address.length <= 0 ? (
                <label className={istyle.DangerLabel}>
                  *Location Name can't be Empty
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div class="col-md-4">
              <label class="form-label">Bedrooms:</label>
              <input
                type="number"
                class="form-control"
                min={1}
                step={1}
                onChange={(event) => {
                  if (event.target.value < 0) {
                    setBedrooms(1);
                  } else {
                    setBedrooms(event.target.value);
                  }
                }}
              />
              {error && rooms.length <= 0 ? (
                <label className={istyle.DangerLabel}>
                  *Rooms Count can't be Empty
                </label>
              ) : (
                ""
              )}
            </div>
            <div class="col-md-4">
              <label class="form-label">Beds:</label>
              <input
                type="number"
                class="form-control"
                min={1}
                step={1}
                onChange={(event) => {
                  if (event.target.value < 0) {
                    setBeds(1);
                  } else {
                    setBeds(event.target.value);
                  }
                }}
              />
              {error && beds.length <= 0 ? (
                <label className={istyle.DangerLabel}>
                  *Beds Count can't be Empty
                </label>
              ) : (
                ""
              )}
            </div>
            <div class="col-md-4">
              <label class="form-label">Baths:</label>
              <input
                type="number"
                class="form-control"
                min={1}
                step={1}
                onChange={(event) => {
                  if (event.target.value < 0) {
                    setBaths(1);
                  } else {
                    setBaths(event.target.value);
                  }
                }}
              />
              {error && baths.length <= 0 ? (
                <label className={istyle.DangerLabel}>
                  *Baths count can't be Empty
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div class="col-md-6">
              <label class="form-label">Property Type:</label>
              <br />
              <select
                class="form-select"
                name="Property Type"
                style={{ width: "100%" }}
                onChange={(event) => {
                  setPropertyType(event.target.value);
                }}
                required
              >
                <option value="none" selected disabled hidden>
                  Choose...
                </option>
                <option value="Room">Room</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label">Price:</label>
              <input
                type="number"
                class="form-control"
                min={1}
                step={1}
                onChange={(event) => {
                  if (event.target.value < 0) {
                    setPrice(1);
                  } else {
                    setPrice(event.target.value);
                  }
                }}
              />
              {error && price.length <= 0 ? (
                <label className={istyle.DangerLabel}>
                  *Price can't be Empty
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div class="col-md-12">
              <label class="form-label">Description:</label>
              <textarea
                class="form-control"
                rows="10"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></textarea>
              {error && description.length <= 0 ? (
                <label className={istyle.DangerLabel}>
                  *Description can't be Empty
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div class="col-md-12">
              <label class="form-label">MapLink:</label>
              <textarea
                class="form-control"
                rows="10"
                onChange={(event) => {
                  setMapLink(event.target.value);
                }}
              ></textarea>
              {error && mapLink.length <= 0 ? (
                <label className={istyle.DangerLabel}>
                  *Map Link can't be Empty
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            style={{
              background: "#0B5ED7",
              color: "#fff",
              borderRadius: "5px",
              fontSize: "17px",
              marginBottom: "30px",
            }}
          >
            Add New Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewProperty;
