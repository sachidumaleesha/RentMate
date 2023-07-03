
import React, { useState } from "react";
import Sidebar from '../../../../components/com.mainDashboard/sidebar/Sidebar'
import styless from '../../../../../src/Pages/Main_Dashboard/BlogManagement/Add_blog/addblog.module.css'
import { BreadCrumb } from "primereact/breadcrumb";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Addblog = () => {
  const items = [
    { label: "Blog", url: "/siteowner/blog" },
    { label: "Add Blog", url: "/siteowner/blog/add-blog" }
  ];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };

  const [blogDetails, setBlogDetails] = useState(
    {
      title: '',
      idNo: '',
      content: '',
      date: '',
      image: '',
      catergory: '',
      
    }
  );

  const hadleChange = (e) => {

    setBlogDetails({ ...blogDetails, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(blogDetails);

    sendData()
    navigate("/siteowner/blog")

  };

  const sendData = async () => {
    await axios.post("http://localhost:7070/api/blog/", blogDetails)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

const navigate = useNavigate();



  return (
    <div>
      <Sidebar />
      <div className={styless.content}>
        <div className={styless.text}>Add Blog</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styless.breadcrumb__path}
        />
        <hr className={styless.line} />
        <div className={styless.contentArea}>
          <div className={styless.contentbody}>

            <div className={styless.formbody}>
              <div className={styless.furniture}>

                <form onSubmit={handleSubmit}>


                  <div className={styless.furnitureItem}>
                  

                    <label>Title</label>
                   
                    
                    <input type="text" placeholder="Enter Title here" name="title" value={blogDetails.title} onChange={hadleChange} />
                  </div>
                  <div className={styless.furnitureItem}>
                    <br /><br />
                    <label>Id</label>
                    <input type="text" placeholder="Id here" name="idNo" value={blogDetails.idNo} onChange={hadleChange} />
                    <br /><br /><br />
                    <label for="cars">Select Catergory: </label>
                  <select name="catergory" value={blogDetails.catergory} onChange={hadleChange} >
                    <option value="volvo">HomeStay</option>
                    <option value="saab">ShowRoom</option>
                    <option value="opel">Lowyer</option>
                    <option value="audi">Vehicles</option>
                  </select>
                  </div>
                  <div className={styless.furnitureItem}>

                  </div>
                  <br /><br />
                  <label>Text Here</label>
                  <textarea rows="15" cols="33" name="content" value={blogDetails.content} onChange={hadleChange}>
                  </textarea>

                  <br /><br />
                  
                  <label htmlfor="Date">Date:</label>
                   <input type="date" id="date" name="date"  value={blogDetails.date} onChange={hadleChange}/>
                  <br /><br />

                  <input type="file" name="image" value={blogDetails.image} onChange={hadleChange} />
                  
                   
                  <br />
                  
                  <button className={styless.furnitureButton}>POST</button>
                </form>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Addblog