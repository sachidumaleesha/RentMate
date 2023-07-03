import React, {useState} from 'react';
import mod from './addcard.module.css';
import image1 from '../images/chip.png'
import image2 from '../images/visa_R.png'
import image3 from '../images/master_R.png'
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Addcard() {

    const [values, setValues] = useState({
        cardType: '',
        name: '',
        cardNumber: '',
        Exp_month: '',
        Exp_year: '',
        cvv: '',
      });

      const [cardDetails, setCardDetails] = useState({
        cardType: '',
        name: '',
        cardNumber: '',
        Exp_month: '',
        Exp_year: '',
        cvv: '',
      });

      const [errors, setErrors] = useState({});

      const navigate = useNavigate();

      const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate(values);
      
        if (Object.keys(validationErrors).length === 0) {
          setValues({
            cardType: '',
            name: '',
            cardNumber: '',
            Exp_month: '',
            Exp_year: '',
            cvv: '',
          });
    
          console.log(cardDetails);
          sendData()
    
          navigate('/customer/payment');
        }else{
          setErrors(validationErrors);
        }
        
      };

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: null });
        setCardDetails({ ...cardDetails, [event.target.name]:event.target.value})
      };

      const sendData = async() => {
        await axios.post("http://localhost:7070/card/add", cardDetails)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
      }

      const validate = (values) => {
        const errors = {};
        if (!values.cardType) {
            errors.cardType = 'You should select the card type';
          }
        if (!values.name) {
          errors.name = 'Name is required';
        } else if (!/^[a-zA-Z]+$/.test(values.name)) {
          errors.name = 'Name should contain only letters';
        }
        if (!values.cardNumber) {
          errors.cardNumber = 'Contact number is required';
        } else if (!/^\d{16}$/.test(values.cardNumber)) {
          errors.cardNumber = 'Card Number should contain exactly 16 numbers';
        }
        if (!values.Exp_month) {
          errors.Exp_month = 'Expiry Month is required';
        }
        if (!values.Exp_year) {
            errors.Exp_year = 'Expiry Year is required';
          }
        if (!values.cvv) {
          errors.cvv = 'Cvv is required';
        }else if (!/^\d{3}$/.test(values.cvv)) {
            errors.cvv = 'Card Number should contain exactly 16 numbers';
        }
        return errors;
      };

  return (
    <div className={mod.checkout_main}>
            <div className={mod.container}>
            <div className={mod.card_container}>
                <div className={mod.front}>
                    <div className={mod.image}>
                        <img src={image1} alt="chip" />
                        <img src={image2} alt="visa" />
                    </div>
                    <div className={mod.card_number_box}>################</div>
                    <div className={mod.flexbox}>
                        <div className={mod.box}>
                            <span>Card Holder</span>
                            <div className={mod.card_holder_name}>full name</div>
                        </div>
                        <div className={mod.box}>
                            <span>expires</span>
                            <div className={mod.expiration}>
                                <span className={mod.exp_month}>mm </span>
                                <span className={mod.exp_year}>yy</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={mod.back}>
                    <div className={mod.stripe}>
                    <div className={mod.box}>
                        <span>CVV</span>
                        <div className={mod.cvv_box}></div>
                        <img src={image2} alt="visa" />
                    </div>
                    </div>
                </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className={mod.inputBox}>
                    <div className={mod.cardType}>
                      <div className={mod.visa}>
                          <input 
                          type="radio" 
                          required 
                          name="cardType"  
                          value={"visa"}
                          className={errors.cardType ? 'error' : ''}
                          onChange={handleInputChange}
                          />
                          {/* {errors.cardType && <span className={mod.error_message}>{errors.cardType}</span>} */}
                          <img src={image2} alt="" className={mod.visa_type}/>
                      </div>
                      <div className={mod.master}>
                        <input 
                        type="radio" 
                        required 
                        name="cardType" 
                        value={"master"}
                        className={errors.cardType ? 'error' : ''} 
                        onChange={handleInputChange}
                        />
                        {/* {errors.cardType && <span className={mod.error_message}>{errors.cardType}</span>} */}
                          <img src={image3} alt="" className={mod.master_type}/>
                      </div>
                    </div>
                </div>
                <div className={mod.inputBox}>
                    <span>Card Holder Name</span>
                    <input 
                    name="name" 
                    required 
                    type="text"
                    className={errors.name ? 'error' : ''}
                    value={cardDetails.name} 
                    onChange={handleInputChange}
                    />
                    {/* {errors.name && <span className={mod.error_message}>{errors.name}</span>} */}
                </div>
                <div className={mod.inputBox}>
                    <span>card number</span>
                    <input 
                    name="cardNumber" 
                    required 
                    type="number" 
                    value={cardDetails.cardNumber} 
                    maxLength={16}
                    className={errors.cardNumber ? 'error' : ''}
                    onChange={handleInputChange}
                    />
                    {/* {errors.cardNumber && <span className={mod.error_message}>{errors.cardNumber}</span>} */}
                </div>
                <div className={mod.flexbox}>
                    
                    <div className={mod.inputBox2}>
                        <span>Expiry MM</span>
                        <input 
                        name="Exp_month"
                        type="number"
                        required 
                        value={cardDetails.Exp_month}
                        className={errors.Exp_month ? 'error' : ''}
                        onChange={handleInputChange}
                        />
                        {/* {errors.Exp_month && <span className={mod.error_message}>{errors.Exp_month}</span>} */}
                    </div>
                    <div className={mod.inputBox2}>
                        <span>Expiry YY</span>
                        <input 
                        name="Exp_year"
                        type="number"
                        value={cardDetails.Exp_year}
                        className={errors.Exp_year ? 'error' : ''}  
                        required
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className={mod.inputBox2}>
                        <span>CVV</span>
                        <input 
                        name="cvv" 
                        required 
                        type="number" 
                        value={cardDetails.cvv}
                        maxLength={3}
                        className={errors.cvv ? 'error' : ''}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
                <button className={mod.submit_btn}>Add Card</button>
            </form>
        </div>
            </div>
  )
}

export default Addcard