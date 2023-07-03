import React, { useState  ,useEffect} from "react";
import Sidebar from '../../../../components/com.mainDashboard/sidebar/Sidebar'
import styles from '../../../../components/com.style/contentArea.module.css'
import styless from './editblog.module.css'
import { BreadCrumb } from "primereact/breadcrumb";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit_blog = () => {
  const items = [
    { label: "Blog", url: "/siteowner/blog" },
    { label: "Update Blog", url: "/siteowner/blog/update-blog" }
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
    
    navigate("/siteowner/blog")
    updatefuction()

  };

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    const fetchData = async() => {
     await axios.get(`http://localhost:7070/api/blog/${id}`)
        .then((res) => {
          setBlogDetails(res.data);
          
        })
        .catch((err) => {
          console.log(err);
          console.log(blogDetails);
        });
    }
    fetchData();
  }, []); 









  const updatefuction = async () => {
    await axios.put(`http://localhost:7070/api/blog/${id}`, blogDetails)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }
  console.log(id)

  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Update Blog</div>
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

                <form onSubmit={handleSubmit}>


                  <div className={styless.furnitureItem}>

                    <label>Title</label>
                    
                    <input type="text"  name="title" value={blogDetails.title} onChange={hadleChange} />
                  </div>
                  <div className={styless.furnitureItem}>
                    <br /><br />
                    <label>ID</label>
                    <input type="text" name="idNo" value={blogDetails.idNo} onChange={hadleChange} />
                    <br /><br /><br />
                    <label for="cars">Select Catergory:</label>
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
                  <input type="date" id="date" name="date" value={blogDetails.date} onChange={hadleChange} />

                  <br /><br />

                  {/* <input type="file" name="image" value={blogDetails.image} onChange={hadleChange} /> */}
                  <br /><br />
                 
                  <br />
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

export default Edit_blog
