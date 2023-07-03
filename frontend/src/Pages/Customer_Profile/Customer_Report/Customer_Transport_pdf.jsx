import React, { useRef } from "react";
import styles from "./customer_Tranport_pdf.module.css";
import Login from "../../../components/navbar/images/RentMate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faLocationCrosshairs,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const Customer_Transport_pdf = () => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);
  
    return (
      <div>
        {/* <ReactToPrint trigger={() => <button>Print</button>} content={() => ref.current}/> */}
  
        <div className={styles.CReportpage}>
          <div className={styles.CReportpage_header}>
            <div className={styles.layer1}>
              <div className={styles.CReportpage_logo}>
                <div className={styles.CReportpage_logo_container}>
                  <img src={Login} alt="site-logo" />
                  <div className={styles.CReportpage_logo_container_sitename}>
                    <span className={styles.sitename}>RentMate</span>
                  </div>
                </div>
              </div>
  
              <div className={styles.right_container}>
                <div className={styles.container_right}>
                  <div className={styles.lay1}>
                    <div className={styles.data}>
                      <span>077-XXXXXXX</span>
                      <span>076-XXXXXXX</span>
                    </div>
                    <div className={styles.data_icon}>
                      <FontAwesomeIcon icon={faMobileScreen} style={{color: "#ffffff",width: "20px",height: "20px",margin: "0 auto",marginTop: "10px"}} />
                    </div>
                  </div>
                  <div className={styles.lay1}>
                    <div className={styles.data}>
                      <span>WWW.rentmate.com</span>
                      <span>rentmatehelpdesk@gmail.com</span>
                    </div>
                    <div className={styles.data_icon}>
                      <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#ffffff",width: "20px",height: "20px",margin: "0 auto",marginTop: "10px"}} />
                    </div>
                  </div>
                  <div className={styles.lay1}>
                    <div className={styles.data}>
                      <span>
                        Pasan Mawatha,Weliwita <br />
                        Sri lanka
                      </span>
                    </div>
                    <div className={styles.data_icon}>
                      <FontAwesomeIcon icon={faLocationCrosshairs} style={{color: "#ffffff",width: "20px",height: "20px",margin: "0 auto",marginTop: "10px"}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className={styles.pdf_title}>
            <div className={styles.pdf_title_container}>
              <h1>Property Booking Reoprt</h1>
            </div>
            <div className={styles.date_container}>
                  <span>Date :</span>
                  <span>{currentDate}</span>
            </div>
          </div>
  
          <div className={styles.container_body}>
              <div className={styles.left_lay}>
                  <div className={styles.landloard_details}>
                      <div className={styles.landloard_title}>
                          <span>Transport Owner</span>
                      </div>
                      <div className={styles.landloard_data}>
                          <ul>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>Name :</span>
                                  <span className={styles.tag_value}>Eshan Imesh</span>
                              </div>
                            </li>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>Address :</span>
                                  <span className={styles.tag_value}>Malabe, Sri lanka</span>
                              </div>
                            </li>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>City :</span>
                                  <span className={styles.tag_value}>Malabe</span>
                              </div>
                            </li>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>Email :</span>
                                  <span className={styles.tag_value}>landlord@gmail.com</span>
                              </div>
                            </li>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>Phone :</span>
                                  <span className={styles.tag_value}>077-XXXXXXX</span>
                              </div>
                            </li>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>Type of vehicle :</span>
                                  <span className={styles.tag_value}>Lorry</span>
                              </div>
                            </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className={styles.right_lay}>
              <div className={styles.landloard_details}>
                      <div className={styles.landloard_title}>
                          <span>Customer</span>
                      </div>
                      <div className={styles.landloard_data}>
                          <ul>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>Name :</span>
                                  <span className={styles.tag_value}>Eshan Imesh</span>
                              </div>
                            </li>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>Address :</span>
                                  <span className={styles.tag_value}>Malabe, Sri lanka</span>
                              </div>
                            </li>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>City :</span>
                                  <span className={styles.tag_value}>Malabe</span>
                              </div>
                            </li>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>Email :</span>
                                  <span className={styles.tag_value}>landlord@gmail.com</span>
                              </div>
                            </li>
                            <li>
                              <div className={styles.data_div}>
                                  <span className={styles.tag}>Phone :</span>
                                  <span className={styles.tag_value}>077-XXXXXXX</span>
                              </div>
                            </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.description}>
              <div className={styles.property_desc}>
                <div className={styles.desc_title}>
                  <h1>Details</h1>
                </div>
                <div className={styles.property_desc_container}>
                      <ul>
                        <li>
                          <div className={styles.desc_div}>
                              <span className={styles.desc_tag}>Id :</span>
                              <span className={styles.desc_tag_value}>#01001235</span>
                          </div>
                        </li>
                        <li>
                          <div className={styles.desc_div}>
                              <span className={styles.desc_tag}>Destination(From) :</span>
                              <span className={styles.desc_tag_value}>Malabe</span>
                          </div>
                        </li>
                        <li>
                          <div className={styles.desc_div}>
                              <span className={styles.desc_tag}>Destination(To) :</span>
                              <span className={styles.desc_tag_value}>Kaduwela</span>
                          </div>
                        </li>
                        <li>
                          <div className={styles.desc_div}>
                              <span className={styles.desc_tag}>Booked Date :</span>
                              <span className={styles.desc_tag_value}>2023/04/22</span>
                          </div>
                        </li>
                        <li>
                          <div className={styles.desc_div}>
                              <span className={styles.desc_tag}>Total Distance(Km) :</span>
                              <span className={styles.desc_tag_value}>50Km</span>
                          </div>
                        </li>
                        <li>
                          <div className={styles.desc_div}>
                              <span className={styles.desc_tag}>Charge Per Kilometer :</span>
                              <span className={styles.desc_tag_value}>Rs.240.00/=</span>
                          </div>
                        </li>
                        <li>
                          <div className={styles.desc_div}>
                              <span className={styles.desc_tag}>Driver Name :</span>
                              <span className={styles.desc_tag_value}>Omer Thalib</span>
                          </div>
                        </li>
                      </ul>
                </div>
              </div>
              <div className={styles.property_payment}>
                  <div className={styles.desc_title}>
                      <h1>Payment Details</h1>
                  </div>
                  <div className={styles.payment_section}>
                        <div className={styles.pay_div}>
                            <span className={styles.pay_tag}>Charge Per Kilometer :</span>
                            <span className={styles.pay_tag_value}>Rs.240.00/=</span>
                        </div>
                        <div className={styles.pay_div}>
                            <span className={styles.pay_tag}>Total Destination(Km) :</span>
                            <span className={styles.pay_tag_value}>50Km</span>
                        </div>
                        <div className={styles.pay_div}>
                            <span className={styles.pay_tag}>Total Transport Charge :</span>
                            <span className={styles.pay_tag_value}>Rs.12,000/=</span>
                        </div>
                        <div className={styles.pay_div}>
                            <span className={styles.pay_tag}>Site Charge :</span>
                            <span className={styles.pay_tag_value}>Rs. 1200.00/=</span>
                        </div>
  
                        <div className={styles.total_pay}>
                            <span className={styles.pay_tot}>Total :</span>
                            <span className={styles.pay_tot_value}>Rs. 13,200.00/=</span>
                        </div>
                  </div>
              </div>
          </div>
          <div className={styles.signature_container}>
              <div className={styles.layout1}>
                <span>.......................</span>
                <span className={styles.signa_name}>Diwan Sachindu</span>
                <span className={styles.signa}>Landlord Signature</span>
              </div>
              <div className={styles.layout2}>
                <span>.......................</span>
                <span className={styles.signa_name}>Eshan Imesh</span>
                <span className={styles.signa}>Customer Signature</span>
              </div>
          </div>
          <div className={styles.footer_container}>
                <span>System Generated Document(Doucment Purpose Only)</span>
                <span>© All Right Reserved</span>
          </div>
        </div>
      </div>
    );
};

export default Customer_Transport_pdf
