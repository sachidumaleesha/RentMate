import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import Lawyer_SideBar from '../../../components/LawyerProfile_SideBar/Lawyer_SideBar'
import styles from './surviceListingLawyer.module.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

//start
const SurviceListingLawyer = ({ onSubmit, surviceListing }) => {

  const navigate = useNavigate();

  const paid = localStorage.getItem('paid');

  if (paid === 'false') {

    Swal.fire(
      'Problem!',
      'You have to pay the subscription fee first!',
      'error'
    ).then(() => {
      navigate("/lawyer/lsubscription");
    })
  }

  const [image, setImage] = useState("");

  const [imageItem, setImageItem] = useState("");

  const [lawyerDetails, setLawyerDetails] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    image: "",
    education: "",
    experience: "",
    languages: "",
    courts: "",
    specialization: "",
    userID: localStorage.getItem("id")
  })

  const [values, setValues] = useState({
    name: '',
    email: '',
    contactNumber: '',
    address: '',
    image: '',
    experience: "",
    education: '',
    languages: '',
    courts: '',
    specialization: '',
  });


  const [errors, setErrors] = useState({});


  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // onSubmit(values);
      setValues({
        name: '',
        email: '',
        contactNumber: '',
        address: '',
        image: '',
        education: '',
        languages: '',
        courts: '',
        specialization: '',

      });


      //sendData()

      //navigate('/lawyer');
    }
    else {
      const storageRef = ref(storage, `lawyer/${v4()}`);

      await uploadBytes(storageRef, imageItem)
        .then(() => {
          console.log("Uploaded")
        })
        .catch((err) => {
          console.log(err)
        })

      await getDownloadURL(storageRef)
        .then((url) => {
          console.log(url)
          //setLawyerDetails({ ...lawyerDetails, image: url })
          const newLawyer = {
            name: lawyerDetails.name,
            email: lawyerDetails.email,
            contactNumber: lawyerDetails.contactNumber,
            address: lawyerDetails.address,
            image: url,
            education: lawyerDetails.education,
            experience: lawyerDetails.experience,
            languages: lawyerDetails.languages,
            courts: lawyerDetails.courts,
            specialization: lawyerDetails.specialization,
            userID: lawyerDetails.userID
          }

          console.log(lawyerDetails);
          axios.post("http://localhost:7070/api/lawyer/", newLawyer)
            .then((response) => {
              console.log(response.data)
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Service Listing Added Successfully!'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "/lawyer";
                }
              })
            })
            .catch((error) => console.log(error))
        })
        .catch((err) => {
          console.log(err)
        })
    }
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: null });
    setLawyerDetails({ ...lawyerDetails, [event.target.name]: event.target.value })
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-Z]+$/.test(values.name)) {
      errors.name = 'Name should contain only letters';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.contactNumber) {
      errors.contactNumber = 'Contact number is required';
    } else if (!/^\d{10}$/.test(values.contactNumber)) {
      errors.contactNumber = 'Contact number should contain exactly 10 numbers';
    }
    if (!values.date) {
      errors.date = 'Date is required';
    }
    if (!values.address) {
      errors.address = 'Address is required';
    }
    if (!values.courts) {
      errors.courts = 'Courts is required';
    }
    return errors;
  };


  const renderSubmitButton = () => {
    if (surviceListing) {
      return <button type="submit">Submit</button>;
    }// else {
    //   return <button type="submit">Add</button>;
    // }
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  //end
  return (
    <div>
      <Navbar />
      <div className={styles.master}>
        <div className={styles.profile_home}>
          <Lawyer_SideBar />
          <div className={styles.main_card}>
            <div className={styles.subcard}>
              {/* start coding */}
              <div className={styles.newUser}>
                <div className={styles.newUserTitle}><b>Survice Listing Form</b></div>
                <div className={styles.newUsersubTitle}><b>Hi!! Do you want to publish your service?</b></div>
                <form className={styles.newUserForm} onSubmit={handleSubmit} >
                  <div className={styles.newUserRow}>
                    <div className={styles.newUserItem}>
                      <label>Name</label>
                      <input type="text" placeholder="Enter Name" name="name" value={lawyerDetails.name} onChange={handleInputChange} />
                      {errors.name &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.name}
                        </p>
                      }
                    </div>
                    <div className={styles.newUserItem}>
                      <label>Email</label>
                      <input type="email" placeholder="Enter Email" name="email" value={lawyerDetails.email} onChange={handleInputChange} />
                      {errors.email &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.email}
                        </p>
                      }
                    </div>

                  </div>

                  <div className={styles.newUserRow}>

                    <div className={styles.newUserItem}>
                      <label>Contact Number</label>
                      <input type="text" placeholder="+1 123 456 78" name="contactNumber" value={lawyerDetails.contactNumber} onChange={handleInputChange} />
                      {errors.contactNumber &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.contactNumber}
                        </p>
                      }
                    </div>
                    <div className={styles.newUserItem}>
                      <label>Address</label>
                      <input type="text" placeholder="Enter Address" name="address" value={lawyerDetails.address} onChange={handleInputChange} />
                      {errors.address &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.address}
                        </p>

                      }
                    </div>
                  </div>

                  <div className={styles.newUserRow}>
                    <div className={styles.newUserItem}>

                      <label>Upload Image</label>
                      <input
                        type="file"
                        id="image"
                        onChange={(e) => setImageItem(e.target.files[0])} />
                    </div>

                    <div className={styles.newUserItem}>
                      <label>Education</label>
                      <input type="text" placeholder="Enter Education Details" name="education" onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className={styles.newUserRow}>
                    <div className={styles.newUserItem}>
                      <label>Experience</label>
                      <input type="text" placeholder="Enter Experience Years" name="experience" onChange={handleInputChange} />
                    </div>

                    <div className={styles.newUserItem}>
                      <label>Languages</label>
                      <input type="text" placeholder="Enter known Languages" name="languages" onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className={styles.newUserRow}>
                    <div className={styles.newUserItem}>
                      <label>Practice Courts</label>
                      <input type="text" placeholder="Enter Practice Courts" name="courts" onChange={handleInputChange} />
                      {errors.courts &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.courts}
                        </p>

                      }
                    </div>


                    <div className={styles.newUserItem}>
                      <label>Specialization</label>
                      <input type="text" placeholder="Enter Specialization" name="specialization" onChange={handleInputChange} />
                    </div>
                  </div>
                  <button className={styles.newUserButton}>Submit</button>
                </form>
              </div>



              {/* end coding */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SurviceListingLawyer

