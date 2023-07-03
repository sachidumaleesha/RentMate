import React, { useState, useEffect } from 'react';
import styles from"./lawyer_sideBar.module.css";
import Swal from 'sweetalert2'
import axios from 'axios';

const Lawyer_SideBar = () => {

  const id = localStorage.getItem("id");

  const [user, setUser] = useState([])
  const [lawyer, setLawyer] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:7070/api/userr/${id}`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:7070/api/lawyer/user/${id}`)
      .then((res) => setLawyer(res.data[0]))
      .catch((err) => console.log(err))

  }, [])

  async function deleteProfile() {
    //ask from user
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        //delete from database
        axios.delete(`http://localhost:7070/api/lawyer/${lawyer._id}`)
          .then((res) => {
            console.log(res.data)

          })

        //delete from auth
        axios.delete(`http://localhost:7070/api/userr/${id}`)
          .then((res) => {
            console.log(res.data)
            localStorage.clear();
            //window.location.href = "/";
          })
          .catch((err) => console.log(err))

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ).then(() => {
          window.location.href = "/";
        })
      }
    })
  }

  return (
    <div className={styles.info_card}>
      <div className={styles.card1_back}>
        <div className={styles.profile_pic}>
          {!lawyer ? (
            <img src=".." alt="..." />
          ) : (
            <img src={lawyer.image} alt="..." />
          )}
        </div>
        <h2>{!lawyer ? (
          <p>Add Name</p>
        ) : (
          <>{lawyer.name}</>
        )}</h2>
        <h3>{user.email}</h3>
        <h3>{!lawyer ? (
          <p>Add Contact Number</p>
        ) : (
          <>{lawyer.contactNumber}</>
        )}</h3>
      </div>
      <div className={styles.notification_card}>

        <div className={styles.sideicon}>
          <div className={styles.userShowIcon}>
            <i class='bx bx-user'></i></div>
          <a href="/lawyer" className={styles.sidename}>

            <span className={styles.gradient}>My Profile</span>
          </a>
        </div>

        <div className={styles.sideicon}>
          <div className={styles.userShowIcon}>
            <i class='bx bx-user-plus'></i></div>
          <a href="/lawyer/update-profile" className={styles.sidename}>
            <span className={styles.gradient}>Edit Profile</span>
          </a>
        </div>

        <div className={styles.sideicon}>
          <div className={styles.userShowIcon}>
            <i class='bx bx-user-x'></i></div>

          <a href="#" className={styles.sidename}>
            <span className={styles.gradient} onClick={() => deleteProfile()}>Delete Profile</span>
          </a>
        </div>

        <div className={styles.sideicon}>
          <div className={styles.userShowIcon}>
            <i class='bx bxs-credit-card-front' ></i></div>

          <a href="/lawyer/lsubscription" className={styles.sidename}>
            <span className={styles.gradient}>Subscription</span>
          </a>
        </div>

        <div className={styles.sideicon}>
          <div className={styles.userShowIcon}>
            <i class='bx bx-detail'></i></div>
          <a href="/lawyer/surviceLawyer" className={styles.sidename}>
            <span className={styles.gradient}>Survice Listing</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Lawyer_SideBar;