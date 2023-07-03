import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";
import styles from "./customer_Property.module.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Navigator from "../../../components/Customer_Profile/profile_nav/Profile_nav";
import Info_Card from "../../../components/Customer_Profile/info_card/Info_card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Toast } from 'primereact/toast';
import Swal from 'sweetalert2'

const Customer_Property = () => {
    const [isNameFormVisible, setNameFormVisible] = useState(false);
    const [isdelete,setdeletealert] = useState(false);
    const [isdataview,setdataview] = useState(false);
    const [allbookings,setallbookings] = useState([]);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const [customerinfo, setCustomerinfo] = useState({});
    const [customerinfo2, setCustomerinfo2] = useState({});
    const [email, setEmail] = useState('');
    const [phone,setphone] = useState('');
    const [name, setname] = useState('');
    const [address, setaddress] = useState('');
    

    const  userid = localStorage.getItem("id");
      

    const  getcustomerinfo = () => {
      axios(`http://localhost:7070/api/customer/customer_info/${userid}`)
        .then((res) => {
          setCustomerinfo(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const updateCusdata = (id) =>{
      console.log(id);
      setNameFormVisible(!isNameFormVisible);
      axios.put(`http://localhost:7070/api/customer/updatepropertybooking/${id}`,{
        cus_name: name,
        contactNo: phone,
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Updated Successfully!'
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }

    const handleNameFormVisibility = (booking) => {
        setNameFormVisible(!isNameFormVisible);
        setSelectedBooking(booking);
        getcustomerinfo();
      };


    const handleDalertVisibility = (id) => {
      console.log(id);
      axios.delete(`http://localhost:7070/api/customer/deletepropertybooking/${id}`) 
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Deleted Successfully!'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        }
        )
      })
      .catch((err) => {
        console.log(err);
        Swal.fire(
          'Error',
          'Check your inserted Details',
          'error'
        );
      });
      };


    const handleDataVisibility = (booking) => {
        setdataview(!isdataview);
        setSelectedBooking(booking);
      };

      const toast = useRef(null);

      useEffect(() => {

          //get user id from storage
          const userid = localStorage.getItem("id");

        function getTodo() {
          axios(`http://localhost:7070/api/customer/getpropertybooking/${userid}`) 
            .then((res) => {
              setallbookings(res.data)
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        getTodo();
      }, []);
      
  return (
    <div>
      <Toast ref={toast} />
        <Navbar />
      <div className={styles.master}>
        <Navigator />
        <div className={styles.profile_home}>
          <Info_Card />
          <div className={styles.main_card}>
             <div className={styles.cp_container} >
                <div className={styles.cp_container_title}>
                    <span className={styles.cp_container_title_span}>All About Your Bookings</span>
                    <span className={styles.cp_container_title_span_sub1}>manage your proprty booking here.(Limitaion for some Details Updating)</span>
                </div>
                <div className={styles.table_container_cp}>

                {/* form change infomation */}
                {isNameFormVisible && selectedBooking && (
                  <div className={styles.formE}>
                    <div className={styles.closeBtn}>
                    <FontAwesomeIcon className={styles.close} onClick={handleNameFormVisibility} icon={faXmark}/>
                    </div>
                    <div className={styles.form_cp_e}>
                    <form className={styles.form_cp}>
                    <div className={styles.input_container}>
                        <span className={styles.cp_span}>Customer Name:</span>
                        <input
                          placeholder={customerinfo.fname}
                          className={styles.cp_input}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>
                      <div className={styles.input_container}>
                        <span className={styles.cp_span}>Customer Contact Number:</span>
                        <input
                          placeholder={customerinfo.phone}
                          className={styles.cp_input}
                          onChange={(e) => setphone(e.target.value)}
                        />
                      </div>
                      <div className={styles.input_container}>
                        <span className={styles.cp_span}>Email :</span>
                        <input
                          className={styles.cp_input}
                          placeholder={customerinfo.email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className={styles.input_container}>
                        <span className={styles.cp_span}>Address:</span>
                        <input
                          placeholder={customerinfo.address}
                          className={styles.cp_input}
                          onChange={(e) => setaddress(e.target.value)}
                        />
                      </div>
                          <button type='submit'onClick={() => updateCusdata(selectedBooking._id)}>Submit</button>
                    </form>
                    </div>
                  </div>
                )}

                {/* delete alert
                {isdelete && (
                  <div className={styles.dalertForm}>
                      <div className={styles.form}>
                          <div className={styles.mark}>
                              <div className={styles.mark_content}>
                                  <FontAwesomeIcon icon={faExclamation} style={{color: "#e25c5c"}}/>
                              </div>
                          </div>
                          <div className={styles.Container}>
                              <span className={styles.spn_cp_alert}>Are You sure You want to delete your booking?</span>
                              <span className={styles.spn_cp_alert2}>(The booking canceling procedure will handle physicaly.
                                  It will take 2-3 working days to handle. You will be notified once it's done.)
                              </span>
                          </div>
                          <div className={styles.cp_delete_btn_conatier}>
                                <button className={styles.spn_cp_alert_btn_ok} onClick={showSuccess}>Ok</button>
                                <button className={styles.spn_cp_alert_btn_cancel} onClick={() => handleDataVisibility(booking)}>Cancel</button>
                          </div>
                  </div>
                  </div>
                )} */}

                {/* data view form */}
                {isdataview && selectedBooking && (
                  <div className={styles.dataForm}>
                    <div className={styles.closeBtn}>
                    <FontAwesomeIcon className={styles.close} onClick={handleDataVisibility} icon={faXmark} size='xl'/>
                    </div>
                      <div className={styles.data_view}>
                          <span className={styles.data_view_span}>See Full details about your booking</span>
                            <div className={styles.data_master}>
                            <h1 className={styles.data_master_h1}>Property Details</h1>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>Property Name :</span>
                                <span className={styles.data_container_span2}>{selectedBooking.propertyname}</span>
                              </div>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>Booked Date :</span>
                                <span className={styles.data_container_span2}>{selectedBooking.bookingDate}</span>
                              </div>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>Agrement Ending Date :</span>
                                <span className={styles.data_container_span2}>{selectedBooking.endDate}</span>
                              </div>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>No of Bed Rooms :</span>
                                <span className={styles.data_container_span2}>{selectedBooking.propRooms}</span>
                              </div>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>No of Bed :</span>
                                <span className={styles.data_container_span2}>{selectedBooking.propBeds}</span>
                              </div>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>No of Bath :</span>
                                <span className={styles.data_container_span2}>{selectedBooking.propBaths}</span>
                              </div>
                              <h1 className={styles.data_master_h1}>Payment Details</h1>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>Rent Fee per Month :</span>
                                <span className={styles.data_container_span2}>{selectedBooking.propprice}</span>
                              </div>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>Agrement Period (Months) :</span>
                                <span className={styles.data_container_span2}>Eshan Imesh</span>
                              </div>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>Total Property Charge :</span>
                                <span className={styles.data_container_span2}>{selectedBooking.propcalculatedPrice}</span>
                              </div>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>Rentmate service Charge :</span>
                                <span className={styles.data_container_span2}>{selectedBooking.proptaxPrice}</span>
                              </div>
                              <div className={styles.data_container}>
                                <span className={styles.data_container_span1}>Total Paid :</span>
                                <span className={styles.data_container_span2}>{selectedBooking.amount}</span>
                              </div>
                            </div>
                      </div>
                  </div>
                )}

                <div className={styles.tablecontainer}>
                    <table className={styles.table_cp}>
                      <tr className={styles.table_cp_tr1}>
                        <th className={styles.table_cp_th}>Name</th>
                        <th className={styles.table_cp_th}>Type</th>
                        <th className={styles.table_cp_th}>Booked Date</th>
                        <th className={styles.table_cp_th}>End Date</th>
                        <th className={styles.table_cp_th3}>Action</th>
                      </tr>
                      {allbookings.map((booking) => (
                        <tr key={booking.id} className={styles.table_cp_tr2}>
                          <td className={styles.table_cp_td}>{booking.propertyname}</td>
                          <td className={styles.table_cp_td}>{booking.type}</td>
                          <td className={styles.table_cp_td}>{booking.bookingDate}</td>
                          <td className={styles.table_cp_td}>{booking.endDate}</td>
                          <td className={styles.table_cp_td}>
                            <div className={styles.table_btn_conatiner}>
                              <button className={styles.eshan_btn_up} onClick={() => handleNameFormVisibility(booking)}>Update</button>
                              <button className={styles.eshan_btn_can} onClick={() => handleDalertVisibility(booking._id)}>Cancel</button>
                              <button className={styles.eshan_btn_vi} onClick={() => handleDataVisibility(booking)}>View</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </table>
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

export default Customer_Property;
