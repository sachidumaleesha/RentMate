// import React from "react";
import React, { useEffect, useState ,useRef, Component} from "react";
import Sidebar from "../../../components/com.mainDashboard/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";

import styless from "./bloglist.module.css";
import axios from "axios";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Image } from "primereact/image";
import { Tag } from "primereact/tag";
import { ConfirmDialog,confirmDialog } from "primereact/confirmdialog"; // For confirmDialog method
import ReactToPrint from "react-to-print";
import { useNavigate } from "react-router-dom";
import Reportblog from "../../../components/com.blog/Reportblog/Reportblog";



const BlogList = () => {
  const items = [{ label: "Blog", url: "/siteowner/blog" }];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };

const componentRef = useRef();
const toast = useRef(null);



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

const [Blogs, setListings] = useState([]);

useEffect(() => {
  function getBlogs() {
    axios
      .get("http://localhost:7070/api/blog/")
      .then((res) => {
        setListings(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getBlogs();
}, []);

const navigate = useNavigate()


const filteredData = Blogs.filter((data) => {
  const searchTerms = searchTerm.toLowerCase().split(" ");
  const dataInfo =
    `${data.title} ${data.idNo} ${data.content} ${data.date} ${data.image} `.toLowerCase();
  return searchTerms.every((term) => dataInfo.includes(term));
});

// Delete Function Call
const deleleblog = (id) => {
  axios
    .delete(`http://localhost:7070/api/blog/${id}`)
    .then((res) => {
     
       console.log(res);
       console.log(res.date);
       window.location.reload();
    });
};


const updatefunc =(id) =>{
  navigate('/siteowner/blog/update-blog', {state:{id}})
}


  return (
    <div>
      <Sidebar />
      <div ref ={componentRef}>
        <Reportblog/>
      </div>
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

              <Link to="/siteowner/blog/add-blog">
                <Button
                  label="Add post"
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
                <th>Title</th>
                <th>Id</th>
                <th>Content</th>
                <th>Date</th>
                <th>Image</th>
                <th>Operation</th>
              </tr>
              {filteredData.map((data) => (
                <tr key={data.id}>
                  <td>{data.title}</td>
                  <td>{data.idNo}</td>
                  <td>{data.content}</td>
                  <td>{data.date}</td>
                  
                  
                  <td>
                    {data.image.length > 0 && (
                      <Image
                        src={data.image[0]}
                        zoomSrc={data.image[0]}
                        alt="Image"
                        width="70"
                        height="50"
                        preview
                      />
                    )}
                  </td>
                  <td>
                    
                    {/* <Link to="/sit0eowner/blog/update-blog"> */}
                      <Button label="Update" severity="success" raised onClick={()=>{updatefunc(data._id)}} />
                    {/* </Link> */}
                    <Button
                      label="Delete"
                      severity="danger"
                      raised
                      onClick={()=>{deleleblog(data._id)}}
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

export default BlogList;
