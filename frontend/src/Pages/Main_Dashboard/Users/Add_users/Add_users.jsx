import React, { useState } from "react";
import Sidebar from "../../../../components/com.mainDashboard/sidebar/Sidebar";
import styles from "../../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import styleees from './add_users.module.css'
import { useNavigate } from "react-router-dom";
import Validation from "./Validation";
import Swal from 'sweetalert2'
import axios from "axios";

const Add_users = ({ onSubmit }) => {
  const items = [
    { label: "Users", url: "/siteowner/users" },
    { label: "Add User", url: "/siteowner/users/add-user" },
  ];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };



  const [errors, setError] = useState({});


  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("Site Owner");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // const [values, setValues] = useState({
  //   username: username,
  //   email: email,
  //   password: password,
  //   confPassword: confPassword,
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    //const validation = Validation(values);
    //setError(validation);
    // if (Object.keys(validation).length === 0) {

    //   sendData()

    //   navigate('/siteowner/users');
    // }

    sendData()

  };

  const sendData = async () => {
    const userDetails = {
      fname: fname,
      lname: lname,
      contactNumber: contactNumber,
      email: email,
      roll: roll,
      username: username,
      password: password,
    }
    console.log(userDetails);
    await axios.post("http://localhost:7070/api/userr/", userDetails)
      .then((response) => {
        Swal.fire(
          'Success',
          'New User Added Successfully',
          'success'
        ).then(function () {
          window.location = "/siteowner/users";
        })
      })
      .catch((error) => console.log(error))
  }



  const navigate = useNavigate();
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Dashboard</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          {/* <div className={styles.welcomemsg}>
            👋 Welcome SiteOwner, You're Back Again!
          </div> */}
          <div className={styles.contentbody}>

            <div className={styles.container}>

              <div className={styleees.newUser}>
                <div className={styleees.newUserTitle}><b>Add New User</b></div>
                <form className={styleees.newUserForm} onSubmit={handleSubmit} >
                  <div className={styleees.newUserRow}>
                    <div className={styleees.newUserItem}>
                      <label>First Name</label>
                      <input type="text" placeholder="Enter Name" name="fname" onChange={(e) => setFname(e.target.value)} required />
                    </div>
                    <div className={styleees.newUserItem}>
                      <label>Last Name</label>
                      <input type="text" placeholder="Enter Name" name="lname" onChange={(e) => setLname(e.target.value)} required />
                    </div>

                  </div>
                  <div className={styleees.newUserRow}>
                    <div className={styleees.newUserItem}>
                      <label>Email</label>
                      <input type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                      {errors.email &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.email}
                        </p>
                      }
                    </div>
                    <div className={styleees.newUserItem}>
                      <label>Contact Number</label>
                      <input type="text" placeholder="+1 123 456 78" name="contactNumber" onChange={(e) => setContactNumber(e.target.value)} required />
                      {errors.contactNumber &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.contactNumber}
                        </p>
                      }
                    </div>


                  </div>
                  <div className={styleees.newUserRow}>
                    <div className={styleees.newUserItem}>

                      <label>Select Roll  </label>
                      <select name="roll" className={styleees.selectRoll} onChange={(e) => setRoll(e.target.value)} >
                        <option value="Site Owner">Site Owner</option>
                        <option value="Regular User">Regular User</option>
                        <option value="Landloard">Landloard</option>
                        <option value="Vehical Owner" >Vehical Owner</option>
                        <option value="Showroom Owner" >Showroom Owner</option>
                        <option value="Lowyer" >Lowyer</option>
                      </select>
                    </div>



                    <div className={styleees.newUserItem}>
                      <label>Username</label>
                      <input type="text" placeholder="Enter Username" name="username" onChange={(e) => setUsername(e.target.value)} required />
                      {errors.username &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.username}
                        </p>
                      }
                    </div>
                  </div>
                  <div className={styleees.newUserRow}>
                    <div className={styleees.newUserItem}>
                      <label>Password</label>
                      <input type="password" placeholder="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                      {errors.password &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.password}
                        </p>
                      }
                    </div>
                    <div className={styleees.newUserItem}>
                      <label>Confirm Password</label>
                      <input type="password" placeholder="Confirm Password" name="confirm_password" onChange={(e) => setConfPassword(e.target.value)} />
                      {/* {errors.confirm_password && 
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.confirm_password}
                    </p>
                  } */}
                    </div>
                  </div>
                  <button className={styleees.newUserButton}>Add User</button>
                </form>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>

  );
};

export default Add_users;
