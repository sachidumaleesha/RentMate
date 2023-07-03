import React from "react";
import Sidebar from "../../../../components/com.vehicleOwner/sidebar/Sidebar";
import styles from "../../../../components/com.style/contentArea.module.css";
import styless from './addvehicle.module.css'
import { BreadCrumb } from "primereact/breadcrumb";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { storage } from "../../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import Validation10 from "./Validation10";
import axios from "axios";
import Swal from "sweetalert2";

//start
const AddVehicle = () => {

  const items = [
    { label: "vehicles", url: "/vehicleOwner/vehicles" },
    { label: "Add vehicle", url: "/vehicleOwner/vehicles/add-vehicle" },
  ];
  const home = { icon: "pi pi-th-large", url: "/vehicleOwner" };



  const [values, setValues] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    description: '',
    price: '',
  });

  const [vehiDetails, setVehiDetails] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    description: '',
    status: "Pending",
    price: '',
    image: '',
    userID: localStorage.getItem("id"),
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const [image, setImage] = useState("");

  //start

  // const currentDate = new Date();
  // const year = currentDate.getFullYear();
  // const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  // const day = currentDate.getDate().toString().padStart(2, '0');
  // const minDate = `${year}-${month}-${day}`;

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
  
    if (month < 10) {
      month = '0' + month;
    }
  
    if (day < 10) {
      day = '0' + day;
    }
  
    return `${year}-${month}-${day}`;
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = Validation10(vehiDetails);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // setValues({
      //   name: '',
      //   email: '',
      //   contact: '',
      //   date: '',
      //   description: '',
      // });


      const storageRef = ref(storage, `vehicle/${v4()}`);

      await uploadBytes(storageRef, image)
        .then(() => {
          console.log("Uploaded")
        })
        .catch((err) => {
          console.log(err)
        })

      await getDownloadURL(storageRef)
        .then((url) => {
          console.log(url)
          const newVehicle = {
            name: vehiDetails.name,
            email: vehiDetails.email,
            contact: vehiDetails.contact,
            date: vehiDetails.date,
            description: vehiDetails.description,
            status: vehiDetails.status,
            price: vehiDetails.price,
            image: url,
            userID: vehiDetails.userID,
          }

          console.log(vehiDetails)
          axios.post("http://localhost:7070/api/vehi", newVehicle)
            .then((response) => {
              console.log(response.data)
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Vehicle Added Successfully!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/vehicleOwner/vehicles');
                }
              }
              )
            })
            .catch((error) => console.log(error))
        })
    }
    else {
      console.log("Error");
      console.log(vehiDetails);
    }


  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setVehiDetails({ ...vehiDetails, [event.target.name]: event.target.value })

  };

  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Add Vehicle</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>

            {/* <div className={styless.mainbody3}>
              <form className={styless.vehicle_details_form} onSubmit={handleSubmit}>
                <div className={styless.form_group}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={vehiDetails.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className={styless.error_message}>{errors.name}</span>}
                </div>
                <div className={styless.form_group}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={vehiDetails.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className={styless.error_message}>{errors.email}</span>}
                </div>
                <div className={styless.form_group}>
                  <label htmlFor="contact">Contact Number:</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={vehiDetails.contact}
                    onChange={handleChange}
                    className={errors.contact ? 'error' : ''}
                  />
                  {errors.contact && <span className={styless.error_message}>{errors.contact}</span>}
                </div>
                <div className={styless.form_group}>
                  <label htmlFor="contact">Price Per KM :</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={vehiDetails.price}
                    onChange={handleChange}
                    className={errors.price ? 'error' : ''}
                  />
                  {errors.contact && <span className={styless.error_message}>{errors.price}</span>}
                </div>
                <div className={styless.form_group}>
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={vehiDetails.date}
                    onChange={handleChange}
                    className={errors.date ? 'error' : ''}
                  />
                  {errors.date && <span className={styless.error_message}>{errors.date}</span>}
                </div>
                <div className={styless.form_group}>
                  <label htmlFor="description">Description:</label>
                  <textarea id="description"
                    name="description"
                    value={vehiDetails.description}
                    onChange={handleChange}
                    className={errors.description ? 'error' : ''}
                  />
                  {errors.description && <span className={styless.error_message}>{errors.description}</span>}
                </div>
                <div className={styless.form_group}>
                  <label htmlFor="image">Image:</label>
                  <input type="file" id="image" name="image"
                    onChange={(e) => setImage(e.target.files[0])} />

                </div>
                <button type="submit" className={styless.btn}>Add</button>
              </form>
            </div> */}

<div className={styless.boxform}>
                      <div className={styless.newUserTitle}><b>Add Vhicle</b></div>
                       
                     <form onSubmit={handleSubmit} className={styless.newUserForm}>
                        {/* <h2>Support Form</h2>
                        <h4>Hi, Do you want to help?</h4> */}
                <div className={styless.newUserRow}>
                <div className={styless.newUserItem}>
                  <label htmlFor="name">Name:</label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={vehiDetails.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className={styless.error_message}>{errors.name}</span>}
                </div>

                <div className={styless.newUserItem}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={vehiDetails.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className={styless.error_message}>{errors.email}</span>}
                </div>

                </div>

                

                <div className={styless.newUserRow}>
                <div className={styless.newUserItem}>
                  <label htmlFor="contact">Contact Number:</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={vehiDetails.contact}
                    onChange={handleChange}
                    className={errors.contact ? 'error' : ''}
                  />
                  {errors.contact && <span className={styless.error_message}>{errors.contact}</span>}
                </div>
                

                
                <div className={styless.newUserItem}>
                <label htmlFor="date">Date:</label>
                <input
                      type="date"
                      id="date"
                      name="date"
                      value={vehiDetails.date}
                      onChange={handleChange}
                      min={getCurrentDate()}
                      max={getCurrentDate()}
                      className={errors.date ? 'error' : ''}
/>
                  {errors.date && <span className={styless.error_message}>{errors.date}</span>}
                </div>
                </div>

                {/* start */}

                <div className={styless.newUserRow}>
                <div className={styless.newUserItem}>
                <label htmlFor="contact">Price Per KM:</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={vehiDetails.price}
                    onChange={handleChange}
                    className={errors.price ? 'error' : ''}
                  />
                  {errors.price && <span className={styless.error_message}>{errors.price}</span>}
                </div>
                
                

                {/* end */}

                
                <div className={styless.newUserItem}>
                  <label htmlFor="description">Description:</label>
                  <textarea id="description" rows="4" cols="50" 
                    name="description"
                    value={vehiDetails.description}
                    onChange={handleChange}
                    className={errors.description ? 'error' : ''}
                  />
                  {errors.description && <span className={styless.error_message}>{errors.description}</span>}
                </div>
                </div>
                 <div className={styless.newUserRow}>
                <div className={styless.newUserItem}>
                <label htmlFor="image">Image:</label>
                  <input type="file" id="image" name="image"
                    onChange={(e) => setImage(e.target.files[0])} />
                  </div>
                  </div> 
                  <button className={styless.newUserButton}>Add Record</button>
              </form>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
