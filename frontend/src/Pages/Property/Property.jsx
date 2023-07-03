import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./property.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import Profile from "./profile.png";

const Property = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;

  const [propertyDetails, setPropertyDetails] = useState({
    landlordid: "",
    name: "",
    address: "",
    beds: "",
    rooms: "",
    baths: "",
    price: "",
    type: "",
    description: "",
    mapLink: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7070/api/manageListings/${id}`
        );
        setPropertyDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [duration, setDuration] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const basePrice = propertyDetails.price;

  const handleDurationChange = (e) => {
    const selectedDuration = parseInt(e.target.value);
    setDuration(selectedDuration);

    if (selectedDuration) {
      const calculatedPrice = basePrice * selectedDuration;
      const taxPrice = (calculatedPrice * 0.1).toFixed(2);
      const totalPrice = (
        parseFloat(calculatedPrice) + parseFloat(taxPrice)
      ).toFixed(2);

      setCalculatedPrice(calculatedPrice);
      setTaxPrice(taxPrice);
      setTotalPrice(totalPrice);
    } else {
      setCalculatedPrice(0);
      setTaxPrice(0);
      setTotalPrice(0);
    }
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    // Other code for reservation submission
    navigate("/checkout", {
      state: {
        landlordid: propertyDetails.landlordid,
        name: propertyDetails.name,
        address: propertyDetails.address,
        beds: propertyDetails.beds,
        rooms: propertyDetails.rooms,
        baths: propertyDetails.baths,
        price: propertyDetails.price,
        type: propertyDetails.type,
        duration,
        calculatedPrice,
        taxPrice,
        totalPrice,
      },
    });
  };

  return (
    <div>
      <Navbar />
      <div className={styles.house_details}>
        <div className={styles.house_title}>
          <h1>{propertyDetails.name}</h1>
          <div className={styles.row}>
            <div>
              <p>{propertyDetails.address}</p>
            </div>
            <div>
              <i class="bx bxs-map"></i>
            </div>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.gallery_img_1}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=1200" alt="" />
          </div>
          <div>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/d037ba05-1237-4b00-9092-8fa71bada83e.jpeg?im_w=720" alt="" />
          </div>
          <div>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/88cec5b3-01ab-4d26-8597-bd3b1fc36e01.jpeg?im_w=720" alt="" />
          </div>
          <div>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/061a1f0a-27f0-4bf6-acee-05e978030487.jpeg?im_w=720" alt="" />
          </div>
          <div>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/35989289-d57f-449a-b23b-0c285e715ee1.jpeg?im_w=720" alt="" />
          </div>
        </div>
        <div className={styles.small_details}>
          <div className={styles.info}>
            <span>Entire {propertyDetails.type} unit hosted by Diwan</span>
            <p>
              <div>
                <i class="bx bxs-building"></i>
                <p>{propertyDetails.rooms} Bedrooms</p>
              </div>
              <div>
                <i class="bx bxs-bed"></i>
                <p>{propertyDetails.beds} Beds</p>
              </div>
              <div>
                <i class="bx bxs-bath"></i>
                <p>{propertyDetails.baths} Baths</p>
              </div>
            </p>
          </div>
          <div className={styles.profile}>
            <img src={Profile} alt="profile image" />
          </div>
        </div>
        <hr className={styles.line} />

        <div className={styles.content__area__section}>
          <div class="grid">
            <div class="col-8">
              <div className={styles.property__description}>
                {propertyDetails.description}
              </div>
            </div>
            <div class="col-4">
              <div className={styles.priceCal__cards}>
                <div className={styles.top__bar}>
                  <div className={styles.price__name}>
                    <h5>Price</h5>
                  </div>
                  <div className={styles.monthly__salary}>
                    <h5>${propertyDetails.price}</h5>
                  </div>
                </div>
                <form style={{ padding: "0", overflow: "none" }}>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Price shown here"
                      readOnly
                      style={{
                        height: "40px",
                        borderRadius: "5px",
                        marginTop: "10px",
                      }}
                      value={
                        duration
                          ? `$ ${calculatedPrice}`
                          : "Please select the duration"
                      }
                    />
                  </div>
                  <select
                    name="duration"
                    id=""
                    onChange={handleDurationChange}
                    style={{
                      height: "40px",
                      borderRadius: "5px",
                      marginTop: "15px",
                      paddingLeft: "5px",
                      border: "1px solid #CCCCCC",
                    }}
                  >
                    <option value="none" selected disabled hidden>
                      Select Duration
                    </option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                    <option value="36">36 Months</option>
                  </select>
                  <button
                    type="submit"
                    onClick={handleReservationSubmit}
                    style={{
                      background: "red",
                      width: "100%",
                      marginLeft: "0",
                      marginTop: "15px",
                      color: "#fff",
                    }}
                  >
                    Reserve Now
                  </button>
                </form>
                <div>
                  <p
                    className={styles.pinfo}
                    style={{ marginTop: "15px", textAlign: "center" }}
                  >
                    You won't be charged yet
                  </p>
                </div>
                <hr className={styles.lineb} />
                <div className={styles.lasttotal__price}>
                  <div className={styles.lasttotal__priceleft}>
                    <h6>Price for {duration} Months:</h6>
                  </div>
                  <div className={styles.lasttotal__priceright}>
                    <h6>${calculatedPrice}</h6>
                  </div>
                </div>
                <div className={styles.lasttotal__price}>
                  <div className={styles.lasttotal__priceleft}>
                    <h6>Tax Price (10%):</h6>
                  </div>
                  <div className={styles.lasttotal__priceright}>
                    <h6>${taxPrice}</h6>
                  </div>
                </div>
                <div className={styles.lasttotal__price}>
                  <div className={styles.lasttotal__priceleft}>
                    <h6>Total Price to be paid:</h6>
                  </div>
                  <div className={styles.lasttotal__priceright}>
                    <h6>${totalPrice}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.map}>
          <iframe
            src={propertyDetails.mapLink}
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Property;
