import React, { useRef, useState, useEffect } from "react";
import Sidebar from "../../../components/com.vehicleOwner/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import styless from "./vehicles.module.css";
import ReactToPrint from "react-to-print";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "primereact/image";
import { Tag } from "primereact/tag";
// import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog"; // For confirmDialog method
import axios from "axios";
import Swal from 'sweetalert2';
import ReportGenerate from "../../../components/com.vehicleOwner/ReportVehicle/ReportGenerate";



const Vehicle = () => {
  const ref = useRef();
  const items = [{ label: "Vehicles", url: "/vehicleOwner/vehicles" }];
  const home = { icon: "pi pi-th-large", url: "/vehicleOwner" };

  const componentRef = useRef();

  const updateFunc = (id) => {
    navigate('update-vehicle', { state: { id } })
  }

  const navigate = useNavigate()

  // const VehicleName = (text) => {
  //   return text.substring(0, 20) + " ...";
  // };

  // const VehicleEmail = (text) => {
  //   return text.substring(0, 5) + " ...";
  // };

  // const contno = (text) => {
  //   return text.substring(0, 5) + " ...";
  // };


  // const date = (text) => {
  //   return text.substring(0, 5) + " ...";
  // };





  // const accept = () => {
  //   toast.current.show({
  //     severity: "success",
  //     summary: "Confirmed",
  //     detail: "You have successfully deleted",
  //     life: 3000,
  //   });
  // };


  // const confirm = () => {
  //   confirmDialog({
  //     message: "Do you want to delete this record?",
  //     header: "Delete Confirmation",
  //     icon: "pi pi-info-circle",
  //     acceptClassName: "p-button-danger",
  //     accept,
  //   });
  // };

  const pickStatus = (status) => {
    if (status.toLowerCase() === "active") {
      return (
        <Tag
          className={styless.status__btn}
          icon="pi pi-check"
          severity="success"
          value="Active"
        />
      );
    } else {
      return (
        <Tag
          className={styless.status__btn}
          icon="pi pi-info-circle"
          severity="warning"
          value="Pending"
        ></Tag>
      );
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [vehicles, setVehicle] = useState([]);

  const id = localStorage.getItem("id");

  useEffect(() => {
    function getVehicle() {
      axios
        .get(`http://localhost:7070/api/vehi/user/${id}`)
        .then((res) => {
          setVehicle(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getVehicle();
  }, []);

  const filteredData = vehicles.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.name} ${data.email} ${data.contact} ${data.date} ${data.status} ${data.image}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  // Delete Function Call
  const deleteVehicle = (id) => {
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
      .delete(`http://localhost:7070/api/vehi/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
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


  return (

    <div>
      {/* <Toast ref={toast} />
    <ConfirmDialog /> */}
      <Sidebar />
      <div ref={componentRef}>
        <ReportGenerate />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>Vehicles</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
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
                      export
                    </Button>
                  )}
                  content={() => componentRef.current}
                />

                <Link to="/vehicleowner/vehicles/add-vehicle">
                  <Button
                    label="Add Vehicle"
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
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Image</th>
                  <th>Operation</th>
                </tr>
                {filteredData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>{data.date}</td>
                    <td>{pickStatus(data.status)}</td>
                    <td>
                      {data.image.length > 0 && (
                        <Image
                          src={data.image}
                          zoomSrc={data.image}
                          alt="Image"
                          width="70"
                          height="50"
                          preview
                        />
                      )}
                    </td>

                    <td>


                      <Button label="Edit" severity="success" raised onClick={() => { updateFunc(data._id) }} />

                      <Button
                        label="Delete"
                        severity="danger"
                        raised
                        onClick={() => deleteVehicle(data._id)}
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
export default Vehicle;

