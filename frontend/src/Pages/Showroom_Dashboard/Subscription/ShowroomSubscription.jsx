import React from "react";
import Swal from 'sweetalert2'
import Sidebar from "../../../components/com.showRoom/sidebar/Sidebar";
import styles from '../../../components/com.style/contentArea.module.css'
import styless from './showroomsubs.module.css'
import { BreadCrumb } from "primereact/breadcrumb";

const ShowroomSubscription = () => {
  const items = [
    { label: "Subscription", url: "/showroomOwner/subscription" }
  ];
  const home = { icon: "pi pi-th-large", url: "/showroomOwner" };

  const role = localStorage.getItem('role');

  const paid = localStorage.getItem('paid');

  if (paid === "true") {
    Swal.fire(
      'All good!',
      'You are good to go with the subcription',
      'success'
    ).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/showroomOwner";
      }
    })
  }

  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Subscription</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>

            <div class={styless.body1}>
              <div class={styless.pricing_table}>

                <div class={styless.pricing_card}>
                  <h3 class={styless.pricing_card_header}>Subscription</h3>
                  <div class={styless.price}>10,000<sup>LKR/month</sup></div>
                  <ul class={styless.ul_content}>
                    <li>can add <strong>100 furnitures</strong></li>
                    <li>Generate report</li>
                    <li>Easily access</li>
                  </ul>
                  <a href={`/payment/${role}`} class={styless.pay_btn}>Pay Now</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ShowroomSubscription;
