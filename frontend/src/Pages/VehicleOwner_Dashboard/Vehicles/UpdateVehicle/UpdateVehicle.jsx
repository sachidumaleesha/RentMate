// import React from "react";
import React, { useState, useEffect } from "react";
import Sidebar from "../../../../components/com.vehicleOwner/sidebar/Sidebar";
import styles from "../../../../components/com.style/contentArea.module.css";
import styless from './updatevehicle.module.css'
import { BreadCrumb } from "primereact/breadcrumb";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useLocation } from "react-router-dom";


const UpdateVehicle = () => {
  //start

  const [vehiDetails, setVehiDetails] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    status: "Pending",
    image: '',
    userID: localStorage.getItem("id"),
  });

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:7070/api/vehi/${id}`)
        .then((res) => setVehiDetails(res.data))
        .catch((err) => console.log(err))
      console.log(vehiDetails);

    }
    fetchData();
  }, []);


  const updateFunction = async () => {
    await axios.put(`http://localhost:7070/api/vehi/${id}`, vehiDetails)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))

  }
  console.log(id)
  // const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/vehicleOwner/vehicles');
    updateFunction()
  };

  const handleInputChange = (event) => {
    setVehiDetails({ ...vehiDetails, [event.target.name]: event.target.value })
  };

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     setVehiDetails({ ...vehiDetails, image: event.target.result });
  //   };
  //   reader.readAsDataURL(file);
  // };

  //end
  const items = [
    { label: "vehicles", url: "/vehicleOwner/vehicles" },
    { label: "update vehicle", url: "/vehicleOwner/vehicles/update-vehicle" },
  ];
  const home = { icon: "pi pi-th-large", url: "/vehicleOwner" };
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Update Vehicle</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>

            <div className={styless.mainbody6}>
            <div className={styless.cont}>
              <form onSubmit={handleSubmit} className={styless.vehicle_details_form}>
                <div className={styless.form_group}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={vehiDetails.name}
                    onChange={handleInputChange}
                  // className={errors.name ? 'error' : ''}
                  />
                  {/* {errors.name && <span className={styless.error_message}>{errors.name}</span>} */}
                </div>
                <div className={styless.form_group}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={vehiDetails.email}
                    onChange={handleInputChange}
                  // className={errors.email ? 'error' : ''}
                  />
                  {/* {errors.email && <span className={styless.error_message}>{errors.email}</span>} */}
                </div>
                <div className={styless.form_group}>
                  <label htmlFor="contact">Contact Number:</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={vehiDetails.contact}
                    onChange={handleInputChange}
                  // className={errors.contactNumber ? 'error' : ''}
                  />
                  {/* {errors.contactNumber && <span className={styless.error_message}>{errors.contactNumber}</span>} */}
                </div>
                <div className={styless.form_group}>
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={vehiDetails.date}
                    onChange={handleInputChange}
                  // className={errors.date ? 'error' : ''}
                  />
                  {/* {errors.date && <span className={styless.error_message}>{errors.date}</span>} */}
                </div>
                <div className={styless.form_group}>
                  <label htmlFor="description">Description:</label>
                  <textarea id="description"
                    name="description"
                    value={vehiDetails.description}
                    onChange={handleInputChange}
                  // className={errors.description ? 'error' : ''}
                  />
                  {/* {errors.description && <span className={styless.error_message}>{errors.description}</span>} */}
                </div>
                {/* <div className={styless.form_group}>
                  <label htmlFor="image">Image:</label>
                  <input type="file" id="image" name="image" value={vehiDetails.image} onChange={handleInputChange} />
                </div> */}
                <div>
                  <button type="submit" className={styless.btn}>Submit</button>
                </div>

              </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateVehicle;
