import React from "react";
import Sidebar from "../../../../components/com.showRoom/sidebar/Sidebar";
import styles from '../../../../components/com.style/contentArea.module.css'
import styless from './viewShowroom.module.css'
import { BreadCrumb } from "primereact/breadcrumb";
import covershow from "../Images/covershow.jpg";


const ViewShowroom = () => {
  const items = [
    { label: "Dashboard", url: "/showroomOwner" },
    { label: "Showroom", url: "/showroomOwner/showroom" },
    {
      label: "View Showroom",
      url: "/showroomOwner/showroom/view-showroom",
    },
  ];
  const home = { icon: "pi pi-th-large", url: "/showroomOwner" };
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>View Showroom</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>
          <div className={styless.covershow}>
            <img src={covershow} alt=""/>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ViewShowroom;
