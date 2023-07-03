import React, { useRef, useState, useEffect  } from "react";
import Sidebar from "../../../../components/com.mainDashboard/sidebar/Sidebar";
import styles from "../../../../components/com.style/contentArea.module.css";
import styless from './pendingVehicles.module.css'
import { BreadCrumb } from "primereact/breadcrumb";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog"; // For <ConfirmDialog /> component
import { confirmDialog } from "primereact/confirmdialog"; // For confirmDialog method
import axios from "axios";
import Swal from "sweetalert2";
import { Tag } from "primereact/tag";

const PendingVehicles = () => {
  const items = [
    { label: "Pending List", url: "" },
    { label: "Pending Vehicles", url: "/siteowner/pending-list/pending-vehicles" },
  ];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };


  
  const componentRef = useRef();
  const toast = useRef(null);


  const confirm = () => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept,
    });
  };

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

  const [listings, setListings] = useState([]);

  useEffect(() => {
    function getListings() {
      axios
        .get("http://localhost:7070/api/vehi/")
        .then((res) => {
          setListings(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getListings();
  }, []);

  const filteredData = listings.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.name} ${data.email} ${data.contact} ${data.date} ${data.status}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  // Delete Function Call
  const deletevehicle = (id) => {
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
          // handle success
          console.log("Listing deleted successfully!");
          // update the listings state by removing the deleted listing
          setListings(listings.filter((listing) => listing.id !== id));
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


  



  const accept = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to  give Approvel!",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#4caf50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Accept it!'
    }).then((result) => {
      if (result.isConfirmed) {
    axios
      .put(`http://localhost:7070/api/vehi/${id}`, { status: "Active" })
      .then((res) => {
        // handle success
        console.log("Listing status changed to active!");
        // update the listings state to reflect the changed status
        const updatedListings = listings.map((listing) =>
          listing.id === id ? { ...listing, status: "Active" } : listing
        );
        setListings(updatedListings);
        // toast.current.show({
        //   severity: "success",
        //   summary: "Confirmed",
        //   detail: "Listing status changed to active!",
        //   life: 3000,
        // });
      })
      Swal.fire(
        'Accepted!',
        'Your file has been accepted.',
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
       <Toast ref={toast} />
      <ConfirmDialog />
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Pending Vehicles</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>
          <div className={styless.flex_container}>
            <div className={styless.R1}>
            <a href="/siteowner/pending-list/pending-properties" className={styless.shadoww}>
            <button className={styless.gradientt}>Properties </button>
            </a>
            </div>
            <div className={styless.R1}>
            <a href="/siteowner/pending-list/pending-vehicles" className={styless.shadoww}>
            <button className={styless.gradientt}> Vehicles </button>
            </a>
             </div>
           
          </div>




          <div className={styless.content}>
              <div className={styless.left_side}>
                <input
                  type="search"
                  placeholder="Search here..."
                  className="form-control search-input"
                  data-table="dataTable-list"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              
            </div>

            <div className={styless.tablearea__content} ref={componentRef}>
              <table>
                <tr>
                  <th>Name</th>                  
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Date</th>                  
                  <th>Status</th>
                  <th>Operation</th>
                </tr>
                {filteredData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.name}</td>                  
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>{data.date}</td>                    
                    {/* <td>{data.status}</td> */}
                     <td>{pickStatus(data.status)}</td> 
                    <td>
                      
                        <Button label="Accept" severity="success" raised onClick={()=>{accept(data._id)}} />
                      
                      <Button
                        label="Delete"
                        severity="danger"
                        raised
                        onClick={()=>{deletevehicle(data._id)}}
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

export default PendingVehicles;
