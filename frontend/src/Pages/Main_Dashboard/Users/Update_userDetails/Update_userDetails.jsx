import React, { useState, useEffect } from "react";
import Sidebar from "../../../../components/com.mainDashboard/sidebar/Sidebar";
import styles from "../../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import styleees from "./update_userD.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
// import Validation from "./Validation";
import axios from "axios";

const Update_userDetails = () => {
  const items = [
    { label: "Users", url: "/siteowner/users" },
    {
      label: "Update User Details",
      url: "/siteowner/users/update-user-details",
    },
  ];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };

  const { idParam } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:7070/api/userr/${id}`)
        .then((response) => {
          setFname(response.data.user.fname)
          setLname(response.data.user.lname)
          setContactNumber(response.data.user.contactNumber)
          setEmail(response.data.user.email)
          setRoll(response.data.user.roll)
          setUsername(response.data.user.username)
          setPassword(response.data.user.password)
        })
        .catch((err) => console.log(err))
    }

    fetchData()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFunction()
    updateFunction()
    Swal.fire(
      'Success',
      'User Updated Successfully',
      'success'
    ).then((result) => {
      if (result.isConfirmed) {
        navigate('/siteowner/users')
      }
    }
    )
  };


  const updateFunction = async () => {
    const userDetails = {
      fname: fname,
      lname: lname,
      contactNumber: contactNumber,
      email: email,
      roll: roll,
      username: username,
      password: password,
    }
    await axios.put(`http://localhost:7070/api/userr/${id}`, userDetails)
      .then((response) => console.log(response.data))
      .catch((err) => { console.log(err); })
  }

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
          <div className={styles.contentbody}>
            <div className={styles.container}>
              <div className={styleees.newUser}>
                <div className={styleees.newUserTitle}>
                  <b>Update User Details</b>
                </div>
                <form className={styleees.newUserForm} onSubmit={handleSubmit} >
                  <div className={styleees.newUserRow}>
                    <div className={styleees.newUserItem}>
                      <label>First Name</label>
                      <input type="text" name="fname" defaultValue={fname} onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className={styleees.newUserItem}>
                      <label>Last Name</label>
                      <input type="text" name="lname" defaultValue={lname} onChange={(e) => setLname(e.target.value)} />
                    </div>
                  </div>
                  <div className={styleees.newUserRow}>
                    <div className={styleees.newUserItem}>
                    <label>Email</label>
                      <input type="email"  name="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} required disabled/>
                      
                    </div>
                    <div className={styleees.newUserItem}>
                      <label>Contact Number</label>
                      <input
                        type="text"
                        name="contactNumber" defaultValue={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                      {/* {errors.contactNumber && (
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.contactNumber}
                        </p>
                      )} */}
                    </div>
                  </div>
                  <div className={styleees.newUserRow}>
                    <div className={styleees.newUserItem}>
                      <label>Select Roll </label>
                      <select name="roll" value={roll} className={styleees.selectRoll} onChange={(e) => setRoll(e.target.value)} >
                        <option value="Site Owner">Site Owner</option>
                        <option value="Regular User">Regular User</option>
                        <option value="Landloard">Landloard</option>
                        <option value="Vehical Owner">Vehical Owner</option>
                        <option value="Showroom Owner">Showroom Owner</option>
                        <option value="Lowyer">Lowyer</option>
                      </select>
                    </div>

                    <div className={styleees.newUserItem}>
                      <label>Username</label>
                      <input type="text" name="username" defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
                      
                    </div>
                  </div>
                  <div className={styleees.newUserRow}>

                    <button className={styleees.newUserButton}>Update</button>
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

export default Update_userDetails;
