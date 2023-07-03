import React, { useState,useEffect } from 'react';import Sidebar from "../../../../components/com.showRoom/sidebar/Sidebar";
import styles from "../../../../components/com.style/contentArea.module.css";
import styless from './UpdateShowroom.module.css'
import { BreadCrumb } from "primereact/breadcrumb";
import { useNavigate, useParams  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import covershow from "../Images/covershow.jpg"


const UpdateShowroom = () => {
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { ShowroomID } = useParams();

  const items = [
    { label: "Dashboard", url: "/showroomOwner" },
    { label: "Showroom", url: "/showroomOwner/showroom" },
    { label: "Update Showroom", url: "/showroomOwner/showroom/update-showroom" }
  ];

  const [showroomDetails, setShowroomDetails] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    city: "",
    openingTime: ""
  });

  const handleInputChange = (event) => {
    setShowroomDetails({ ...showroomDetails, [event.target.name]: event.target.value })
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:7070/api/Showroom/${ShowroomID}`)

        .then((res) => setShowroomDetails(res.data))
        .catch((err) =>
          console.log(err));
      console.log(setShowroomDetails);

    }
    fetchData();
  }, []);

  const updateFunction = async () => {
    await axios.put(`http://localhost:7070/api/Showroom/${ShowroomID}`, showroomDetails)
      .then((res) => console.log(res.data))
      // .then((response) => setshowroomDetails(response.data))
      .catch((error) => console.log(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(showroomDetails, "asd")

    updateFunction()
    updateFunction()

    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Showroom Updated Successfully!'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/showroomOwner');
      }
    })
  };


  const home = { icon: "pi pi-th-large", url: "/showroomOwner" };
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
      <div className={styles.textbody}>
        <div className={styles.text}>Update Showroom</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>
            <div className={styless.formbody}>
            {/* <div className={styless.covershow}>
                  <img src={covershow} alt="" />
                </div> */}
              <h2 className={styless.showroomTitle}>Update Showroom</h2>
              <form className={styless.showroomForm} onSubmit={handleSubmit}>
              
                <div className={styless.showroomItem}>
                  <label>Showroom Name</label>
                  <input type="text" name="name" defaultValue={showroomDetails.name} onChange={handleInputChange} required />
                </div>
                <div className={styless.showroomItem}>
                  <label>E-mail</label>
                  <input type="email" name="email" defaultValue={showroomDetails.email} onChange={handleInputChange} required disabled />
                </div>
                <div className={styless.showroomItem}>
                  <label>Address</label>
                  <input type="text" name="address" defaultValue={showroomDetails.address} onChange={handleInputChange} required />
                </div>
                <div className={styless.showroomItem}>
                  <label>City</label>
                  <input type="text" name="city" defaultValue={showroomDetails.city} onChange={handleInputChange} required />
                </div>
                <div className={styless.showroomItem}>
                  <label>Opening Time</label>
                  <input type="text" name="openingTime" defaultValue={showroomDetails.openingTime} onChange={handleInputChange} required />
                </div>
                <div className={styless.showroomItem}>
                  <label>Contact</label>
                  <input type="text" name="contactNumber" defaultValue={showroomDetails.contactNumber} onChange={handleInputChange}
                    maxLength={10}
                    minLength={10}
                    pattern="[0-9]+"
                    required />
                </div>

                <div className={styless.showroomButton}><button type="submit" className={styless.showroomButtonUpdate}>Update</button>
                  {/* <button className={styless.showroomButtonCancel}>
        Cancel</button> */}
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
export default UpdateShowroom;
