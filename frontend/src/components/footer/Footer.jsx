import React from 'react'
import './footer.css'
import Visa from './images/visa.png'
import Mastercard from './images/mastercard.png'
import Discover from './images/discover.png'
import AmericanExpress from './images/american-express.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Propeties</a></li>
            <li><a href="#">Transport</a></li>
            <li><a href="#">Lawyers</a></li>
            <li><a href="#">Furniture Showrooms</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Guidlines</a></li>
            <li><a href="#">Support Center</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="payment-methods">
          <div className="social-buttons">
            <a href="#"><i className="pi pi-facebook"></i></a>
            <a href="#"><i className="pi pi-instagram"></i></a>
            <a href="#"><i className="pi pi-send"></i></a>
            <a href="#"><i className="pi pi-reddit"></i></a>
            <a href="#"><i className="pi pi-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer