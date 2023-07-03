import React, { useState } from 'react';
import Sidebar from "../../../../components/com.showRoom/sidebar/Sidebar";
import styles from "../../../../components/com.style/contentArea.module.css";
import styless from "./addFurniture.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import addFur from "../Images/addfur1.jpg"
import { useNavigate } from 'react-router-dom'
import { storage } from "../../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import Swal from "sweetalert2";

const AddFurniture = () => {

  const items = [
    { label: "Dashboard", url: "/showroomOwner" },
    { label: "Add Furniture", url: "/showroomOwner/furnitures/add-furniture" },
  ];
  const home = { icon: "pi pi-th-large", url: "/showroomOwner" };

  const [furnitureDetails, setFurnitureDetails] = useState({
    name: "",
    price: "",
    quantity: "",
    Category: "",
    images: "",
    showroomID: localStorage.getItem('showroomId')
  });

  const [image, setImage] = useState("");

  const handleInputChange = (event) => {
    setFurnitureDetails({ ...furnitureDetails, [event.target.name]: event.target.value })
  };


  async function handleSubmit(event) {
    event.preventDefault();
    console.log(furnitureDetails)

    if (furnitureDetails.name === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Name cannot be empty!'
      })
      return;
    }

    if (furnitureDetails.price === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Price cannot be empty!'
      })
      return;
    }

    if (furnitureDetails.quantity === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Quantity cannot be empty!'
      })
      return;
    }

    if (furnitureDetails.Category === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Category cannot be empty!'
      })
      return;
    }

    if (furnitureDetails.quantity < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Quantity cannot be negative!'
      })
      return;
    }

    if (furnitureDetails.price < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Price cannot be negative!'
      })
      return;
    }

    const storageRef = ref(storage, `furniture/${v4()}`);

    await uploadBytes(storageRef, image)
      .then(() => {
        console.log("Uploaded")
      })
      .catch((err) => {
        console.log(err)
      })

    await getDownloadURL(storageRef)
      .then((url) => {
        console.log(url)
        const newFurniture = {
          name: furnitureDetails.name,
          price: furnitureDetails.price,
          quantity: furnitureDetails.quantity,
          Category: furnitureDetails.Category,
          images: url,
          showroomID: furnitureDetails.showroomID
        }


        console.log(furnitureDetails)
        axios.post("http://localhost:7070/api/Furniture/", newFurniture)
          .then((response) => {
            console.log(response.data)
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Furniture Added Successfully!'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/showroomOwner/furnitures');
              }
            }
            )
          })
          .catch((error) => console.log(error))
      })
  };

  const navigate = useNavigate();

  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Add Furnitures</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>

            <div className={styless.formbody}>
              <div className={styless.furniture}>
                <h1 className={styless.furnitureTitle}>Add Furniture</h1>
                <form className={styless.furnitureForm} onSubmit={handleSubmit}>

                  <div className={styless.addFur}>
                    <img src={addFur} alt="" />
                  </div>
                  <div className={styless.furnitureItem}>

                    <label>Furniture Name</label>
                    <input type="text" name='name' value={furnitureDetails.name} placeholder="Enter furniture name" onChange={handleInputChange} required />
                  </div>
                  <div className={styless.furnitureItem}>
                    <label>Price (LKR)</label>
                    <input type="number" name='price' value={furnitureDetails.price} placeholder="Enter price" onChange={handleInputChange} required />
                  </div>
                  <div className={styless.furnitureItem}>
                    <label>Quantity</label>
                    <input type="number" name='quantity' value={furnitureDetails.quantity} placeholder="Quntity of furniture" onChange={handleInputChange} required />
                  </div>
                  <div className={styless.furnitureItem}>
                    <label>Category</label>
                    {/* <input type="text" /> */}
                    <select className={styless.catogeryItem} placeholder="Select caregory" name="Category" value={furnitureDetails.Category} onChange={handleInputChange}>
                      <option placeholder="Select caregory">Select Caregory</option>
                      <option value="chair">Chair</option>
                      <option value="bed">Bed</option>
                      <option value="table">Table</option>
                      <option value="sofa">Sofa</option>
                      <option value="others">Other</option>
                    </select>
                  </div>

                  <div className={styless.furnitureItem}>
                    <label htmlFor="image">Upload Image</label>
                    <input
                      name='image'
                      type="file"
                      id="image"
                      onChange={(e) => setImage(e.target.files[0])} />
                  </div>

                  <button type="submit" className={styless.furnitureButton}>Add</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFurniture;
