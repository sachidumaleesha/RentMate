import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import axios from "axios";
import Swal from 'sweetalert2'

import Sidebar from "../../../../components/com.landlord/sidebar/Sidebar";
import styles from "../../../../components/com.style/contentArea.module.css";
import istyle from "../AddListing/addNewProperty.module.css";

const UpdateListing = () => {
  const items = [
    { label: "Listing", url: "/landlord" },
    { label: "Update Listing", url: "/landlord/listings/update-listing" },
  ];
  const home = { icon: "pi pi-th-large", url: "/landlord" };

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;

  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    beds: "",
    rooms: "",
    baths: "",
    price: "",
    type: "",
    description: "",
    mapLink: "",
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7070/api/manageListings/${id}`
        );
        setUserDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const {
      name,
      address,
      rooms,
      beds,
      baths,
      price,
      type,
      description,
      mapLink,
    } = userDetails;

    if (
      name.trim() === "" ||
      address.trim() === "" ||
      rooms === "" ||
      isNaN(Number(rooms)) ||
      Number(rooms) < 0 ||
      beds === "" ||
      isNaN(Number(beds)) ||
      Number(beds) < 0 ||
      baths === "" ||
      isNaN(Number(baths)) ||
      Number(baths) < 0 ||
      description.trim() === "" ||
      mapLink.trim() === ""
    ) {
      setError(true);
      return;
    }

    Swal.fire(
      'Success',
      'User Updated Successfully',
      'success'
    );
    navigate("/landlord/listings");
    try {
      await axios.put(
        `http://localhost:7070/api/manageListings/${id}`,
        userDetails
      );
    } catch (error) {
      console.log(error);
    }
  };

  //I want to seperate the numnber 3 by commas in the price field
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Update Listing</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <form style={{ padding: "0" }} onSubmit={sendData}>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-6">
              <label className="form-label">Property Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
              />
              {error && userDetails.name.trim() === "" && (
                <label className={istyle.DangerLabel}>
                  *Property Name can't be empty
                </label>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">Location:</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
              />
              {error && userDetails.address.trim() === "" && (
                <label className={istyle.DangerLabel}>
                  *Location Name can't be empty
                </label>
              )}
            </div>
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-4">
              <label className="form-label">Bedrooms:</label>
              <input
                type="number"
                className="form-control"
                name="rooms"
                min={1}
                step={1}
                value={userDetails.rooms}
                onChange={handleChange}
              />
              {error &&
                (userDetails.rooms === "" ||
                  isNaN(Number(userDetails.rooms)) ||
                  Number(userDetails.rooms) < 0) && (
                  <label className={istyle.DangerLabel}>
                    *Rooms Count must be a positive number
                  </label>
                )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Beds:</label>
              <input
                type="number"
                className="form-control"
                name="beds"
                min={1}
                step={1}
                value={userDetails.beds}
                onChange={handleChange}
              />
              {error &&
                (userDetails.beds === "" ||
                  isNaN(Number(userDetails.beds)) ||
                  Number(userDetails.beds) < 0) && (
                  <label className={istyle.DangerLabel}>
                    *Beds Count must be a positive number
                  </label>
                )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Baths:</label>
              <input
                type="number"
                className="form-control"
                name="baths"
                min={1}
                step={1}
                value={userDetails.baths}
                onChange={handleChange}
              />
              {error &&
                (userDetails.baths === "" ||
                  isNaN(Number(userDetails.baths)) ||
                  Number(userDetails.baths) < 0) && (
                  <label className={istyle.DangerLabel}>
                    *Baths Count must be a positive number
                  </label>
                )}
            </div>
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-6">
              <label className="form-label">Property Type:</label>
              <br />
              <select
                className="form-select"
                name="type"
                value={userDetails.type}
                style={{ width: "100%" }}
                onChange={handleChange}
                required
              >
                <option value="none" disabled hidden>
                  Choose...
                </option>
                <option value="Room">Room</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Price:</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={userDetails.price}
                min={1}
                step={1}
                onChange={handleChange}
              />
              {error &&
                (userDetails.price === "" ||
                  isNaN(Number(userDetails.price)) ||
                  Number(userDetails.price) <
                  (
                    <label className={istyle.DangerLabel}>
                      *Price must be a positive number
                    </label>
                  ))}
            </div>
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-12">
              <label className="form-label">Description:</label>
              <textarea
                className="form-control"
                rows="10"
                name="description"
                value={userDetails.description}
                onChange={handleChange}
              ></textarea>
              {error && userDetails.description.trim() === "" && (
                <label className={istyle.DangerLabel}>
                  *Description can't be empty
                </label>
              )}
            </div>
          </div>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-12">
              <label className="form-label">MapLink:</label>
              <textarea
                className="form-control"
                rows="10"
                name="mapLink"
                value={userDetails.mapLink}
                onChange={handleChange}
              ></textarea>
              {error && userDetails.mapLink.trim() === "" && (
                <label className={istyle.DangerLabel}>
                  *Map Link can't be empty
                </label>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              background: "#0B5ED7",
              color: "#fff",
              borderRadius: "5px",
              fontSize: "17px",
              marginBottom: "30px",
            }}
          >
            Update the Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateListing;
