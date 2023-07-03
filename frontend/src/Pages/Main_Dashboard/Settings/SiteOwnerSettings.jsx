import React from "react";
import Sidebar from "../../../components/com.mainDashboard/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";

const SiteOwnerSettings = () => {
  const items = [
    { label: "Settings", url: "/siteowner/settings" }
  ];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };
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
          <div className={styles.contentbody}>Content Goes Here 👉</div>
        </div>
      </div>
    </div>
  );
};

export default SiteOwnerSettings;
