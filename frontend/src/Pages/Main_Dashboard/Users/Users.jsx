import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../../../components/com.mainDashboard/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import styless from "./users.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import { Link } from "react-router-dom";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import ReactToPrint from "react-to-print";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
import UserDetailsReport from "../../../components/com.mainDashboard/UserReport/UserDetailsReport";



const Users = () => {
  const items = [{ label: "Users", url: "/siteowner/users" }];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };

  const componentRef = useRef();
  const toast = useRef(null);


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



  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [users, setUsers] = useState([])
  useEffect(() => {
    function getUsers() {
      axios
        .get(`http://localhost:7070/api/userr/`)
        .then((res) => {
          const AllUsers = res.data.users;
          setUsers(AllUsers)
          console.log(res.data.users);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getUsers();
  }, []);


  const navigate = useNavigate()

  //  const [users, setUsers] = useState([]);

  const filteredData = users.filter((data) => {
    console.log(data);
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.fname} ${data.lname} ${data.email} ${data.contactNumber} ${data.roll} ${data.username} ${data.password}  `.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });

  // Delete Function Call
  const deleteUser = (id) => {
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
          .delete(`http://localhost:7070/api/userr/${id}`)
          .then((res) => {
            console.log(res);
            console.log(res.data.users);
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

  const updateFunc = (id) => {
    navigate(`/siteowner/users/update-user-details`, { state: { id } })
  }

  

  return (
    <div>
      <div ref={componentRef}>
        <UserDetailsReport/>
      </div>
      <Toast ref={toast} />
      <ConfirmDialog />
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Dashboard</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>

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
              
              <div className={styless.right_side}>
                <ReactToPrint
                  trigger={() => (
                    <Button variant="contained" color="primary">
                      Print
                    </Button>
                  )}
                  content={() => componentRef.current}
                />

                <Link to="/siteowner/users/add-user">
                  <Button
                    label="New Users"
                    severity="secondary"
                    raised
                    className={styless.function_btn}
                  />
                </Link>
              </div>
            </div>
            <div className={styless.table_content} >
              <table>
                <tr>
                  <th>Fist Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Conatct Number</th>
                  <th>Roll</th>
                  <th>Username</th>

                  <th>Operation</th>
                </tr>
                {filteredData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.fname}</td>
                    <td>{data.lname}</td>
                    <td>{data.email}</td>
                    <td>{data.contactNumber}</td>
                    <td>{data.roll}</td>
                    <td>{data.username}</td>
                    <td>
                      {/* <Link to="/siteowner/users/update-user-details">
                        <Button label="Update" severity="success" raised />
                      </Link> */}

                      <Button label="Update" severity="success" raised onClick={() => { updateFunc(data._id) }} />

                      <Button
                        label="Delete"
                        severity="danger"
                        raised
                        onClick={() => { deleteUser(data._id) }}
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

export default Users;