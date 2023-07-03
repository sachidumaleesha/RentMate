import React from "react";
import styles from "./customer_Report.module.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Navigator from "../../../components/Customer_Profile/profile_nav/Profile_nav";
import Info_Card from "../../../components/Customer_Profile/info_card/Info_card";
import Customer_Propety_pdf from "./Customer_Propety_pdf.jsx";
import ReactToPrint from "react-to-print";
import Customer_Transport_pdf from "./Customer_Transport_pdf.jsx";

const Customer_Report = () => {
  const componentRef = React.useRef();
  const componentRef2 = React.useRef();

  return (
    <div>
      <div ref={componentRef}>
        <Customer_Propety_pdf />
      </div>
      <div ref={componentRef2}>
        <Customer_Transport_pdf />
      </div>
      <Navbar />
      <div className={styles.master}>
        <Navigator />
        <div className={styles.profile_home}>
          <Info_Card />
          <div className={styles.main_card}>
            <div className={styles.title}>
              <h1>Generate Report</h1>
              <span className={styles.Espan}>
                You can generate fully detailed document about your property
                booking and transport booking.
              </span>
            </div>
            <div className={styles.container}>
              <div className={styles.layer1}>
                <div className={styles.upper}>
                  <h1>Properties Booked</h1>
                </div>
                <div className={styles.contentE}>
                  <div className={styles.tablecontainer}>
                    <table className={styles.table_cp}>
                      <tr className={styles.table_cp_tr1}>
                        <th className={styles.table_cp_th}>Id</th>
                        <th className={styles.table_cp_th}>City</th>
                        <th className={styles.table_cp_th}>Date</th>
                        <th className={styles.table_cp_th}>Type</th>
                        <th className={styles.table_cp_th}></th>
                      </tr>
                      <tr className={styles.table_cp_tr2}>
                        <td className={styles.table_cp_td}>011</td>
                        <td className={styles.table_cp_td}>Malabe</td>
                        <td className={styles.table_cp_td}>2023</td>
                        <td className={styles.table_cp_td}>Vila</td>
                        <td className={styles.table_cp_td}>
                          <ReactToPrint
                              trigger={() => <button className={styles.eshan_btn}>Generate</button>}
                              content={() => componentRef.current}
                            />
                        </td>
                      </tr>
                      <tr className={styles.table_cp_tr2}>
                        <td className={styles.table_cp_td}>011</td>
                        <td className={styles.table_cp_td}>Malabe</td>
                        <td className={styles.table_cp_td}>2023</td>
                        <td className={styles.table_cp_td}>Vila</td>
                        <td className={styles.table_cp_td}>
                          <ReactToPrint
                              trigger={() => <button className={styles.eshan_btn}>Generate</button>}
                              content={() => componentRef.current}
                            />
                        </td>
                      </tr>
                      <tr className={styles.table_cp_tr2}>
                        <td className={styles.table_cp_td}>011</td>
                        <td className={styles.table_cp_td}>Malabe</td>
                        <td className={styles.table_cp_td}>2023</td>
                        <td className={styles.table_cp_td}>Vila</td>
                        <td className={styles.table_cp_td}>
                          <ReactToPrint
                              trigger={() => <button className={styles.eshan_btn}>Generate</button>}
                              content={() => componentRef.current}
                            />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className={styles.layer2}>
                <div className={styles.upper}>
                  <h1>Transport Booked</h1>
                </div>
                <div className={styles.contentE}>
                  <div className={styles.tablecontainer}>
                  <table className={styles.table_cp}>
                      <tr className={styles.table_cp_tr1}>
                        <th className={styles.table_cp_th}>Id</th>
                        <th className={styles.table_cp_th}>From</th>
                        <th className={styles.table_cp_th}>To</th>
                        <th className={styles.table_cp_th}>Vehicle Type</th>
                        <th className={styles.table_cp_th}>Date</th>
                        <th className={styles.table_cp_th}></th>
                      </tr>

                      <tr className={styles.table_cp_tr2}>
                        <td className={styles.table_cp_td}>011</td>
                        <td className={styles.table_cp_td}>Malabe</td>
                        <td className={styles.table_cp_td}>Kaduwela</td>
                        <td className={styles.table_cp_td}>Lorry</td>
                        <td className={styles.table_cp_td}>2023/04/23</td>
                        <td className={styles.table_cp_td}>
                          <ReactToPrint
                            trigger={() => (
                              <button className={styles.eshan_btn}>
                                Generate
                              </button>
                            )}
                            content={() => componentRef2.current}
                          />
                        </td>
                      </tr>
                      <tr className={styles.table_cp_tr2}>
                        <td className={styles.table_cp_td}>011</td>
                        <td className={styles.table_cp_td}>Malabe</td>
                        <td className={styles.table_cp_td}>Kaduwela</td>
                        <td className={styles.table_cp_td}>Lorry</td>
                        <td className={styles.table_cp_td}>2023/04/23</td>
                        <td className={styles.table_cp_td}>
                          <ReactToPrint
                            trigger={() => (
                              <button className={styles.eshan_btn}>
                                Generate
                              </button>
                            )}
                            content={() => componentRef2.current}
                          />
                        </td>
                      </tr>
                      <tr className={styles.table_cp_tr2}>
                        <td className={styles.table_cp_td}>011</td>
                        <td className={styles.table_cp_td}>Malabe</td>
                        <td className={styles.table_cp_td}>Kaduwela</td>
                        <td className={styles.table_cp_td}>Lorry</td>
                        <td className={styles.table_cp_td}>2023/04/23</td>
                        <td className={styles.table_cp_td}>
                          <ReactToPrint
                            trigger={() => (
                              <button className={styles.eshan_btn}>
                                Generate
                              </button>
                            )}
                            content={() => componentRef2.current}
                          />
                        </td>
                      </tr>
                      <tr className={styles.table_cp_tr2}>
                        <td className={styles.table_cp_td}>011</td>
                        <td className={styles.table_cp_td}>Malabe</td>
                        <td className={styles.table_cp_td}>Kaduwela</td>
                        <td className={styles.table_cp_td}>Lorry</td>
                        <td className={styles.table_cp_td}>2023/04/23</td>
                        <td className={styles.table_cp_td}>
                          <ReactToPrint
                            trigger={() => (
                              <button className={styles.eshan_btn}>
                                Generate
                              </button>
                            )}
                            content={() => componentRef2.current}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customer_Report;
