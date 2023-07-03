import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./contactus.css";
import Email from "./image/email.png";
import Location from "./image/location.png";
import Phone from "./image/phone.png";
import Shape from "./image/shape.png";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div class="container">
        <span class="big-circle"></span>
        <img src={Shape} class="square" alt="" />
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div class="info">
              <div class="information">
                <img src={Location} class="icon" alt="" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div class="information">
                <img src={Email} class="icon" alt="" />
                <p>lorem@ipsum.com</p>
              </div>
              <div class="information">
                <img src={Phone} class="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>

            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="#">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
                <a href="#">
                  <i class="bx bxl-twitter"></i>
                </a>
                <a href="#">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a href="#">
                  <i class="bx bxl-reddit"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="#" autocomplete="off">
              <h3 class="title">Contact us</h3>
              <div class="input-container">
                <input type="text" name="name" class="input" placeholder="Username"/>
                {/* <label for="">Username</label> */}
                {/* <span>Username</span> */}
              </div>
              <div class="input-container">
                <input type="email" name="email" class="input" placeholder="Email"/>
                {/* <label for="">Email</label> */}
                {/* <span>Email</span> */}
              </div>
              <div class="input-container">
                <input type="tel" name="phone" class="input" placeholder="Mobile Number"/>
                {/* <label for="">Phone</label> */}
                {/* <span>Phone</span> */}
              </div>
              <div class="input-container textarea">
                <textarea name="message" class="input" placeholder="Message"></textarea>
                {/* <label for="">Message</label> */}
                {/* <span>Message</span> */}
              </div>
              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
