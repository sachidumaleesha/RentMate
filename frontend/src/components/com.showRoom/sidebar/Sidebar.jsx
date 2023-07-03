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
    if (path === "/showroomOwner") {
      setActiveLink("dashboard");
    } else if (path === "/showroomOwner/showroom") {
      setActiveLink("showroom");
    } else if (path === "/showroomOwner/showroom/view-showroom") {
      setActiveLink("showroom");
    } else if (path === "/showroomOwner/showroom/update-showroom") {
      setActiveLink("showroom");
    } else if (path === "/showroomOwner/furnitures") {
      setActiveLink("furnitures");
    } else if (path === "/showroomOwner/furnitures/add-furniture") {
      setActiveLink("furnitures");
    } else if (path === "/showroomOwner/furnitures/update-furniture") {
      setActiveLink("furnitures");
    } else if (path === "/showroomOwner/subscription") {
      setActiveLink("subscription");
    } else if (path === "/showroomOwner/settings") {
      setActiveLink("settings");
    } else if (path === "/showroomOwner/profile") {
      setActiveLink("profile");
    } else if (path === "/showroomOwner/logout") {
      setActiveLink("logout");
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
              <div className={styles.name}>Shop Dashboard</div>
              <div className={styles.role}>Showroom Owner</div>
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
                  href="/showroomOwner"
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
                  href="/showroomOwner/showroom"
                  id="showroom"
                  className={activeLink === "showroom" ? styles.active : ""}
                >
                  <span className={styles.icon}>
                    <i class="bx bxs-store"></i>
                  </span>
                  <span className={styles.navtext}>Showroom</span>
                </a>
              </li>
              <li className={styles.navlink}>
                <a
                  href="/showroomOwner/furnitures"
                  id="furnitures"
                  className={activeLink === "furnitures" ? styles.active : ""}
                >
                  <span className={styles.icon}>
                    <i class="bx bx-chair"></i>
                  </span>
                  <span className={styles.navtext}>Furnitures</span>
                </a>
              </li>
              <li className={styles.navlink}>
                <a
                  href="/showroomOwner/subscription"
                  id="subscription"
                  className={activeLink === "subscription" ? styles.active : ""}
                >
                  <span className={styles.icon}>
                    <i class="bx bxs-wallet-alt"></i>
                  </span>
                  <span className={styles.navtext}>Subscription</span>
                </a>
              </li>
              <li className={styles.navlink}>
                <a
                  href="/showroomOwner/settings"
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
                href="/showroomOwner/profile"
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