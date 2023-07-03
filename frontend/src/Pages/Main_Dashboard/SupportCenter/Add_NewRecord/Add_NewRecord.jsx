import React from "react";
import styles from "../../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import Sidebar from "../../../../components/com.mainDashboard/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styless from "./add_NewRecord.module.css";
import axios from "axios";


const Add_NewRecord = ({onSubmit,problemToEdit}) => {
  const items = [
    { label: "Support Center", url: "/siteowner/support-center" },
    { label: "New Record", url: "/siteowner/support-center/add-Nrecord" },
  ];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };

//start
const navigate = useNavigate();

   const[nRecordDetails , setnRecordDetails] = useState({
      name : "",
      email : "",
      contactNumber : "",
      date: "",
      problemtype: "",
      problem: "",
      status: "Pending"
    })
  
const [values, setValues] = useState({
  name: '',
  email: '',
  contactNumber: '',
  date: '',
  problemtype:'',
  problem: '',
  
});

const [errors, setErrors] = useState({});

const handleSubmit = (event) => {
  event.preventDefault();

  const validationErrors = validate(values);
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
    // onSubmit(values);
    setValues({
      name: '',
      email: '',
      contactNumber: '',
      date: '',
      problem: '',
      
    });

    console.log(nRecordDetails);

    sendData()

    navigate('/siteowner/support-center');
  }
};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setValues({ ...values, [name]: value });
  setErrors({ ...errors, [name]: null });
  setnRecordDetails({...nRecordDetails, [event.target.name]:event.target.value})
};

 const sendData = async() => {
      await axios.post("http://localhost:7070/api/problems/",nRecordDetails )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
    }


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
  if (!values.problem) {
    errors.problem = 'Problem is required';
  }
  return errors;
};

// const renderSubmitButton = () => {
//   if (problemToEdit) {
//     return <button type="submit">Add Record</button>;
//    } 
  //   return <button type="submit">Add</button>;
  // }
//};

//end

  return (
    <div>
      <Sidebar/>
      <div className={styles.content}>
        <div className={styles.text}>Support Center</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styless.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>
          {/* start coding */}
              
          <div className={styless.boxform}>
                      <div className={styless.newUserTitle}><b>Add New Record Form</b></div>
                       
                     <form onSubmit={handleSubmit} className={styless.newUserForm}>
                        {/* <h2>Support Form</h2>
                        <h4>Hi, Do you want to help?</h4> */}
                <div className={styless.newUserRow}>
                <div className={styless.newUserItem}>
                  <label htmlFor="name">Name:</label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={nRecordDetails.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className={styless.error_message}>{errors.name}</span>}
                </div>

                <div className={styless.newUserItem}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={nRecordDetails.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className={styless.error_message}>{errors.email}</span>}
                </div>

                </div>

                

                <div className={styless.newUserRow}>
                <div className={styless.newUserItem}>
                  <label htmlFor="contactNumber">Contact Number:</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={nRecordDetails.contactNumber}
                    onChange={handleInputChange}
                    className={errors.contactNumber ? 'error' : ''}
                  />
                  {errors.contactNumber && <span className={styless.error_message}>{errors.contactNumber}</span>}
                </div>
                

               
                <div className={styless.newUserItem}>
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={nRecordDetails.date}
                    onChange={handleInputChange}
                    className={errors.date ? 'error' : ''}
                  />
                  {errors.date && <span className={styless.error_message}>{errors.date}</span>}
                </div>
                </div>

                {/* start */}

                <div className={styless.newUserRow}>
                <div className={styless.newUserItem}>
                  <label htmlFor="categray">What Kind of Problem:</label>
                  <select 
                    name="problemtype"
                    value={nRecordDetails.problemtype}
                    onChange={handleInputChange}
                    className={errors.categray ? 'error' : ''}
                    >
                         <option value="">-- Select an option --</option>
                         <option value="Payment">Payment</option>
                         <option value="Registration">Registration</option>
                         <option value="SignUp">SignUp</option>
                         <option value="SignIn">SignIn</option>
                         <option value="Lawyer">Lawyer</option>
                         <option value="LandLoard">LandLoard</option>
                         <option value="Vehicle">Vehicle</option>
                         
                    </select>
                  
                  {errors.categray && <span className={styless.error_message}>{errors.categray}</span>}
                </div>
                
                

                {/* end */}

                
                <div className={styless.newUserItem}>
                  <label htmlFor="problem">Problem:</label>
                  <textarea id="problem" rows="4" cols="50" 
                    name="problem"
                    value={nRecordDetails.problem}
                    onChange={handleInputChange}
                    className={errors.problem ? 'error' : ''}
                  />
                  {errors.problem && <span className={styless.error_message}>{errors.problem}</span>}
                </div>
                </div>
                
                  <button className={styless.newUserButton}>Add Record</button>
              </form>
                  </div>  
</div>



          {/* end coding */}
        </div>
      </div>
    </div>
  );
};

export default Add_NewRecord;
