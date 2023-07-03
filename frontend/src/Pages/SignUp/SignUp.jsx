import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import stylesss from "./signUp.module.css";
import Validation from "./Validation";
import axios from "axios";
import Swal from 'sweetalert2'

import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const toast = useRef(null);

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    username: "",
    email: '',
    contactNumber: "",
    password: "",
    confirm_password: "",
  });

  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    contactNumber: "",
    roll: "Regular User",
    username: "",
    password: "",
  })

  const [errors, setError] = useState({});

  const hadleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const validation = Validation(values);
    setError(validation);
    if (Object.keys(validation).length === 0) {

      setValues({
        name: "",
        email: '',
        password: "",
        confirm_password: "",
      });

      console.log(userDetails);

      await axios.post("http://localhost:7070/api/userr/", userDetails)
        .then((response) => {
          console.log(response.data)
          Swal.fire({
            icon: 'success',
            title: 'Done!!',
            text: 'New User Created Successfully!',
            footer: '<a href="/login">You can login now</a>'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login');
            }
          })
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Check youe email or password again!',
          })
        })
    }
  };

  return (
    <div>
      <Toast ref={toast} />
      <div className={stylesss.mainContainer1}>
        <div className={stylesss.imageContainer1}></div>
        <div className={stylesss.loginContainer1}>
          <div className={stylesss.newUser}>
            <div className={stylesss.newUserTitle}>
              <b>Sign Up</b>
            </div>
            <form className={stylesss.newUserForm} onSubmit={handleSubmit}>
              <div className={stylesss.newUserRow}>
                <div className={stylesss.newUserItem1}>
                  <label>First Name</label>
                  <input type="text" placeholder="Enter Name" name="fname" value={userDetails.fname} onChange={hadleChange} />
                  {errors.fname &&
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.fname}
                    </p>
                  }
                </div>
                <div className={stylesss.newUserItem1}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter Name" name="lname" value={userDetails.lname} onChange={hadleChange} />
                  {errors.lname &&
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.lname}
                    </p>
                  }
                </div>
              </div>
              <div className={stylesss.newUserRow}>
                <div className={stylesss.newUserItem1}>
                  <label>Email</label>
                  <input type="email" placeholder="Enter Email" name="email" value={userDetails.email} onChange={hadleChange} />
                  {errors.email &&
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.email}
                    </p>
                  }
                </div>
                <div className={stylesss.newUserItem1}>
                  <label>Contact Number</label>
                  <input type="text" placeholder="+1 123 456 78" name="contactNumber" value={userDetails.contactNumber} onChange={hadleChange} />
                  {errors.contactNumber &&
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.contactNumber}
                    </p>
                  }
                </div>
              </div>
              <div className={stylesss.newUserRow}>
                <div className={stylesss.newUserItem1}>
                  <label>Select Roll </label>
                  <select name="roll" value={userDetails.roll} className={stylesss.selectRoll} onChange={hadleChange}>
                    <option value="Regular User">Regular User</option>
                    <option value="Landloard">Landloard</option>
                    <option value="Vehical Owner" >Vehical Owner</option>
                    <option value="Showroom Owner" >Showroom Owner</option>
                    <option value="Lowyer" >Lowyer</option>
                  </select>
                </div>

                <div className={stylesss.newUserItem1}>
                  <label>Username</label>
                  <input type="text" placeholder="Enter Username" name="username" value={userDetails.username} onChange={hadleChange} />
                  {errors.username &&
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.username}
                    </p>
                  }
                </div>
              </div>
              <div className={stylesss.newUserRow}>
                <div className={stylesss.newUserItem1}>
                  <label>Password</label>
                  <input type="password" placeholder="Password" name="password" value={userDetails.password} onChange={hadleChange} />
                  {errors.password &&
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.password}
                    </p>
                  }
                </div>
                <div className={stylesss.newUserItem1}>
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Confirm Password" name="confirm_password" onChange={hadleChange} />
                  {errors.confirm_password &&
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.confirm_password}
                    </p>
                  }
                </div>
              </div>
              <button className={stylesss.newUserButton}>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
