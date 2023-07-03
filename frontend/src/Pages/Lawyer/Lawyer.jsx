import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import styles from './lawyer.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Lawyer = () => {

  const [lawyer, setLawyer] = useState([])

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:7070/api/lawyer/${id}`)
      .then(res => {
        setLawyer(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Navbar />

      {/* start coding */}
      <div className={styles.lawyer_details}>
        <div className={styles.lawyer_title}>
          <h1>Lawyer Details</h1>
        </div>
        <div className={styles.mainCard}>
          <div className={styles.maincolum}>
            <div className={styles.image_lawyer}>

              <img src={lawyer.image} alt="card" style={{ height: "400px" }}/>
            </div>
            <div className={styles.subCard}>
              {/* start */}


              <div className={styles.parallax_container}>
                <div className={styles.mainbody5}>
                  {/* start here */}
                  <div className={styles.userShowBottom}>
                    <span className={styles.userShowTitle}>Contact Details</span>
                    <div className={styles.userShowInfo}>
                      <div className={styles.userShowIcon}>
                        <i class='bx bx-user'></i></div>
                      <span className={styles.userShowInfoTitle}>Name : {lawyer.name}</span>
                    </div>
                    <div className={styles.userShowInfo}>

                      <div className={styles.userShowIcon}>
                        <i class='bx bx-envelope'></i></div>
                      <span className={styles.userShowInfoTitle}>Email : {lawyer.email}</span>
                    </div>
                    <div className={styles.userShowInfo}>

                      <div className={styles.userShowIcon}>
                        <i class='bx bx-mobile'></i></div>
                      <span className={styles.userShowInfoTitle}>Contact Number :  {lawyer.contactNumber}</span>
                    </div>
                    <div className={styles.userShowInfo}>

                      <div className={styles.userShowIcon}>
                        <i class='bx bx-current-location'></i></div>
                      <span className={styles.userShowInfoTitle}>Address :  {lawyer.address}</span>
                    </div>
                    <div className={styles.userShowInfo}>

                      <div className={styles.userShowIcon}>
                        <i class='bx bx-calendar-alt'></i></div>
                      <span className={styles.userShowInfoTitle}>Education   :  {lawyer.education}</span>
                    </div>
                    {/* <span className={styles.userShowTitle}>Contact Details</span> */}
                    <div className={styles.userShowInfo}>
                      <div className={styles.userShowIcon}>
                        <i class='bx bx-calendar-alt'></i></div>
                      <span className={styles.userShowInfoTitle}>Experience  : {lawyer.experience}</span>
                    </div>
                    <div className={styles.userShowInfo}>
                      <div className={styles.userShowIcon}>
                        <i class='bx bx-calendar-alt'></i>
                      </div>
                      <span className={styles.userShowInfoTitle}>Language Known   :  {lawyer.languages} </span>
                    </div>
                    <div className={styles.userShowInfo}>
                      <div className={styles.userShowIcon} >
                        <i class='bx bx-calendar-alt'></i></div>
                      <span className={styles.userShowInfoTitle}>Practice Courts :  {lawyer.courts} </span>
                    </div>
                    <div className={styles.userShowInfo}>

                      <div className={styles.userShowIcon}>
                        <i class='bx bx-calendar-alt'></i></div>
                      <span className={styles.userShowInfoTitle}>Specialization    :  {lawyer.specialization}  </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* end */}
            </div>
          </div>
        </div>
      </div>
      {/* end coding */}


      <Footer />
    </div>
  )
}

export default Lawyer
