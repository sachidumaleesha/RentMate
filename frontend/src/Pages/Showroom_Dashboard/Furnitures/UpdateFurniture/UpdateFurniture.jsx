import React, { useState,useEffect } from 'react';
import Sidebar from "../../../../components/com.showRoom/sidebar/Sidebar";
import styles from "../../../../components/com.style/contentArea.module.css";
import styless from "./updateFurniture.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UpdateFurniture = () => {
  const [furnitureDetails, setFurnitureDetails] = useState({
    name: "",
    price: "",
    quantity: "",
    Category: "",
    images: ""
  });

  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    // setValues({ ...values, [name]: value });
    // setErrors({ ...errors, [name]: null });
    setFurnitureDetails({ ...furnitureDetails, [event.target.name]: event.target.value })
  };


  // const navigate = navigate();
  const location = useLocation();
  const id = location.state.id

  const updateFunction = async () => {
    await axios.put(`http://localhost:7070/api/Furniture/${id}`, furnitureDetails)
      .then((res) => console.log(res.data))
      // .then((response) => setFurnitureDetails(response.data))
      .catch((error) => console.log(error))
  }

  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:7070/api/Furniture/${id}`)

        .then((res) => setFurnitureDetails(res.data))
        .catch((err) =>
          console.log(err));
      console.log(setFurnitureDetails);

    }
    fetchData();
  }, []);

  const [image, setImage] = useState("");


  const handleImageChange = (event) => {
    setImage(event.target.value);
  }

  const items = [
    { label: "Dashboard", url: "/showroomOwner" },
    { label: "Add Furniture", url: "/showroomOwner/furnitures/add-furniture" },
  ];
  const home = { icon: "pi pi-th-large", url: "/showroomOwner" };

  const handleSubmit = (event) => {
    updateFunction()
    event.preventDefault();
    navigate('/showroomOwner/furnitures');
    //     const validationErrors = validate(values);
    //     setErrors(validationErrors);
    //     if (Object.keys(validationErrors).length === 0) {
    //       onSubmit(values);
    //       setValues({
    //         name: '',
    //         email: '',
    //         contactNumber: '',
    //         date: '',
    //         description: '',
    //         image: '',
    //       });
    //     }
  };
  const navigate = useNavigate();
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Update Furnitures</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>
            <div className={styless.formbody}>
              {/* <div className={styless.furniture}> */}
              <h2 className={styless.furnitureTitle}>Update Furniture</h2>
              <form className={styless.furnitureForm} onSubmit={handleSubmit}>

                {/* <div className={styless.addFur}>
              <img src={addFur} alt=""/>
          </div> */}
                <div className={styless.furnitureItem}>

                  <label>Furniture Name</label>
                  <input type="text" name='name' value={furnitureDetails.name} onChange={handleInputChange} required />
                </div>
                <div className={styless.furnitureItem}>
                  <label>Price (LKR)</label>
                  <input type="number" name='price' value={furnitureDetails.price} onChange={handleInputChange} required min={0} />
                </div>
                <div className={styless.furnitureItem}>
                  <label>Quantity</label>
                  <input type="number" name='quantity' value={furnitureDetails.quantity} onChange={handleInputChange} required min={0} />
                </div>
                <div className={styless.furnitureItem}>
                  <label>Category</label>
                  {/* <input type="text" /> */}
                  <select className={styless.catogeryItem} name="Category" value={furnitureDetails.Category} onChange={handleInputChange}>
                    <option placeholder="Select caregory">Select Caregory</option>
                    <option value="chair">Chair</option>
                    <option value="bed">Bed</option>
                    <option value="table">Table</option>
                    <option value="sofa">Sofa</option>
                    <option value="others">Other</option>
                  </select>
                </div>
                {/*   
          <div className={styless.furnitureItem}>
                    <label htmlFor="image">Upload Image</label>
                    <input
                      name='image'
                      value={furnitureDetails.images}
                      type="file"
                      id="image"
                      accept="image/*"
                      
                      onChange={handleInputChange}
                    />
                  </div> */}

                <button type="submit" className={styless.furnitureButton}>Update</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
    // </div>

  );
};


export default UpdateFurniture;
