import React, { useState } from "react";
import styles from "./customer_Privacy.module.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Navigator from "../../../components/Customer_Profile/profile_nav/Profile_nav";
import Info_Card from "../../../components/Customer_Profile/info_card/Info_card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleExclamation} from "@fortawesome/free-regular-svg-icons";
import { faExclamation, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from 'sweetalert2'

const Customer_Privacy = () => {
    const [isConfirmFormVisible, setConfirmFormVisible] = useState(false);

    const handleConfirmFormVisibility = () => {
        setConfirmFormVisible(!isConfirmFormVisible);
      };

      const HandleDelete = () => {
        const userid = localStorage.getItem("id");
      
        axios.delete(`http://localhost:7070/api/customer/delete_customer/${userid}`)
          .then((res) => {
            console.log(res.data);
            alert("Account Deleted Successfully");
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Account Deleted Successfully!'
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "/login";
              }
            });
          })
          .catch((err) => {
            console.log(err);
            alert("Error Occurred");
          });
      }
      

  return (
    <div>
      <Navbar />
      <div className={styles.master}>
        <Navigator />
        <div className={styles.profile_home}>
          <Info_Card />
          <div className={styles.main_card}>
            <div className={styles.title}>
              <h1>Privacy & Policy</h1>
            </div>
            <div className={styles.privacy_content}>
              <div className={styles._45}>
                <div className={styles._50}>
                  <span>Delete Your Account</span>
                  <div className={styles.down}>
                    <h1>delete your account permenantly</h1>
                  </div>
                </div>
              </div>
              <div className={styles._46}>
                <button onClick={handleConfirmFormVisibility}>Delete Account</button>
              </div>
            </div>
            {/* form get deletetion confirmation */}
            {isConfirmFormVisible && (
                  <div className={styles.form}>
                    <div className={styles.mark}>
                        <div className={styles.mark_content}>
                            <FontAwesomeIcon icon={faExclamation} style={{color: "#cc8925",}} />
                        </div>
                    </div>
                    <div className={styles.Container}>
                        <div className={styles.text}>
                            <span>Are You Sure! You want to delete your account ? This Will delete your account permenantly and you can't recover your account again.</span>
                        </div>
                        <div className={styles.btncontainer}>
                            <button className={styles.yes} onClick={HandleDelete}>Yes,Delete</button>
                            <button className={styles.no} onClick={handleConfirmFormVisibility}>No,Cancel</button>
                        </div>
                    </div>
                  </div>
                )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customer_Privacy;
