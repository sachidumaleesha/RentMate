import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import styless from './laywerProfile.module.css'
import { Link, useNavigate } from "react-router-dom";
import Lawyer_SideBar from '../../../components/LawyerProfile_SideBar/Lawyer_SideBar'
import Swal from 'sweetalert2'
import axios from 'axios';


const LawyerProfile = () => {

  const navigate = useNavigate();

  const paid = localStorage.getItem('paid');
  const userid = localStorage.getItem("id");
  useEffect(() => {
    axios.get(`http://localhost:7070/api/lawyer/user/${userid}`)
      .then((res) => setLawyer(res.data))
      .catch((err) => console.log(err))

  }, [])

  if (paid === 'false') {

    Swal.fire(
      'Problem!',
      'You have to pay the subscription fee first!',
      'error'
    ).then(() => {
      navigate("/lawyer/lsubscription");
    })
  }
  else {
    axios.get(`http://localhost:7070/api/lawyer/user/${userid}`)
      .then((res) => setLawyer(res.data))
      .catch((err) => console.log(err))
  }

  const [lawyer, setLawyer] = useState([])



  // if (lawyer.length === 0) {
  //   console.log("Lawyer not added")
  //   Swal.fire(
  //     'Problem!',
  //     'You have to add your Service Listing to your profile first!',
  //     'error'
  //   ).then(() => {
  //     navigate("/lawyer/surviceLawyer");
  //   })
  // }
  // else {
  //   console.log("Lawyer already added");

  // }






  return (
    <div>
      <Navbar />
      <div className={styless.master}>
        <div className={styless.profile_home}>
          <Lawyer_SideBar />

          <div className={styless.main_card}>
            <div className={styless.subcard}>
              <div className={styless.detail}>


                <div className={styless.details_container}>
                  <div className={styless.title2}>
                    <span>Name</span> - <span>{!lawyer[0] ? (
                      <span><i>Not Added</i></span>
                    ) : (
                      <span><i>{lawyer[0].name}</i></span>
                    )}</span>


                  </div>
                  <div className={styless.subDetail}>
                  </div>
                </div>

                <div className={styless.details_container}>
                  <div className={styless.title2}>
                    <span>Email</span> - <span><i>{!lawyer[0] ? (
                      <span><i>Not Added</i></span>
                    ) : (
                      <span><i>{lawyer[0].email}</i></span>
                    )}</i></span>

                  </div>
                  <div className={styless.subDetail}>
                  </div>
                </div>

                <div className={styless.details_container}>
                  <div className={styless.title2}>
                    <span>Contact Number</span> - <span><i>{!lawyer[0] ? (
                      <span><i>Not Added</i></span>
                    ) : (
                      <span><i>{lawyer[0].contactNumber}</i></span>
                    )}</i></span>
                  </div>
                  <div className={styless.subDetail}>
                  </div>
                </div>

                <div className={styless.details_container}>
                  <div className={styless.title2}>
                    <span>Address</span> - <span><i>{!lawyer[0] ? (
                      <span><i>Not Added</i></span>
                    ) : (
                      <span><i>{lawyer[0].address}</i></span>
                    )}</i></span>

                  </div>
                  <div className={styless.subDetail}>
                  </div>
                </div>

                <div className={styless.details_container}>
                  <div className={styless.title2}>
                    <span>Education</span> - <span><i>{!lawyer[0] ? (
                      <span><i>Not Added</i></span>
                    ) : (
                      <span><i>{lawyer[0].education}</i></span>
                    )}</i></span>

                  </div>
                  <div className={styless.subDetail}>

                  </div>
                </div>


                <div className={styless.details_container}>
                  <div className={styless.title2}>
                    <span>Experience</span> - <span><i>{!lawyer[0] ? (
                      <span><i>Not Added</i></span>
                    ) : (
                      <span><i>{lawyer[0].experience}</i></span>
                    )}</i></span>

                  </div>
                  <div className={styless.subDetail}>
                  </div>
                </div>

                <div className={styless.details_container}>
                  <div className={styless.title2}>
                    <span>Language Known</span> - <span><i>{!lawyer[0] ? (
                      <span><i>Not Added</i></span>
                    ) : (
                      <span><i>{lawyer[0].languages}</i></span>
                    )}</i></span>

                  </div>
                  <div className={styless.subDetail}>
                  </div>
                </div>
                <div className={styless.details_container}>
                  <div className={styless.title2}>
                    <span>Practice Courts</span> - <span><i>{!lawyer[0] ? (
                      <span><i>Not Added</i></span>
                    ) : (
                      <span><i>{lawyer[0].courts}</i></span>
                    )}</i></span>

                  </div>
                  <div className={styless.subDetail}>
                  </div>
                </div>

                <div className={styless.details_container}>
                  <div className={styless.title2}>
                    <span>Specialization </span> - <span><i>{!lawyer[0] ? (
                      <span><i>Not Added</i></span>
                    ) : (
                      <span><i>{lawyer[0].specialization}</i></span>
                    )}</i></span>

                  </div>
                  <div className={styless.subDetail}>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div >

      <Footer />
    </div >
  )
}

export default LawyerProfile;
