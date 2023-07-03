import React from "react";
import "./customer_settings.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Navigator from "../../../components/Customer_Profile/profile_nav/Profile_nav";
import Info_Card from "../../../components/Customer_Profile/info_card/Info_card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faEye,faAddressCard, faFile } from "@fortawesome/free-regular-svg-icons";

const Customer_Settings = () => {
  return (
    <div>
      <Navbar />
      <div className="customer_settings_master">
        <Navigator />
        <div className="customer_settings_profile_home">
          <Info_Card />
          <div className="customer_settings_main_card">
            <div className="customer_settings_button_container_layer1">
              <div className="settings_button">
                <a href="setting/info" id="personal">
                  <div className="button_inlayer">
                    <div className="button_icon">
                    <FontAwesomeIcon className="icon_set" icon={faAddressCard} />
                    </div>
                    <div className="button_info">
                      <div className="title">Personal Info</div>
                      <div className="button_des">Change Your Personal Details here</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="settings_button">
              <a href="setting/security" id="login">
                  <div className="button_inlayer">
                    <div className="button_icon">
                    <FontAwesomeIcon className="icon_set"  icon={faShieldHalved}/>
                    </div>
                    <div className="button_info">
                      <div className="title">Login & Security</div>
                      <div className="button_des">Change your password and Social Logins here</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="customer_settings_button_container_layer2">
              <div className="settings_button">
              <a href="setting/privacy" id="personal">
                  <div className="button_inlayer">
                    <div className="button_icon">
                    <FontAwesomeIcon className="icon_set"  icon={faEye}/>
                    </div>
                    <div className="button_info">
                      <div className="title">Privacy & Policy</div>
                      <div className="button_des">Deactivate account</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="settings_button">
              <a href="setting/report" id="personal">
                  <div className="button_inlayer">
                    <div className="button_icon">
                    <FontAwesomeIcon className="icon_set"  icon={faFile}/>
                    </div>
                    <div className="button_info">
                      <div className="title">Generate Report</div>
                      <div className="button_des">Generate fully detailed documents about bookings here</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customer_Settings;
