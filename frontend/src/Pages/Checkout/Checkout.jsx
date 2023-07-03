import React, { useState, useEffect } from "react";
import axios from "axios"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import styles from '../Checkout/checkout.module.css'
import img2 from './images/chip.png'
import img3 from './images/visa_R.png'
import img4 from './images/master_R.png'
import { Link } from "react-router-dom";
import Validation from "./validation";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import 'primeicons/primeicons.css';
        

function Checkout() {

  const [cus_name, setCus_name] = useState('');
  const [reserveItem, setreserveItem] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [cus_address, setcusaddress] = useState('');
  const [bookingDate, setbookingDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [pro_duration, setduration] = useState('');
  const [vehicleID, setvehicleID] = useState('');
  const [sLocation, setsLocation] = useState('');
  const [rLocation, setrLocation] = useState('');
  const [distance, setsdistance] = useState('');
  const [amount, setsamount] = useState('');
  const [cardNumber, setcardNumber ] = useState('');

  const handleSubmit = async () => {
    try{
      
      //get userid from local storage
      const userid = localStorage.getItem('id');

      const currentDate = new Date();
      const today = currentDate.toISOString().slice(0, 10);

      const endingDate = new Date(currentDate);
      endingDate.setMonth(endingDate.getMonth() + duration);
      const endDate = endingDate.toISOString().slice(0, 10);

      const data = {
        customerid: userid,
        landloardID: landlordid,
        propertyname: name,
        type: type,
        cus_name,
        reserveItem: name,
        contactNo,
        cus_address: address,
        bookingDate: today,
        endDate: endDate,
        pro_duration: duration,
        vehicleID,
        sLocation,
        rLocation,
        distance,
        amount: totalPrice,
        cardNumber: cardNumber,
        propBeds: beds,
        propRooms: rooms,
        propBaths: baths,
        propprice: price,
        proptype: type,
        propcalculatedPrice: calculatedPrice,
        proptaxPrice: taxPrice
      };
      
        await axios.post('http://localhost:7070/reservation/add', data)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))

        navigate('/customer/payment');

    }
    catch(error)
    {
      console.error(error);
    }
  }


    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    };

    const [cards, setCards] = useState([]);

    useEffect(() =>{
        function getCards(){
          axios.get("http://localhost:7070/card/").then((res) =>{
            setCards(res.data)
          }).catch((err) => {
            alert(err.message);
          })
        }
    
        getCards();
      }, [])

      const navigate = useNavigate()
      const location = useLocation();

      if (!location.state) {
        return navigate('/customer/payment');
      }

      const filteredData = cards.filter((data) => {
        const searchTerms = searchTerm.toLowerCase().split(" ");
        const dataInfo =
          `${data.cardType} ${data.name} ${data.cardNumber} ${data.Exp_month} ${data.Exp_year} ${data.cvv}`.toLowerCase();
        return searchTerms.every((term) => dataInfo.includes(term));
      });
  
    const {
    landlordid,
    name,
    address,
    beds,
    rooms,
    baths,
    price,
    type,
    duration,
    calculatedPrice,
    taxPrice,
    totalPrice,
  } = location.state;


  return (
    <div>
        <Navbar/>
        <div className={styles.checkout_main}>
          <div className={styles.content_box}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <h2>Secure Your Stay - Checkout Now!</h2>
              <form onSubmit={handleSubmit}>
            <div>
                <h4 color="">Account Details</h4>
                <hr />
                <table border={0} className={styles.add_Details_Table}>
                {filteredData.map((data) => (
                    <tr>
                        <td className={styles.card_data} width={30}><input type="radio" name="radioBtn" value={data.cardNumber} onChange={(e) => setcardNumber(e.target.value)}/></td>
                        <td className={styles.card_data} width={150}>{data.name}</td>
                        <td className={styles.card_data} width={200}>{data.cardNumber}</td>
                        <td className={styles.card_data} width={50}>{data.cardType}</td>
                    </tr>
                ))}
                </table>
                <br />

                <Link to="/customer/addcard">
                  <button className={styles.add_new}>Add New Card</button>
                    {/* <Button 
                        label="Add Card" 
                        severity="help" 
                        text 
                        raised 
                    /> */}
                </Link>
            </div>
                
            <br /><br />
            <hr />
            <br /><br />
            <h4>Order Summary</h4>
            <div>
                <table border={0}>
                    <tr>
                        <td width={200}>{name}</td>
                        <td width={200}>$ {totalPrice}</td>
                    </tr>
                </table>
            </div>

            <div>
                <table border={0}>
                    <tr>
                        <td width={300}>Sub Total</td>
                        <td width={300} align="right">$ {totalPrice}</td>
                    </tr>

                    <tr>
                        <td width={300}></td>
                    </tr>
                </table>
            </div>
            <button className={styles.pay_now}>Pay Now</button>
          </form>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Checkout