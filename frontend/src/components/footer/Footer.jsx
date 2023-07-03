import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import Visa from "./images/visa.png";
import Matercard from "./images/mastercard.png";
import Discover from "./images/discover.png";
import AmericanExpress from "./images/american-express.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.topmenu}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>About Us</h3>
            <ul>
              <li>
                <Link to="/our-story" className={styles.link}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/our-team" className={styles.link}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className={styles.link}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/feedback" className={styles.link}>
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="/properties" className={styles.link}>
                  Propeties
                </Link>
              </li>
              <li>
                <Link to="/transports" className={styles.link}>
                  Transport
                </Link>
              </li>
              <li>
                <Link to="/lawyers" className={styles.link}>
                  Lawyers
                </Link>
              </li>
              <li>
                <Link to="/showrooms" className={styles.link}>
                  Furniture Showrooms
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Resources</h3>
            <ul>
              <li>
                <Link to="/blog" className={styles.link}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className={styles.link}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className={styles.link}>
                  Guidlines
                </Link>
              </li>
              <li>
                <Link to="/support-center" className={styles.link}>
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Newsletter</h3>
            <form action="">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.bottommenu}>
        <div className={styles.left}>
          <img src={Visa} alt="visa-card" />
          <img src={Matercard} alt="matercard-card" />
          <img src={Discover} alt="discover-card" />
          <img src={AmericanExpress} alt="american-express-card" />
        </div>
        <div className={styles.right}>
          <a href="https://facebook.com">
            <i class="bx bxl-facebook-circle"></i>
          </a>
          <a href="https://instagram.com">
            <i class="bx bxl-instagram-alt"></i>
          </a>
          <a href="https://tiktok.com">
            <i class="bx bxl-tiktok"></i>
          </a>
          <a href="https://twitter.com">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="https://reddit.com">
            <i class="bx bxl-reddit"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
