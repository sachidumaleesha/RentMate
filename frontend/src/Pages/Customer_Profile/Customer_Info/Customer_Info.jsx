import React, { useEffect, useState } from "react";
import styles from "./customer_Info.module.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Navigator from "../../../components/Customer_Profile/profile_nav/Profile_nav";
import Info_Card from "../../../components/Customer_Profile/info_card/Info_card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from 'sweetalert2'

const Customer_Info = () => {

  const  userid = localStorage.getItem("id");
  

  const [isNameFormVisible, setNameFormVisible] = useState(false);
  const [isEmailFormVisible, setEmailFormVisible] = useState(false);
  const [isPhoneNumberFormVisible, setPhoneNumberFormVisible] = useState(false);
  const [isAddressFormVisible, setAddressFormVisible] = useState(false);
  const [isCurrentCityFormVisible, setCurrentCityFormVisible] = useState(false);
  const [isPhotoVisible, setPhotoFormVisible] = useState(false);
  const [email, setEmail] = useState("");



  const handleNameFormVisibility = () => {
    setNameFormVisible(!isNameFormVisible);
  };

  const handleEmailFormVisibility = () => {
    setEmailFormVisible(!isEmailFormVisible);
  };

  const handlePhoneNumberFormVisibility = () => {
    setPhoneNumberFormVisible(!isPhoneNumberFormVisible);
  };

  const handleAddressFormVisibility = () => {
    setAddressFormVisible(!isAddressFormVisible);
  };

  const handleCurrentCityFormVisibility = () => {
    setCurrentCityFormVisible(!isCurrentCityFormVisible);
  };

  const handlePhotoFormVisibility = () => {
    setPhotoFormVisible(!isPhotoVisible);
  };

  const validateEmail = () => {
    const emailInput = document.getElementById("email-input");
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(emailInput.value)) {
      emailInput.style.borderColor = "green";
      emailInput.style.boxShadow = "0 0 10px #4cdd69"
    } else {
      emailInput.style.borderColor = "red";
      emailInput.style.boxShadow = "0 0 10px #ef5d4f"
    }
  };

  const [customerinfo, setCustomerinfo] = useState({});


  const createcustomer = () => {
    axios.post("http://localhost:7070/api/customer/",{
      userid: userid,
  })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // handle the error, if needed
  });
} 

useEffect(() => {
  const userid = localStorage.getItem("id");
  console.log(userid);

  function getcustomerinfo() {
    axios(`http://localhost:7070/api/customer/customer_info/${userid}`)
      .then((res) => {
        if(res.data.length === 0){
          createcustomer();
        }
        setCustomerinfo(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getcustomerinfo();
}, []);


  // handle first name change
const handleFirstNameChange = (event) => {
  setCustomerinfo({
    ...customerinfo,
    fname: event.target.value
  });
};

//handle email change
const handleEmailChange = (event) => {
  setCustomerinfo({
    ...customerinfo,
    email: event.target.value
  });
};


// handle last name change
const handleLastNameChange = (event) => {
  setCustomerinfo({
    ...customerinfo,
    lname: event.target.value
  });
};
// handle phone number change
const handlePhoneNumberChange = (event) => {
  setCustomerinfo({
    ...customerinfo,
    phone: event.target.value
  });
};
// handle address change
const handleAddressChange = (event) => {
  setCustomerinfo({
    ...customerinfo,
    address: event.target.value
  });
};
// handle current city change
const handleCurrentCityChange = (event) => {
  setCustomerinfo({
    ...customerinfo,
    city: event.target.value
  });
};


// handle form submit
const handleSubmit = (event) => {
  event.preventDefault();
  
  const userid = localStorage.getItem("id");

  axios.put(`http://localhost:7070/api/customer/updatename/${userid}`, {
    fname: customerinfo.fname,
    lname: customerinfo.lname
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
    Swal.fire(
      'Error',
      'Check your inserted Details',
      'error'
    );
  });

  handleNameFormVisibility(); 
};



// handle form submit
const handleSubmit2 = (event) => {
  event.preventDefault();
  
  const userid = localStorage.getItem("id");

  axios.put(`http://localhost:7070/api/customer/updateemail/${userid}`, {
    email: customerinfo.email
  })
  .then((res) => {
    // console.log(res.data);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Updated Successfully!'
    });
  })
  .catch((err) => {
    console.log(err);
    Swal.fire(
      'Error',
      'Check your inserted Details',
      'error'
    );
  });

  handleEmailFormVisibility();
};


// handle form submit
const handleSubmit3 = (event) => {
  event.preventDefault();

  const userid = localStorage.getItem("id");

  axios.put(`http://localhost:7070/api/customer/updatephone/${userid}`, {
    phone: customerinfo.phone
  })
  .then((res) => {
    // console.log(res.data);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Updated Successfully!'
    });
  })
  .catch((err) => {
    console.log(err);
    Swal.fire(
      'Error',
      'Check your inserted Details',
      'error'
    );
  });

  handlePhoneNumberFormVisibility();
};

// handle form submit
const handleSubmit4 = (event) => {
  event.preventDefault();

  const userid = localStorage.getItem("id");

  axios.put(`http://localhost:7070/api/customer/updateaddress/${userid}`, {
    address: customerinfo.address
  })
  .then((res) => {
    // console.log(res.data);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Updated Successfully!'
    });
  })
  .catch((err) => {
    console.log(err);
    Swal.fire(
      'Error',
      'Check your inserted Details',
      'error'
    );
  });

  handleAddressFormVisibility();
};


// handle form submit
const handleSubmit5 = (event) => {
  event.preventDefault();

  const userid = localStorage.getItem("id");

  axios.put(`http://localhost:7070/api/customer/updatecity/${userid}`, {
    city: customerinfo.city
  })
  .then((res) => {
    // console.log(res.data);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Updated Successfully!'
    });
  })
  .catch((err) => {
    console.log(err);
    Swal.fire(
      'Error',
      'Check your inserted Details',
      'error'
    );
  });

  handleCurrentCityFormVisibility();
};

// handle photo change
const [selectedFile, setSelectedFile] = useState(null);

const handleFileChange = (event) => {
  
  const file = event.target.files[0];
  setSelectedFile(file);
  console.log(file);

};

//imgae upload part start
const handleSubmit6 = () => {
  const userid = localStorage.getItem("id");
  const data = new FormData();
  data.append('file', selectedFile);
  
  axios.put(`http://localhost:7070/api/customer/updateavatar/${userid}`, data)
    .then(res => {
      console.log(res.statusText);
    })
    .catch(err => {
      console.log(err);
    });
};


function restrictInput(event) {
  const input = event.target;
  const value = input.value;
  const sanitizedValue = value.replace(/\D/g, ''); // Remove non-numeric characters

  if (sanitizedValue.charAt(0) !== '0') {
    input.value = '0' + sanitizedValue; // Ensure first character is '0'
  } else {
    input.value = sanitizedValue;
  }
}

   return (
    <div>
      <Navbar />
      <div className="master">
        <Navigator />
        <div className="profile_home">
          <Info_Card />
          <div className={styles.main_card}>
            <div className={styles.title}>
              <h1>Personal Info</h1>
            </div>
            <div className={styles.container}>
              <div className={styles.div3}>
                <div className={styles.content}>
                  <div className={styles.details_container}>
                    <div className={styles.title2}>
                      <span id="edit">Name</span>
                    </div>
                    <div>
                      <span>{customerinfo.fname} {customerinfo.lname}</span>
                    </div>
                  </div>
                  <div className={styles.btn_container}>
                    <div>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        onClick={handleNameFormVisibility}
                        id="edit-button"
                      />
                    </div>
                  </div>
                </div>
                {/* form change name */}
                {isNameFormVisible && (
                  <div className={styles.form}>
                    <div className={styles.formContainer}>
                      <form onSubmit={handleSubmit}>
                      <input placeholder="First Name" value={customerinfo.fname} onChange={handleFirstNameChange} />
                      <input placeholder="Last Name" value={customerinfo.lname} onChange={handleLastNameChange} />
                    <button type="submit">Save</button>
                      </form>
                    </div>
                    <div className={styles.closeBtn}>
                    <FontAwesomeIcon className={styles.close} onClick={handleNameFormVisibility} icon={faXmark}/>
                    </div>
                  </div>
                )}

                <div className={styles.content}>
                  <div className={styles.details_container}>
                    <div className={styles.title2}>
                      <span>Email</span>
                    </div>
                    <div>
                      <span>{customerinfo.email}</span>
                    </div>
                  </div>
                  <div className={styles.btn_container}>
                    <div>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        onClick={handleEmailFormVisibility}
                      />
                    </div>
                  </div>
                </div>

                {/* form to change Email */}
                {isEmailFormVisible && (
                  <div className={styles.form}>
                    <div className={styles.formContainer}>
                      <form onSubmit={handleSubmit2}>
                      <input type="email" id="email-input" placeholder="Enter Email" value={customerinfo.email}  className={styles.emailInput}
                        onChange={handleEmailChange}
                        onBlur={validateEmail} />
                    <button type="submit" onClick={(e) => setEmail(e.target.value)}>Save</button>
                      </form>
                    </div>
                    <div className={styles.closeBtn}>
                    <FontAwesomeIcon className={styles.close} onClick={handleEmailFormVisibility} icon={faXmark}/>
                    </div>
                  </div>
                )}

                <div className={styles.content}>
                  <div className={styles.details_container}>
                    <div className={styles.title2}>
                      <span>Phone Number</span>
                    </div>
                    <div>
                      <span>{customerinfo.phone}</span>
                    </div>
                  </div>
                  <div className={styles.btn_container}>
                    <div>
                      <FontAwesomeIcon icon={faPenToSquare} onClick={handlePhoneNumberFormVisibility}/>
                    </div>
                  </div>
                </div>
                {/* form for mobile number change */}
                {isPhoneNumberFormVisible && (
                  <div className={styles.form}>
                    <div className={styles.formContainer}>
                      <form onSubmit={handleSubmit3}>
                      {/* <input placeholder="Mobile Number" type="tel" pattern="[0]{1}[0-9]{2}[0-9]{3}[0-9]{4}" value={customerinfo.phone} onChange={handlePhoneNumberChange}/> */}
                      <input type="tel" oninput={restrictInput()} pattern="[0-9]*" />
                    <button type="submit">Save</button>
                      </form>
                    </div>
                    <div className={styles.closeBtn}>
                    <FontAwesomeIcon className={styles.close} onClick={handlePhoneNumberFormVisibility} icon={faXmark}/>
                    </div>
                  </div>
                )}

                <div className={styles.content}>
                  <div className={styles.details_container}>
                    <div className={styles.title2}>
                      <span>Address</span>
                    </div>
                    <div>
                      <span>{customerinfo.address}</span>
                    </div>
                  </div>
                  <div className={styles.btn_container}>
                    <div>
                      <FontAwesomeIcon icon={faPenToSquare} onClick={handleAddressFormVisibility}/>
                    </div>
                  </div>
                </div>
                {/* form for address  */}
                {isAddressFormVisible && (
                  <div className={styles.form}>
                    <div className={styles.formContainer}>
                      <form onSubmit={handleSubmit4}>
                      <input placeholder="Address" value={customerinfo.address} onChange={handleAddressChange}/>
                    <button type="submit">Save</button>
                      </form>
                    </div>
                    <div className={styles.closeBtn}>
                    <FontAwesomeIcon className={styles.close} onClick={handleAddressFormVisibility} icon={faXmark}/>
                    </div>
                  </div>
                )}

                <div className={styles.content}>
                  <div className={styles.details_container}>
                    <div className={styles.title2}>
                      <span>Current City</span>
                    </div>
                    <div>
                      <span>{customerinfo.city}</span>
                    </div>
                  </div>
                  <div className={styles.btn_container}>
                    <div>
                      <FontAwesomeIcon icon={faPenToSquare} onClick={handleCurrentCityFormVisibility}/>
                    </div>
                  </div>
                </div>
                {/* form for current city  */}
                {isCurrentCityFormVisible && (
                  <div className={styles.form}>
                    <div className={styles.formContainer}>
                      <form onSubmit={handleSubmit5}>
                      <input placeholder="Current City" value={customerinfo.city} onChange={handleCurrentCityChange}/>
                    <button type="submit">Save</button>
                      </form>
                    </div>
                    <div className={styles.closeBtn}>
                    <FontAwesomeIcon className={styles.close} onClick={handleCurrentCityFormVisibility} icon={faXmark}/>
                    </div>
                  </div>
                )}

                <div className={styles.content}>
                  <div className={styles.details_container}>
                    <span>Upload Picture</span>
                  </div>
                  <div className={styles.upload_btn}>
                    <div>
                      <button onClick={handlePhotoFormVisibility}>+ Upload</button>
                    </div>
                  </div>
                </div>
                {/* form for upload image */}
                {isPhotoVisible && (
                    
                  <div className={styles.form}>
                    <div className={styles.formContainer}>
                        <input type="file" id="img" name="file" accept="image/*" onChange={handleFileChange}/>
                        <button type="submit" onClick={handleSubmit6}>Save</button>
                    </div>
                    <div className={styles.closeBtn}>
                    <FontAwesomeIcon className={styles.close} onClick={handlePhotoFormVisibility} icon={faXmark}/>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customer_Info;
