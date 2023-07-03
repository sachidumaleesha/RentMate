import React, { useState, useRef, useEffect} from "react";
import Sidebar from "../../../components/com.mainDashboard/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import styless from "./supportCenterDash.module.css"
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { BreadCrumb } from "primereact/breadcrumb";
import axios from "axios";
import Swal from 'sweetalert2'
import SupportReport from "../../../components/com.mainDashboard/SupportReport/SupportReport";

const SupportCenterDash = () => {
  const items = [
    { label: "Support Center", url: "/siteowner/support-center" }
  ];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };
  // start coding
  const toast = useRef(null);
  const componentRef = useRef();

  // const ListingName = (text) => {
  //   return text.substring(0, 20) + " ...";
  // };

  const accept = () => {
    toast.current.show({ severity: 'success', summary: 'Confirmed', detail: 'You have successfully deleted', life: 3000 });
  }

  // const reject = () => {
  //     toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  // }



  const confirm = () => {
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept,

    });
  };

  const pickStatus = (status) => {
    if (status === "Solved") {
      return (
        <Tag
          className={styless.status__btn}
          icon="pi pi-check"
          severity="success"
          value="Solved"
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

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    function getProblems() {
      axios
        .get("http://localhost:7070/api/problems/")
        .then((res) => {
          setProblems(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getProblems();
  }, []);

  const filteredData = problems.filter((data) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");
    const dataInfo =
      `${data.name} ${data.email} ${data.contactNumber} ${data.date} ${data.problemtype} ${data.problem} ${data.status}`.toLowerCase();
    return searchTerms.every((term) => dataInfo.includes(term));
  });


  const deleteProblems = (id) => {
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
      .delete(`http://localhost:7070/api/problems/${id}`)
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


  // end coding
  return (

    <div>
      <Toast ref={toast} />
      <ConfirmDialog />
      <Sidebar />
      <div ref={componentRef}>
        <SupportReport />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>Support Center</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>


            {/* start coding */}

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

                <Link to="/siteowner/support-center/add-record">
                  <Button
                    label="+ New Record"
                    severity="secondary"
                    raised
                    className={styless.function_btn}
                  />
                </Link>
              </div>
            </div>

            <div className={styless.tablearea__content}>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Problem Description</th>
                  <th>Status</th>
                  <th>Operation</th>
                </tr>
                {filteredData.map((data) => (
                  <tr key={data._id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contactNumber}</td>
                    <td>{data.date}</td>
                    <td>{data.problemtype}</td>
                    <td>{data.problem}</td>
                    <td>{pickStatus(data.status)}</td>
                    <td>
                      <Link to={`/siteowner/support-center/replyInquary/${data._id}`}>
                        <Button label="Reply" severity="success" raised />
                      </Link>
                      <Button
                        label="Delete"
                        severity="danger"
                        raised
                        onClick={() => deleteProblems(data._id)}
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

export default SupportCenterDash;