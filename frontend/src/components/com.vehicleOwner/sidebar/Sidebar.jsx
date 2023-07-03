// import React, { useState, useEffect } from "react";
// import styles from "../../com.style/sidebar.module.css";
// import Logo from "../images/RentMate.png";

// const Sidebar = () => {
//   const [activeLink, setActiveLink] = useState("dashboard"); // initial active state set to "dashboard"

//   const handleLinkClick = (event) => {
//     const clickedLink = event.target.closest("a"); // get the nearest parent 'a' tag of the clicked element
//     if (clickedLink) {
//       setActiveLink(clickedLink.id); // set the active link state to the ID of the clicked link
//     }
//   };

//   useEffect(() => {
//     const linkColor = document.querySelectorAll("a"); // select all link elements
//     linkColor.forEach((l) => l.addEventListener("click", handleLinkClick)); // add click event listener to each link element

//     // Cleanup function to remove event listeners when component unmounts
//     return () => {
//       linkColor.forEach((l) => l.removeEventListener("click", handleLinkClick));
//     };
//   }, []); // Empty dependency array to ensure effect runs only once, similar to componentDidMount

//   useEffect(() => {
//     // Set the active link based on the current URL path
//     const path = window.location.pathname;
//     if (path === "/vehicleOwner") {
//       setActiveLink("dashboard");
//     } else if (path === "/vehicleOwner/vehicles") {
//       setActiveLink("vehicles");
//     }else if (path === "/vehicleOwner/bookings") {
//       setActiveLink("bookings");
//     } else if (path === "/vehicleOwner/revenue") {
//       setActiveLink("revenue");
//     }else if (path === "/vehicleOwner/settings") {
//       setActiveLink("settings");
//     } else if (path === "/vehicleOwner/profile") {
//       setActiveLink("profile");
//     } else if (path === "/vehicleOwner/logout") {
//       setActiveLink("logout");
//     }else if (path === "/vehicleOwner/vehicles/add-vehicle") {
//       setActiveLink("vehicles");
//     }else if (path === "/vehicleOwner/vehicles/update-vehicle") {
//       setActiveLink("vehicles");
//     }
//   }, []);

//   return (
//     <div>
//       <nav className={styles.sidebar}>
//         <header>
//           <div className={styles.imagetext}>
//             <span className={styles.image}>
//               <img src={Logo} alt="" className={styles.sitelogo} />
//             </span>

//             <div className={styles.text}>
//               <div className={styles.name}>Vehicle Dashboard</div>
//               <div className={styles.role}>Vehicle Owner</div>
//             </div>
//           </div>
//           <a href="/" target="_blank">
//             <div className={styles.visitsite}>
//               Visit Site
//               <i class="bx bx-link-external"></i>
//             </div>
//           </a>
//         </header>
//         <hr className={styles.line} />
//         <div className={styles.menubar}>
//           <div className="menu">
//             <ul className="menulinks">
//               <li className={styles.navlink}>
//                 <a
//                   href="/vehicleOwner"
//                   id="dashboard"
//                   className={activeLink === "dashboard" ? styles.active : ""}
//                 >
//                   <span className={styles.icon}>
//                     <i className="bx bxs-grid-alt"></i>
//                   </span>
//                   <span className={styles.navtext}>Dashboard</span>
//                 </a>
//               </li>
//               <li className={styles.navlink}>
//                 <a
//                   href="/vehicleOwner/vehicles"
//                   id="vehicles"
//                   className={activeLink === "vehicles" ? styles.active : ""}
//                 >
//                   <span className={styles.icon}>
//                     <i class="bx bxs-truck"></i>
//                   </span>
//                   <span className={styles.navtext}>Vehicles</span>
//                 </a>
//               </li>
//               <li className={styles.navlink}>
//                 <a
//                   href="/vehicleOwner/bookings"
//                   id="bookings"
//                   className={activeLink === "bookings" ? styles.active : ""}
//                 >
//                   <span className={styles.icon}>
//                     <i class="bx bxs-shopping-bag-alt"></i>
//                   </span>
//                   <span className={styles.navtext}>Bookings</span>
//                 </a>
//               </li>
//               <li className={styles.navlink}>
//                 <a
//                   href="/vehicleOwner/revenue"
//                   id="revenue"
//                   className={activeLink === "revenue" ? styles.active : ""}
//                 >
//                   <span className={styles.icon}>
//                     <i className="bx bxs-bar-chart-alt-2"></i>
//                   </span>
//                   <span className={styles.navtext}>Revenue</span>
//                 </a>
//               </li>
//               <li className={styles.navlink}>
//                 <a
//                   href="/vehicleOwner/settings"
//                   id="settings"
//                   className={activeLink === "settings" ? styles.active : ""}
//                 >
//                   <span className={styles.icon}>
//                     <i className="bx bxs-cog"></i>
//                   </span>
//                   <span className={styles.navtext}>Settings</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="bottomcontent">
//             <hr className={styles.bottomline} />
//             <li className={styles.navlink}>
//               <a
//                 href="/vehicleOwner/profile"
//                 id="profile"
//                 className={activeLink === "profile" ? styles.active : ""}
//               >
//                 <span className={styles.icon}>
//                   <i className="bx bxs-user"></i>
//                 </span>
//                 <span className={styles.navtext}>Profile</span>
//               </a>
//             </li>
//             <li className={styles.navlink}>
//               <a
//                 href="#"
//                 id="logout"
//                 className={activeLink === "logout" ? styles.active : ""}
//               >
//                 <span className={styles.icon}>
//                   <i className="bx bx-log-out"></i>
//                 </span>
//                 <span className={styles.navtext}>Logout</span>
//               </a>
//             </li>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState, useEffect } from "react";
import styles from "../../com.style/sidebar.module.css";
import Logo from "../images/RentMate.png";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("dashboard"); // initial active state set to "dashboard"

  const handleLinkClick = (event) => {
    const clickedLink = event.target.closest("a"); // get the nearest parent 'a' tag of the clicked element
    if (clickedLink) {
      setActiveLink(clickedLink.id); // set the active link state to the ID of the clicked link
    }
  };

  useEffect(() => {
    const linkColor = document.querySelectorAll("a"); // select all link elements
    linkColor.forEach((l) => l.addEventListener("click", handleLinkClick)); // add click event listener to each link element

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      linkColor.forEach((l) => l.removeEventListener("click", handleLinkClick));
    };
  }, []); // Empty dependency array to ensure effect runs only once, similar to componentDidMount

  useEffect(() => {
    // Set the active link based on the current URL path
    const path = window.location.pathname;
    if (path === "/vehicleOwner") {
      setActiveLink("dashboard");
    } else if (path === "/vehicleOwner/vehicles") {
      setActiveLink("vehicles");
    } else if (path === "/vehicleOwner/bookings") {
      setActiveLink("bookings");
    } else if (path === "/vehicleOwner/revenue") {
      setActiveLink("revenue");
    } else if (path === "/vehicleOwner/settings") {
      setActiveLink("settings");
    } else if (path === "/vehicleOwner/profile") {
      setActiveLink("profile");
    } else if (path === "/vehicleOwner/logout") {
      setActiveLink("logout");
    } else if (path === "/vehicleOwner/vehicles/add-vehicle") {
      setActiveLink("vehicles");
    } else if (path === "/vehicleOwner/vehicles/update-vehicle") {
      setActiveLink("vehicles");
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <div>
      <nav className={styles.sidebar}>
        <header>
          <div className={styles.imagetext}>
            <span className={styles.image}>
              <img src={Logo} alt="" className={styles.sitelogo} />
            </span>

            <div className={styles.text}>
              <div className={styles.name}>Vehicle Dashboard</div>
              <div className={styles.role}>Vehicle Owner</div>
            </div>
          </div>
          <a href="/" target="_blank">
            <div className={styles.visitsite}>
              Visit Site
              <i class="bx bx-link-external"></i>
            </div>
          </a>
        </header>
        <hr className={styles.line} />
        <div className={styles.menubar}>
          <div className="menu">
            <ul className="menulinks">
              <li className={styles.navlink}>
                <a
                  href="/vehicleOwner"
                  id="dashboard"
                  className={activeLink === "dashboard" ? styles.active : ""}
                >
                  <span className={styles.icon}>
                    <i className="bx bxs-grid-alt"></i>
                  </span>
                  <span className={styles.navtext}>Dashboard</span>
                </a>
              </li>
              <li className={styles.navlink}>
                <a
                  href="/vehicleOwner/vehicles"
                  id="vehicles"
                  className={activeLink === "vehicles" ? styles.active : ""}
                >
                  <span className={styles.icon}>
                    <i class="bx bxs-truck"></i>
                  </span>
                  <span className={styles.navtext}>Vehicles</span>
                </a>
              </li>
              <li className={styles.navlink}>
                <a
                  href="/vehicleOwner/bookings"
                  id="bookings"
                  className={activeLink === "bookings" ? styles.active : ""}
                >
                  <span className={styles.icon}>
                    <i class="bx bxs-shopping-bag-alt"></i>
                  </span>
                  <span className={styles.navtext}>Bookings</span>
                </a>
              </li>
              <li className={styles.navlink}>
                <a
                  href="/vehicleOwner/revenue"
                  id="revenue"
                  className={activeLink === "revenue" ? styles.active : ""}
                >
                  <span className={styles.icon}>
                    <i className="bx bxs-bar-chart-alt-2"></i>
                  </span>
                  <span className={styles.navtext}>Revenue</span>
                </a>
              </li>
              <li className={styles.navlink}>
                <a
                  href="/vehicleOwner/settings"
                  id="settings"
                  className={activeLink === "settings" ? styles.active : ""}
                >
                  <span className={styles.icon}>
                    <i className="bx bxs-cog"></i>
                  </span>
                  <span className={styles.navtext}>Settings</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottomcontent">
            <hr className={styles.bottomline} />
            <li className={styles.navlink}>
              <a
                href="/vehicleOwner/profile"
                id="profile"
                className={activeLink === "profile" ? styles.active : ""}
              >
                <span className={styles.icon}>
                  <i className="bx bxs-user"></i>
                </span>
                <span className={styles.navtext}>Profile</span>
              </a>
            </li>
            <li className={styles.navlink}>
              <a
                href="#"
                id="logout"
                className={activeLink === "logout" ? styles.active : ""}
              >
                <span className={styles.icon}>
                  <i className="bx bx-log-out"></i>
                </span>
                <span className={styles.navtext} onClick={() => {
                  logout();
                }}>Logout</span>
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;