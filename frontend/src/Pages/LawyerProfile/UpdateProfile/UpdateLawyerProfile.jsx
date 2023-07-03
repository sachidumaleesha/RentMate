import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import Lawyer_SideBar from '../../../components/LawyerProfile_SideBar/Lawyer_SideBar'
import styles from './updateLawyerProfile.module.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { layer } from '@fortawesome/fontawesome-svg-core'


const UpdateLawyerProfile = ({ onSubmit, updateProfile }) => {

  const navigate = useNavigate();

  const id = localStorage.getItem('id');

  const paid = localStorage.getItem('paid');

  const [lawyerID, setLawyerID] = useState("")

  if (paid === 'false') {

    Swal.fire(
      'Problem!',
      'You have to pay the subscription fee first!',
      'error'
    ).then(() => {
      navigate("/lawyer/lsubscription");
    })
  }

  const [lawyer, setLawyer] = useState([])
  const [imageItem, setImageItem] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:7070/api/lawyer/user/${id}`)
      .then((res) => {
        setLawyer(res.data[0])
        setValues(res.data[0])
        setLawyerID(res.data[0]._id)
      })
      .catch((err) => console.log(err))

  }, [id])

  //start
  const [image, setImage] = useState("");

  const [values, setValues] = useState({
    name: lawyer.name,
    email: lawyer.email,
    contactNumber: lawyer.contactNumber,
    address: lawyer.address,
    education: lawyer.education,
    experience: lawyer.experience,
    languages: lawyer.languages,
    courts: lawyer.courts,
    specialization: lawyer.specialization,
  });

  const [lawyerDetails, setLawyerDetails] = useState({
    name: lawyer.name,
    email: lawyer.email,
    contactNumber: lawyer.contactNumber,
    address: lawyer.address,
    image: "",
    education: lawyer.education,
    experience: lawyer.experience,
    languages: lawyer.languages,
    courts: lawyer.courts,
    specialization: lawyer.specialization,
    userID: localStorage.getItem("id")
  })

  const lawID = lawyer._id;

  //console.log(lawyerDetails);


  const [errors, setErrors] = useState({});


  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      //onSubmit(lawyer);
      // setValues({
      //   name: '',
      //   email: '',
      //   contactNumber: '',
      //   address: '',
      //   image: '',
      //   education: '',
      //   languages: '',
      //   courts: '',
      //   specialization: '',

      // });
      //console.log(values);

      console.log(values);
      console.log("No Errors");


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
          const link = url;
          const updatedLawyer = {
            name: values.name,
            email: values.email,
            contactNumber: values.contactNumber,
            address: values.address,
            image: url,
            education: values.education,
            experience: values.experience,
            languages: values.languages,
            courts: values.courts,
            specialization: values.specialization,
            userID: localStorage.getItem("id")
          }

          //set lawyer details
          setValues({
            name: values.name,
            email: values.email,
            contactNumber: values.contactNumber,
            address: values.address,
            image: link,
            education: values.education,
            experience: values.experience,
            languages: values.languages,
            courts: values.courts,
            specialization: values.specialization,
            userID: localStorage.getItem("id")
          })

          console.log(values);
          // axios.put(`http://localhost:7070/api/lawyer/${lawyerID}`, values)
          //   .then((res) => {
          //     console.log(res)
          //   })


          axios.put(`http://localhost:7070/api/lawyer/${lawyerID}`, updatedLawyer)
            .then((res) => {
              console.log(res.data)
            }
            ).then(() => {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Profile Updated Successfully!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/lawyer");
                }
              })
            }
            ).catch((err) => {
              console.log(err)
            }
            )
        })
        .catch((err) => {
          console.log(err)
        }
        )


      //   //navigate('/lawyer/surviceLawyer');
    } else {
      console.log(errors);


    }

  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: null });
  };


  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
      // } else if (!/^[a-zA-Z]+$/.test(values.name)) {
      //   errors.name = 'Name should contain only letters';
      // }
      //name should have only letters and spaces
    } else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
      errors.name = 'Name should contain only letters and spaces';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.contactNumber) {
      errors.contactNumber = 'Contact number is required';
    } else if (!/^\d{10}$/.test(values.contactNumber)) {
      errors.contactNumber = 'Contact number should contain exactly 10 numbers';
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
    if (updateProfile) {
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
                <div className={styles.newUserTitle}><b>Update Profile Listing Form</b></div>
                <div className={styles.newUsersubTitle}><b></b></div>
                <form className={styles.newUserForm} onSubmit={handleSubmit} >
                  <div className={styles.newUserRow}>
                    <div className={styles.newUserItem}>
                      <label>Name</label>
                      <input type="text" placeholder="" name="name"
                        onChange={handleInputChange}
                        defaultValue={lawyer.name}
                        required />
                    </div>
                    <div className={styles.newUserItem}>
                      <label>Email</label>
                      <input type="email" placeholder="" name="email"
                        defaultValue={lawyer.email}
                        onChange={handleInputChange}
                        required
                        disabled />
                      {errors.email &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.email}
                        </p>
                      }
                    </div>

                  </div>

                  <div className={styles.newUserRow}>

                    <div className={styles.newUserItem}>
                      <label>Contact Number (Enter 10 Numbers)</label>
                      <input type="text" placeholder="+1 123 456 78" name="contactNumber"
                        defaultValue={lawyer.contactNumber}
                        onChange={handleInputChange}
                        max={10}
                        min={10}
                        // pattern="\d{10}"
                        required />
                      {errors.contactNumber &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.contactNumber}
                        </p>
                      }
                    </div>
                    <div className={styles.newUserItem}>
                      <label>Address</label>
                      <input type="text" placeholder="" name="address"
                        defaultValue={lawyer.address}
                        onChange={handleInputChange}
                        required />
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
                      <input type="text" placeholder=""
                        name="education"
                        defaultValue={lawyer.education}
                        onChange={handleInputChange}
                        required />
                    </div>
                  </div>

                  <div className={styles.newUserRow}>
                    <div className={styles.newUserItem}>
                      <label>Experience</label>
                      <input type="text" placeholder=""
                        name="experience"
                        defaultValue={lawyer.experience}
                        onChange={handleInputChange}
                        required />
                    </div>

                    <div className={styles.newUserItem}>
                      <label>Languages</label>
                      <input type="text" placeholder=""
                        name="languages"
                        defaultValue={lawyer.languages}
                        onChange={handleInputChange}
                        required />
                    </div>
                  </div>

                  <div className={styles.newUserRow}>
                    <div className={styles.newUserItem}>
                      <label>Practice Courts</label>
                      <input type="text" placeholder="" name="courts"
                        defaultValue={lawyer.courts}
                        onChange={handleInputChange}
                        required />
                      {errors.courts &&
                        <p style={{ color: "red", fontSize: "13px" }}>
                          {errors.courts}
                        </p>

                      }
                    </div>


                    <div className={styles.newUserItem}>
                      <label>Specialization</label>
                      <input type="text" placeholder=""
                        name="specialization"
                        defaultValue={lawyer.specialization}
                        onChange={handleInputChange}
                        required />
                    </div>
                  </div>
                  <button className={styles.newUserButton}>Update</button>
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

export default UpdateLawyerProfile
