import React, { useEffect, useState } from "react";
import Navbar from '../../components/navbar/Navbar'
import styles from './allblog.module.css';
import axios from 'axios';

const Allblogs = () => {
  const [listings, setListings] = useState([]);

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


  return ( 
    <div>
    <Navbar />
    <div className={styles.header}>
      <h1 className={styles.topic1}>Latest updates Are here</h1>
      <h2 className={styles.topic}>OUR BLOGS</h2>
    </div>

   
    <div className="w3-row-padding">
  {listings.map((blog) => (
    <div key={blog.id} className={styles.w3_third}>
     <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-714258423682866070/original/960755ad-ce79-4606-8f17-7c2d6c64fe41.jpg?im_w=720" alt="" style={{ width: '400px', height: '300px' }} />

      <div className={styles.w3_white}>
        <p><b>{blog.title}</b></p>
        <p>{blog.description}</p>
      </div>
    </div>
  ))}
</div>

  </div>
);
};

export default Allblogs