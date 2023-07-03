import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import Lawyer_SideBar from '../../../components/LawyerProfile_SideBar/Lawyer_SideBar'
import styles from './subscriptionLawyer.module.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const SubscriptionLawyer = () => {

  const role = localStorage.getItem('role');

  const navigate = useNavigate();

  const paid = localStorage.getItem('paid');

  if (paid === 'true') {
    Swal.fire(
      'Good to go',
      'You have already paid the subscription fee!',
      'success'
    ).then(() => {
      navigate("/lawyer");
    })
  }


  return (
    <div>
      <Navbar />
      <div className={styles.master}>
        <div className={styles.profile_home}>
          <Lawyer_SideBar />
          <div className={styles.main_card}>
            <div className={styles.subcard}>

              {/* start coding */}


              <div class={styles.body1}>
                <div class={styles.pricing_table}>

                  <div class={styles.pricing_card}>
                    <h3 class={styles.pricing_card_header}>Subscription</h3>
                    <div class={styles.price}>5,000<sup>LKR/month</sup></div>
                    <ul class={styles.ul_content}>
                      <li>👉<strong>Add your Service</strong></li>
                      <li>for</li>
                      <li>increase client base</li>
                      <li>and</li>
                      <li>monthly income</li>
                    </ul>
                    <a href={`/payment/${role}`} class={styles.pay_btn}>Pay Now</a>

                  </div>
                </div>
              </div>


              {/* end coding */}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default SubscriptionLawyer


