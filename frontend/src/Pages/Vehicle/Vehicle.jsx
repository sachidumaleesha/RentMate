// import React from "react";
import React, { useState, useEffect } from "react";
import styles from "./vehicle.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import styless from './vehicle.module.css';
import axios from "axios";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

import "react-datepicker/dist/react-datepicker.css";

const Vehicle = () => {

  const { id } = useParams()

  const [vehicle, setVehicle] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:7070/api/vehi/${id}`)
      .then(res => {
        setVehicle(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const navigate = useNavigate()

  const [vehicleId, setVehicleId] = useState(id);
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [deliveryDateTime, setDeliveryDateTime] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [amount, setAmount] = useState("");


  const getMinDate = () => {
    const today = new Date();
    return today;
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());
    return maxDate;
  };

  let totAmount = 0
  totAmount = distance * vehicle.price

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const cusID = localStorage.getItem("id")
    const vehiOwner = vehicle.userID;

    if (cusID === null) {
      Swal.fire(
        'Problem!',
        'Please Login as a Customer to Reserve a Vehicle!',
        'warning'
      )
      navigate('/login')
    }

    const formData = {
      deliveryLocation: deliveryLocation,
      deliveryDate: deliveryDateTime,
      returnLocation: returnLocation,
      distance: distance,
      amount: totAmount,
      vehicleID: id,
      customerID: cusID,
      vehicleOwner: vehiOwner
    };

    console.log(formData);

    axios.post("http://localhost:7070/api/bookingVehicle", formData)
      .then((response) => {
        console.log(response.data)
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Vehicle Reserved Successfully!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/customer')
          }
        })
      })
      .catch((error) => {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      })

    // const calculatedAmount = distance * 0.5;
    // setAmount(calculatedAmount);
    // const formData = {
    //   vehicleId,
    //   deliveryLocation,
    //   deliveryDateTime,
    //   returnLocation,
    //   distance,
    //   amount: calculatedAmount,
    // };
    // console.log(formData);
    // sendData()
    // navigate('/vehicleOwner/vehicles');
  }

  return (
    <div>
      <Navbar />
      <div className={styles.house_details}>
        <div className={styles.house_title}>
          <h1>{vehicle.name}</h1>
          <div className={styles.row}>
            <div>
              <p>Location: San Francisco, California</p>
            </div>
            <div>
              <i class="bx bxs-map"></i>
            </div>
          </div>
        </div>

        <div className={styless.mainbody}>
          <div className={styles.gallery}>
            <div className={styles.gallery_img_1}>
              <img src={vehicle.image} alt="" style={{ width: '400px', margin: '0px auto' }} />
            </div>
          </div>
        </div>

        <div className={styless.parallax_container}>
          <div className={styless.mainbody5}>
            {/* start here */}
            <div className={styless.userShowBottom}>
              <span className={styless.userShowTitle}>Vehicle Details</span>
              <div className={styless.userShowInfo}>

                <div className={styless.userShowIcon}>
                  <i class='bx bx-calendar-alt'></i></div>
                <span className={styless.userShowInfoTitle}>A/C:-YES</span>
              </div>
              <div className={styless.userShowInfo}>

                <div className={styless.userShowIcon}>
                  <i class='bx bx-calendar-alt'></i></div>
                <span className={styless.userShowInfoTitle}>Capacity:-Ton 2000</span>
              </div>
              <div className={styless.userShowInfo}>

                <div className={styless.userShowIcon}>
                  <i class='bx bx-calendar-alt'></i></div>
                <span className={styless.userShowInfoTitle}>Location:-Malabe</span>
              </div>
              <div className={styless.userShowInfo}>

                <div className={styless.userShowIcon}>
                  <i class='bx bx-calendar-alt'></i></div>
                <span className={styless.userShowInfoTitle}>Rate:-Rs.{vehicle.price} Per Rental</span>
              </div>
              <div className={styless.userShowInfo}>

                <div className={styless.userShowIcon}>
                  <i class='bx bx-calendar-alt'></i></div>
                <span className={styless.userShowInfoTitle}>Description:</span>
              </div>
              <div className={styless.userShowInfo}>

                <div className={styless.userShowIcon}></div>
                <span className={styless.userShowInfoTitle} style={{ marginLeft: '30px', marginTop: '-15px' }}>{vehicle.description}</span>
              </div>
              <span className={styless.userShowTitle}>Contact Details</span>
              <div className={styless.userShowInfo}>
                <div className={styless.userShowIcon}>
                  <i class='bx bx-mobile'></i></div>
                <span className={styless.userShowInfoTitle}>Phone:- {vehicle.contact}</span>
              </div>
              <div className={styless.userShowInfo}>
                <div className={styless.userShowIcon}>
                  <i class='bx bx-envelope'></i>
                </div>
                <span className={styless.userShowInfoTitle}>Email:-{vehicle.email}</span>
              </div>
            </div>

            {/* end here */}
          </div>
          <div className={styless.mainbody5}>
            <form className={styless.reservation_form} onSubmit={handleFormSubmit}>
              <center> <h>Reservation Form</h></center>
              <br />
              <label htmlFor="pick">Delivery Location:</label>
              <input
                type="text"
                id="pick"
                name="deliveryLocation"
                onChange={(e) => {
                  setDeliveryLocation(e.target.value)
                }}
                required
              />
              <label htmlFor="date">Delivery Date and Time:</label>
              {/* <input
                type="date"
                id="date"
                value={bookingDetails.date}
                onChange={handleChange}
                required
              /> */}
              <DatePicker selected={deliveryDateTime} onChange={(date) => setDeliveryDateTime(date)}
                minDate={getMinDate()}
                maxDate={getMaxDate()}
                dateFormat="yyyy-MM-dd" />
              <label htmlFor="drop">Return Location:</label>
              <input
                type="text"
                id="drop"
                onChange={
                  (e) => {
                    setReturnLocation(e.target.value)
                  }

                }
                required
              />
              <label htmlFor="distance">Distance (in kilometers):</label>
              <input
                type="number"
                id="distance"
                min="0"
                onChange={
                  (e) => {
                    setDistance(e.target.value)
                    totAmount = e.target.value * 0.5
                  }
                }
                required
              />
              <label htmlFor="amount">Amount: Rs. {totAmount.toFixed(2)}</label>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Vehicle;
