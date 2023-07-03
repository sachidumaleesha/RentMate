import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../../../components/com.showRoom/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import styless from './showroomfurn.module.css';

import { BreadCrumb } from "primereact/breadcrumb";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import ReactToPrint from "react-to-print";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Tag } from "primereact/tag";
import Swal from 'sweetalert2'
// import { ConfirmDialog } from "primereact/confirmdialog"; // For <ConfirmDialog /> component
// import { confirmDialog } from "primereact/confirmdialog"; // For confirmDialog method
import axios from "axios";
import FurnitureReport from "../../../components/com.showRoom/FurnitureReport/FurnitureReport";

const ShowroomFurnitures = () => {

  const navigate = useNavigate();

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
    image: '',
  });

  const [errors, setErrors] = useState({});

  const toast = useRef(null);
  const componentRef = useRef();

  const accept = () => {
    toast.current.show({
      severity: "success",
      summary: "Confirmed",
      detail: "You have successfully deleted",
      life: 3000,
    });
  };


  const confirm = () => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept,
    });
  };

  const confirm2 = () => {
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept,

    });
  };


  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [furniture, setFurniture] = useState([]);

  const items = [
    { label: "Furniture", url: "/showroomOwner/furnitures" }
  ];
  const home = { icon: "pi pi-th-large", url: "/showroomOwner" };

  const showroomId = localStorage.getItem('showroomId')

  useEffect(() => {
    function getFurniture() {
      axios
        .get(`http://localhost:7070/api/Furniture/showroom/${showroomId}`)
        .then((res) => {
          setFurniture(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getFurniture();
  }, []);

  const filteredData = furniture.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.name} ${data.price} ${data.quantity} ${data.Category} ${data.images}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  //update Function call
  const updateFunc = id => {
    navigate('/showroomOwner/furnitures/update-furniture', { state: { id } })
  }


  // Delete Function Call
  // const deleteFurniture = (id) => {
  //   axios
  //     .delete(`http://localhost:7070/api/Furniture/${id}`)
  //     .then((res) => {

  //       console.log(res);
  //       console.log(res.date);
  //       window.location.reload()
  //     });
  // };

  const deleteFurniture = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
    axios
      .delete(`http://localhost:7070/api/Furniture/${id}`)
      .then((res) => {

        console.log(res);
        console.log(res.data);
       // window.location.reload();
      });
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ).then((result) => {
        if (result.isConfirmed) {
          window.location.reload(false);
        }
      })
    }
  })
  };


  // function handleFilter(event) {
  //   const result = data.filter((record) => {
  //     return record.name.toLowerCase().includes(event.target.value.toLowerCase());
  //   });
  //   setRecords(result);
  //   setSearch(event.target.value);
  // }

  return (
    <div>
      <Sidebar />
      <div ref={componentRef}>
      <FurnitureReport/>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>Furnitures</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <Toast ref={toast} />
          <ConfirmDialog />
          <div className={styles.contentbody}>

            <div className={styless.top__content}>
              <div className={styless.left__side}>
                <input
                  type="search"
                  placeholder="Search..."
                  className="form-control search-input"
                  data-table="dataTable-list"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className={styless.right__side}>
                <ReactToPrint
                  trigger={() => (
                    <Button variant="contained" color="primary">
                      Export
                    </Button>
                  )}
                  content={() => componentRef.current}
                />

                <Link to="add-furniture">
                  <Button
                    label="Add Furniture+"
                    severity="secondary"
                    raised
                    className={styless.function_btn}
                  />
                </Link>
              </div>
            </div>
            <div className={styless.tablearea__content} >
              <table>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Operation</th>
                </tr>
                {filteredData.map((data) => (
                  <tr key={data.id}>
                    <td>{(data.name)}</td>
                    <td>{(data.price)}</td>
                    <td>{(data.quantity)}</td>
                    <td>{(data.Category)}</td>


                    <td>
                      {data.images.length > 0 && (
                        <Image
                          src={data.images}
                          zoomSrc={data.images}
                          alt="Image"
                          width="70"
                          height="50"
                          preview
                        />
                      )}
                    </td>

                    <td>

                      <Button label="Update" severity="success" raised onClick={() => { updateFunc(data._id) }} />

                      <Button
                        label="Delete"
                        severity="danger"
                        raised
                        onClick={() => { deleteFurniture(data._id) }}
                      />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default ShowroomFurnitures;