import React, { useState, useEffect } from 'react';
import Sidebar from "../../../components/com.showRoom/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import styless from './manageshowroom.module.css'
import { BreadCrumb } from "primereact/breadcrumb";
import coverimg from "./Images/coverimg.jpg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../../firebase";


const ManageShowroom = () => {

  const userid = localStorage.getItem("id");

  const [showRoom, setShowRoom] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:7070/api/Showroom/user/${userid}`)
      .then((res) => setShowRoom(res.data))
      .catch((err) => console.log(err))
  }, [])

  if (showRoom.length > 0) {
    console.log("Showroom already added");
    const id = showRoom[0]._id;
    window.location.href = `/showroomOwner/showroom/update-showroom/${id}`;
  }
  else {
    console.log("Showroom not added")
  }



  const navigate = useNavigate();

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const [imageURL1, setImageURL1] = useState("");
  const [imageURL2, setImageURL2] = useState("");
  const [imageURL3, setImageURL3] = useState("");

  useEffect(() => {
    const paymentStatus = localStorage.getItem("paid");

    if (paymentStatus === "false") {
      navigate("/showroomOwner/subscription");
      Swal.fire(
        'Problem!',
        'You have to pay the subscription fee first!',
        'error'
      )
    }
  }, []);

  const [values, setValues] = useState({
    name: '',
    email: '',
    contactNumber: '',
    address: '',
    city: '',
    openingTime: '',
    image1: '',
    image2: '',
    image3: '',
  });

  const [showroom, setShowroom] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState({});
  //start

  const handleSubmit = async (event) => {

    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // setValues({
      //   name: '',
      //   email: '',
      //   contactNumber: '',
      //   address: '',
      //   city: '',
      //   openingTime: '',
      // });

      let timerInterval
      Swal.fire({
        title: 'Uploading Data',
        html: 'Creating account wait for <b></b> milliseconds.',
        timer: 8000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })

      console.log(values);

      const storageRef1 = ref(storage, `showroom/${v4()}`);
      const storageRef2 = ref(storage, `showroom/${v4()}`);
      const storageRef3 = ref(storage, `showroom/${v4()}`);

      await uploadBytes(storageRef1, image1)
        .then(() => {
          console.log("Image 1 uploaded");
        })
        .catch((err) => {
          console.log(err);
        });

      await uploadBytes(storageRef2, image2)
        .then(() => {
          console.log("Image 2 uploaded");
        })
        .catch((err) => {
          console.log(err);
        });

      await uploadBytes(storageRef3, image3)
        .then(() => {
          console.log("Image 3 uploaded");
        })
        .catch((err) => {
          console.log(err);
        });

      await getDownloadURL(storageRef1)
        .then((url1) => {
          setImageURL1(url1);

          getDownloadURL(storageRef2)
            .then((url2) => {
              setImageURL2(url2);

              getDownloadURL(storageRef3)
                .then((url3) => {
                  setImageURL3(url3);

                  const showroomDetails = {
                    name: values.name,
                    email: values.email,
                    contactNumber: values.contactNumber,
                    address: values.address,
                    city: values.city,
                    openingTime: values.openingTime,
                    image1: url1,
                    image2: url2,
                    image3: url3,
                    userID: localStorage.getItem("id"),
                  };

                  console.log(showroomDetails, "showroom");

                  axios.post("http://localhost:7070/api/Showroom/", showroomDetails)
                    .then((res) => {
                      console.log(res.data)
                      Swal.fire(
                        'Success!',
                        'Showroom added successfully!',
                        'success'
                      )
                      navigate('/showroomOwner');
                    })
                })
                .catch((err) => {
                  console.log(err);
                });

            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });

    }
    else {
      //alert("Please fill all the fields")
      console.log(values)
    }


    //await axios.post("http://localhost:7070/api/Showroom/", showroomDetails)
  };

  const filteredData = showroom.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.name} ${data.email} ${data.contactNumber} ${data.address} ${data.city} ${data.openingTime}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setValues({ ...values, image: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required*';
    } else if (!/^[a-zA-Z]+$/.test(values.name)) {
      errors.name = 'Name should contain only letters';
    }
    if (!values.email) {
      errors.email = 'Email is required*';
    }
    if (!values.contactNumber) {
      errors.contactNumber = 'Contact number is required*';
    } else if (!/^\d{10}$/.test(values.contactNumber)) {
      errors.contactNumber = 'Contact number should contain exactly 10 numbers';
    }
    if (!values.address) {
      errors.address = 'Address is required*';
    }
    if (!values.city) {
      errors.city = 'City is required*';
    }
    if (!values.openingTime) {
      errors.openingTime = 'Opening time is required*';
    }
    return errors;
  };


  //end


  const home = { icon: "pi pi-th-large", url: "/showroomOwner" };
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Add Showroom</div>
        <BreadCrumb
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>

            <div className={styless.formbody}>
              <form className={styless.showroomForm} onSubmit={handleSubmit}>
                <div className={styless.coverimg}>
                  <img src={coverimg} alt="" />
                </div>

                <div className={styless.showroomItem}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name || ''}
                    onChange={handleInputChange}
                    placeholder="Ex:- Dilshan Fernando"
                    className={errors.name ? 'error' : ''}
                  // required
                  />
                  {errors.name && <span className={styless.error_message}>{errors.name}</span>}
                </div>
                <div className={styless.showroomItem}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email || ''}
                    onChange={handleInputChange}
                    placeholder="Ex:- Eabcd@gmail.com"
                    className={errors.email ? 'error' : ''}
                  // required
                  />
                  {errors.email && <span className={styless.error_message}>{errors.email}</span>}
                </div>
                <div className={styless.showroomItem}>
                  <label htmlFor="contactNumber">Contact Number:</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={values.contactNumber || ''}
                    onChange={handleInputChange}
                    placeholder="+94-000000000"
                    className={errors.contactNumber ? 'error' : ''}
                  // required
                  />
                  {errors.contactNumber && <span className={styless.error_message}>{errors.contactNumber}</span>}
                </div>
                <div className={styless.showroomItem}>
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={values.address || ''}
                    onChange={handleInputChange}
                    placeholder="Ex:- 210/4,amar street, Kollupitiya"
                    className={errors.address ? 'error' : ''}
                  // required
                  />
                  {errors.address && <span className={styless.error_message}>{errors.address}</span>}
                </div>
                <div className={styless.showroomItem}>
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={values.city || ''}
                    onChange={handleInputChange}
                    placeholder="Colombo"
                    className={errors.city ? 'error' : ''}
                  // required
                  />
                  {errors.city && <span className={styless.error_message}>{errors.city}</span>}
                </div>
                <div className={styless.showroomItem}>
                  <label htmlFor="openingTime">Opening-Close Time:</label>
                  <input
                    type="text"
                    id="openingTime"
                    name="openingTime"
                    value={values.openingTime || ''}
                    onChange={handleInputChange}
                    placeholder="Ex:- from 00:00 am to 00:00 pm"
                    className={errors.openingTime ? 'error' : ''}
                  // required
                  />
                  {errors.openingTime && <span className={styless.error_message}>{errors.openingTime}</span>}
                </div>
                <div className={styless.showroomItem}>
                  <label htmlFor="image">Image 1 :</label>
                  <input type="file" id="image" name="image" onChange={(e) => setImage1(e.target.files[0])} />

                  <label htmlFor="image">Image 2 :</label>
                  <input type="file" id="image" name="image" onChange={(e) => setImage2(e.target.files[0])} />

                  <label htmlFor="image">Image 3 :</label>
                  <input type="file" id="image" name="image" onChange={(e) => setImage3(e.target.files[0])} />

                  <button type="submit" className={styless.showroomButton} >Add</button>
                </div>
                {/* raised onClick={()=>{updateFunc(data._id)}} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManageShowroom;