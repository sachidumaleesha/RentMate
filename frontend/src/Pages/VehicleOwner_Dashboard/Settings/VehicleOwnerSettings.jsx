// import React from "react";
import React, { useState, useEffect } from 'react';
import Sidebar from "../../../components/com.vehicleOwner/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import styless from "./vehicleownersettings.module.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2'


const VehicleOwnerSettings = () => {

  const id = localStorage.getItem("id");

  const [userDetails, setUserDetails] = useState({
    fname: '',
    lname: '',
    email: '',
    contactNumber: '',
    username: '',
    password: '',
  })

  //start
  const [values, setValues] = useState({
    fname: '',
    lname: '',
    email: '',
    contactNumber: '',
    username: '',
    password: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:7070/api/userr/${id}`)
        .then((res) => {
          setUserDetails(res.data.user)
          console.log(res.data.user)
          setUserDetails(res.data.user)
          setValues({
            fname: res.data.user.fname,
            lname: res.data.user.lname,
            email: res.data.user.email,
            contactNumber: res.data.user.contactNumber,
            username: res.data.user.username,
            password: res.data.user.password,
          })
        })
        .catch((err) => console.log(err))
      console.log(userDetails);


    }
    fetchData();
  }, []);



  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    console.log(values);
    if (Object.keys(validationErrors).length === 0) {
      // setValues({
      //   firstname: '',
      //   lastname: '',
      //   email: '',
      //   phone: '',
      //   country: '',
      //   address: '',
      //   language: '',
      //   age: '',
      // });
      console.log(values);


      axios.put(`http://localhost:7070/api/userr/${id}`, values)
        .then((response) => {
          console.log(response.data)
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User Updated Successfully!',
          })
            .then(() => {
              window.location.href = "/vehicleOwner";
            })

        })
        .catch((error) => console.log(error))


    } else {
      console.log(validationErrors);
      setErrors(validationErrors);
    }

  };
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("./upload-icon.png");

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      setImageSrc(event.target.result);
    };

    reader.readAsDataURL(file);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: null });
  };


  const validate = (values) => {
    const errors = {};
    if (!values.fname) {
      errors.fname = 'First Name is required';
    } else if (!/^[a-zA-Z]+$/.test(values.fname)) {
      errors.fname = 'First Name should contain only letters';
    }
    if (!values.lname) {
      errors.lname = 'Last Name is required';
    } else if (!/^[a-zA-Z]+$/.test(values.lname)) {
      errors.lname = 'Last Name should contain only letters';
    }

    if (!values.contactNumber) {
      errors.contactNumber = 'Contact number is required';
    } else if (!/^\d{10}$/.test(values.contactNumber)) {
      errors.contactNumber = 'Contact number should contain exactly 10 numbers';
    }

    if (!values.username) {
      errors.username = 'Username is required';
    }

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!values.password) {
      errors.password = 'Username is required';
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character";
    }
    return errors;
  };

  //end
  const items = [{ label: "Settings", url: "/vehicleOwner/settings" }];
  const home = { icon: "pi pi-th-large", url: "/vehicleOwner" };
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Settings</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>
            <div className={styles.container}>
              <div className={styless.mainbody}>

                <div className={styless.newUser}>
                  <h1 className={styless.newUserTitle}>Update User</h1>
                  <form className={styless.newUserForm} onSubmit={handleSubmit}>
                    <div className={styless.newUserRow}>
                      <div className={styless.newUserItem}>
                        {/* <label>First Name</label>
                        <input type="text" placeholder="john" /> */}
                        <label htmlFor="firstname">First Name:</label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="john"
                          onChange={handleInputChange}
                          className={errors.fname ? 'error' : ''}
                          defaultValue={userDetails.fname}
                        />
                        {errors.fname && <span className={styless.error_message}>{errors.fname}</span>}
                      </div>
                      <div className={styless.newUserItem}>
                        {/* <label>Last Name</label>
                        <input type="text" placeholder=" Smith" /> */}
                        <label htmlFor="lname">Last Name:</label>
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          placeholder="Smith"
                          onChange={handleInputChange}
                          className={errors.lname ? 'error' : ''}
                          defaultValue={userDetails.lname}
                        />
                        {errors.lname && <span className={styless.error_message}>{errors.lname}</span>}
                      </div>
                    </div>
                    <div className={styless.newUserRow}>
                      <div className={styless.newUserItem}>
                        {/* <label>Email</label>
                        <input type="email" placeholder="john@gmail.com" /> */}
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@gmail.com"

                          onChange={handleInputChange}
                          className={errors.email ? 'error' : ''}
                          defaultValue={userDetails.email}
                          disabled
                        />
                        {errors.email && <span className={styless.error_message}>{errors.email}</span>}
                      </div>
                      <div className={styless.newUserItem}>
                        {/* <label>Phone</label>
                        <input type="text" placeholder="+1 123 456 78" /> */}
                        <label htmlFor="phone">Contact Number:</label>
                        <input
                          type="tel"
                          id="contactNumber"
                          name="contactNumber"
                          placeholder="+1 123 456 78"
                          onChange={handleInputChange}
                          className={errors.contactNumber ? 'error' : ''}
                          defaultValue={userDetails.contactNumber}
                        />
                        {errors.contactNumber && <span className={styless.error_message}>{errors.contactNumber}</span>}
                      </div>
                    </div>
                    <div className={styless.newUserRow}>
                      <div className={styless.newUserItem}>
                        {/* <label>Country</label>
                        <input type="text" placeholder="USA" /> */}
                        <label htmlFor="username">Username:</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          onChange={handleInputChange}
                          className={errors.username ? 'error' : ''}
                          defaultValue={userDetails.username}
                        />
                        {errors.username && <span className={styless.error_message}>{errors.username}</span>}
                      </div>
                      <div className={styless.newUserItem}>
                        {/* <label>Address</label>
                        <input type="text" placeholder="New York | USA" /> */}
                        <label htmlFor="phone">Password:</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder=""
                          onChange={handleInputChange}
                          className={errors.password ? 'error' : ''}
                        />
                        {errors.password && <span className={styless.error_message}>{errors.password}</span>}
                      </div>
                    </div>
                    <button type="submit" className={styless.newUserButton}>Create</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default VehicleOwnerSettings;
