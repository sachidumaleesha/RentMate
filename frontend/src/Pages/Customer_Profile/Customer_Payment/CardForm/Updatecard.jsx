import React, { useState  ,useEffect} from "react";
import mods from '../CardForm/updatecard.module.css'
import image1 from '../images/chip.png'
import image2 from '../images/visa_R.png'
import image3 from '../images/master_R.png'
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";

function Updatecard() {

    const [cardDetails, setCardDetails] = useState({
        cardType: '',
        name: '',
        cardNumber: '',
        Exp_month: '',
        Exp_year: '',
        cvv: '',
      });
    
      const hadleChange = (e) => {
        setCardDetails({ ...cardDetails, [e.target.name]: e.target.value })
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/customer/payment');
        updatefuction()
      };

        const navigate = useNavigate();
        const location = useLocation();
        const id = location.state.id;
    
        useEffect(() => {
            const fetchData = async() => {
             await axios.get(`http://localhost:7070/card/get/${id}`)
                .then((res) => {
                    setCardDetails(res.data);
                  
                })
                .catch((err) => {
                  console.log(err);
                  console.log(cardDetails);
                });
            }
            fetchData();
          }, []);

          const updatefuction = async () => {
            await axios.put(`http://localhost:7070/card/update/${id}`, cardDetails)
              .then((response) => console.log(response.data))
              .catch((error) => console.log(error))
          }
          console.log(id)

  return (
    <div className={mods.checkout_main}>
            <div className={mods.container}>
            <div className={mods.card_container}>
                <div className={mods.front}>
                    <div className={mods.image}>
                        <img src={image1} alt="chip" />
                        <img src={image2} alt="visa" />
                    </div>
                    <div className={mods.card_number_box}>################</div>
                    <div className={mods.flexbox}>
                        <div className={mods.box}>
                            <span>Card Holder</span>
                            <div className={mods.card_holder_name}>full name</div>
                        </div>
                        <div className={mods.box}>
                            <span>expires</span>
                            <div className={mods.expiration}>
                                <span className={mods.exp_month}>mm </span>
                                <span className={mods.exp_year}>yy</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={mods.back}>
                    <div className={mods.stripe}>
                    <div className={mods.box}>
                        <span>CVV</span>
                        <div className={mods.cvv_box}></div>
                        <img src={image2} alt="visa" />
                    </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={mods.inputBox}>
                    <div className={mods.cardType}>
                      <div className={mods.visa}>
                          <input 
                          type="radio" 
                          required 
                          name="cardType"  
                          value={cardDetails.cardType}
                          onChange={hadleChange}
                          />
                          {/* {errors.cardType && <span className={mod.error_message}>{errors.cardType}</span>} */}
                          <img src={image2} alt="" className={mods.visa_type}/>
                      </div>
                      <div className={mods.master}>
                        <input 
                        type="radio" 
                        required 
                        name="cardType" 
                        value={cardDetails.cardType}
                        />
                        {/* {errors.cardType && <span className={mod.error_message}>{errors.cardType}</span>} */}
                          <img src={image3} alt="" className={mods.master_type}/>
                      </div>
                    </div>
                </div>
                <div className={mods.inputBox}>
                    <span>Card Holder Name</span>
                    <input 
                    name="name" 
                    required 
                    type="text"
                    value={cardDetails.name}
                    onChange={hadleChange}
                    />
                    {/* {errors.name && <span className={mod.error_message}>{errors.name}</span>} */}
                </div>
                <div className={mods.inputBox}>
                    <span>card number</span>
                    <input 
                    name="cardNumber" 
                    required 
                    type="number" 
                    maxLength={16}
                    value={cardDetails.cardNumber}
                    onChange={hadleChange}
                    />
                    {/* {errors.cardNumber && <span className={mod.error_message}>{errors.cardNumber}</span>} */}
                </div>
                <div className={mods.flexbox}>
                    
                    <div className={mods.inputBox2}>
                        <span>Expiry MM</span>
                        <input 
                        name="Exp_month"
                        type="number"
                        required 
                        value={cardDetails.Exp_month}
                        onChange={hadleChange}
                        />
                        {/* {errors.Exp_month && <span className={mod.error_message}>{errors.Exp_month}</span>} */}
                    </div>
                    <div className={mods.inputBox2}>
                        <span>Expiry YY</span>
                        <input 
                        name="Exp_year"
                        type="number"
                        required
                        value={cardDetails.Exp_year}
                        onChange={hadleChange}
                        />
                    </div>
                    <div className={mods.inputBox2}>
                        <span>CVV</span>
                        <input 
                        name="cvv" 
                        required 
                        type="number" 
                        maxLength={3}
                        value={cardDetails.cvv}
                        onChange={hadleChange}
                        />
                    </div>
                </div>
                <button className={mods.submit_btn}>Update Card</button>
            </form>
        </div>
            </div>
  )
}

export default Updatecard