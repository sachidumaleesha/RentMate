import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../../../components/com.landlord/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import stylesz from "./landlordProfile.module.css";
import ProfileBanner from "./images/profile-banner.png";
import Profile from "./images/profile.png";
import { BreadCrumb } from "primereact/breadcrumb";
import { Link } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

const LandlordProfile = () => {
  const items = [{ label: "profile", url: "/landlord/profile" }];
  const home = { icon: "pi pi-th-large", url: "/landlord" };
  const toast = useRef(null);
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:7070/api/userr/6465ba29f3d1749086778134`)
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
        navigate('/landlord/profile')
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
    await axios.put(`http://localhost:7070/api/userr/6465ba29f3d1749086778134`, userDetails)
      .then((response) => console.log(response.data))
      .catch((err) => { console.log(err); })
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:7070/api/userr/6465ba29f3d1749086778134`);
      // Perform any additional actions after successful deletion
      navigate("/");
    } catch (error) {
      console.log(error);
      // Handle error scenarios
    }
  };
  

  return (
    <div>
      <Toast ref={toast}></Toast>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Profile</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>
            <div className={stylesz.top__section__area}>
              <div className={stylesz.banner__section}>
                <img src={ProfileBanner} alt="ProfileBanner" />
              </div>
              <div className={stylesz.banner__content__area}>
                <img src={Profile} alt="Profile" />
                <div className={stylesz.landlord__smallinfo}>
                  <div className={stylesz.lardlord__name}>{fname} {lname}</div>
                  <div className={stylesz.landlord__data}>
                    <div>
                      <i class="bx bxs-face"></i>
                      Landlord
                    </div>
                    <div>
                      <i class="bx bx-map"></i>
                      Mathugama
                    </div>
                    <div>
                      <i class="bx bx-calendar-alt"></i>
                      Joined April 2021
                    </div>
                    <div>
                      <Link>
                        <Button
                          label="Delete Account"
                          severity="danger"
                          raised
                          className={stylesz.accountdel__btn}
                          onClick={handleDelete}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={stylesz.bottom__section__area}>
              <TabView className={stylesz.tab__navigator}>
                <TabPanel
                  header="Profile"
                  leftIcon="pi pi-user mr-2"
                  className={stylesz.data__space}
                >
                  <p className="m-0">
                    <div class="formgrid grid">
                      <div class="field col">
                        <label for="firstname">Firstname</label>
                        <input
                          id="firstname"
                          type="text"
                          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                          placeholder={fname}
                          readOnly
                        />
                      </div>
                      <div class="field col">
                        <label for="lastname">Lastname</label>
                        <input
                          id="lastname"
                          type="text"
                          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                          placeholder={lname}
                          readOnly
                        />
                      </div>
                    </div>
                    <div class="formgrid grid">
                      <div class="field col">
                        <label for="email">Email</label>
                        <input
                          id="email"
                          type="text"
                          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                          placeholder={email}
                          readOnly
                        />
                      </div>
                      <div class="field col">
                        <label for="contactNumber">Contact Number</label>
                        <input
                          id="contactNumber"
                          type="text"
                          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                          placeholder={contactNumber}
                          readOnly
                        />
                      </div>
                    </div>
                    <div class="formgrid grid">
                      <div class="field col">
                        <label for="role">Role</label>
                        <input
                          id="role"
                          type="text"
                          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                          placeholder="Landlord"
                          readOnly
                        />
                      </div>
                      <div class="field col">
                        <label for="username">Username</label>
                        <input
                          id="username"
                          type="text"
                          class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                          placeholder={username}
                          readOnly
                        />
                      </div>
                    </div>
                  </p>
                </TabPanel>
                <TabPanel
                  header="Settings"
                  leftIcon="pi pi-cog mr-2"
                  className={stylesz.data__space}
                >
                  <form onSubmit={handleSubmit}>
                    <p className="m-0">
                      <div class="formgrid grid">
                        <div class="field col">
                          <label for="firstname">Firstname</label>
                          <input
                            id="firstname"
                            type="text"
                            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                          />
                        </div>
                        <div class="field col">
                          <label for="lastname">Lastname</label>
                          <input
                            id="lastname"
                            type="text"
                            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="formgrid grid">
                        <div class="field col">
                          <label for="email">Email</label>
                          <input
                            id="email"
                            type="text"
                            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div class="field col">
                          <label for="contactNumber">Contact Number</label>
                          <input
                            id="contactNumber"
                            type="text"
                            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="formgrid grid">
                        <div class="field col">
                          <label for="role">Role</label>
                          <input
                            id="role"
                            type="text"
                            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                            value="Landlord"
                            readOnly
                          />
                        </div>
                        <div class="field col">
                          <label for="username">Username</label>
                          <input
                            id="username"
                            type="text"
                            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="formgrid grid">
                        <div class="field col-12">
                          <button type="submit" className={stylesz.submit__btn}>Update Profile</button>
                        </div>
                      </div>
                    </p>
                  </form>
                </TabPanel>
              </TabView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordProfile;
