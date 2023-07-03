import React from "react";
import { Link } from "react-router-dom";
import Login from "./images/RentMate.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  const id = localStorage.getItem("id");
  const role = localStorage.getItem("role");
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <Link to="/" className={styles.link}>
            <img src={Login} alt="site-logo" />
            <span className={styles.sitename}>RentMate</span>
          </Link>
        </div>
        <div className={styles.right}>
          
        {id ? (
            <button onClick={handleLogout} className={styles.link}>
              Logout
            </button>
          ) : (
            <>
              <button>
                <Link to="/signup" className={styles.link}>Signup</Link>
              </button>
              <button>
                <Link to="/login" className={styles.link}>Login</Link>
              </button>
            </>
          )

          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
