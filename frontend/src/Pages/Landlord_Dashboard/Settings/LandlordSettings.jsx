import React from "react";
import Sidebar from "../../../components/com.landlord/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";

const LandlordSettings = () => {
  const items = [
    { label: "settings", url: "/landlord/settings" }
  ];
  const home = { icon: "pi pi-th-large", url: "/landlord" };
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Settings</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.welcomemsg}>
            👋 Welcome Diwan, You're Back Again!
          </div>
          <div className={styles.contentbody}>Content Goes Here 👉</div>
        </div>
      </div>
    </div>
  );
};

export default LandlordSettings;
