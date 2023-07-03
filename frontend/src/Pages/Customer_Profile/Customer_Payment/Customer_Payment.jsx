import React, { useEffect, useState ,useRef, Component} from "react";
import axios from "axios"
import styles from "./customer_Payment.module.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Navigator from "../../../components/Customer_Profile/profile_nav/Profile_nav";
import Info_Card from "../../../components/Customer_Profile/info_card/Info_card";
import img2 from "./images/chip.png";
import img3 from "./images/visa_R.png";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
import { Card } from 'primereact/card';
import { useNavigate } from "react-router-dom";
import 'primeicons/primeicons.css';
import 'primeicons/primeicons.css';
import ReactToPrint from "react-to-print";
import Reporttransaction from '../../../components/com.card/Reporttransaction';

const Customer_Payment = () => {

  const componentRef = useRef();
  const toast = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [cards, setCards] = useState([]);
  const [reservation, setReservation] = useState([]);

  useEffect(() =>{
    function getCards(){
      axios.get("http://localhost:7070/card/").then((res) =>{
        setCards(res.data)
      }).catch((err) => {
        alert(err.message);
      })
    }

    function getReservationDetails(){
      axios.get("http://localhost:7070/reservation/").then((res) =>{
        setReservation(res.data)
      }).catch((err) => {
        alert(err.message);
      })
    }

    getReservationDetails();
    getCards();
  }, [])

  const navigate = useNavigate()

  const filteredData = cards.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.cardType} ${data.name} ${data.cardNumber} ${data.Exp_month} ${data.Exp_year} ${data.cvv}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  const filteredreservationData = reservation.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.cardNumber} ${data.reserveItem} ${data.bookingDate} ${data.amount}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  // Delete Function Call
  const delelecard = (id) => {
    axios
      .delete(`http://localhost:7070/card/delete/${id}`)
      .then((res) => {
     
        console.log(res);
        console.log(res.date);
        window.location.reload();
      });
  };

  const updatefunc =(id) =>{
    navigate('/customer/updatecard', {state:{id}})
  }

  return (
    <div>
      <Navbar />
      <div className={styles.master}>
        <Navigator />
            <div ref ={componentRef}>
              <Reporttransaction/>
            </div>
        <div className={styles.profile_home}>
          <Info_Card />
          <div className={styles.main_card}>
            {/* <div className={styles.method_Container}> */}
            <Card title="Payment Methods" className={styles.payment_method}>
              <Link to="/customer/addcard">
                  <Button
                    label="Add Card"
                    severity="secondary"
                    raised
                    className={styles.function_btn}
                  />
              </Link>

              <div className={styles.tablearea__content}>
          <table>
              <tr>
                <th>Card Type</th>
                <th>Card Holder</th>
                <th>Card Number</th>
                <th>Expiry Month</th>
                <th>Expiry Year</th>
                <th>CVV</th>
              </tr>
              {filteredData.map((data) => (
                <tr key={data.id}>
                  <td>{data.cardType}</td>
                  <td>{data.name}</td>
                  <td>{data.cardNumber}</td>
                  <td>{data.Exp_month}</td>
                  <td>{data.Exp_year}</td>
                  <td>{data.cvv}</td>
                  <td>
                    <Button label="Update" severity="success" raised onClick={()=>{updatefunc(data._id)}} />
                    <Button
                      // label="Delete"
                      icon="pi pi-trash"
                      className={styles.delete_btnN}
                      severity="danger"
                      raised
                      onClick={()=>{delelecard(data._id)}}>
                        {/* <i className="pi pi-times" style={{ fontSize: '1.5rem' }}></i> */}
                    </Button>
                    
                  </td>
                </tr>
              ))}
            </table>
           </div>

            </Card>
            {/* </div> */}
            <div className={styles.transec}>
              <Card title="Billing History" className={styles.history_contain}>
              <div className={styles.top__content}>
            <div className={styles.left__side}>
              <input
                type="search"
                placeholder="Search..."
                className="form-control search-input"
                data-table="dataTable-list"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className={styles.right__side}>
              <ReactToPrint
                trigger={() => (
                  <Button variant="contained" color="primary">
                    Print
                  </Button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </div>
              <div className={styles.trans_table} ref={componentRef}>
                <table>
                  <thead>
                    <tr>
                      <th>Card Number</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredreservationData.map((data) => (
                    <tr>
                      <td>{data.cardNumber}</td>
                      <td>{data.reserveItem}</td>
                      <td>{data.bookingDate}</td>
                      <td>
                        <strong>{data.amount}</strong>
                      </td>
                    </tr>
                    ))}
                    
                  </tbody>
                </table>
              </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customer_Payment;