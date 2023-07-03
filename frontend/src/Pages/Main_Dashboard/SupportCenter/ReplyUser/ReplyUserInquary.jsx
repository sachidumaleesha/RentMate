import React, { useState, useEffect } from 'react'
import Sidebar from '../../../../components/com.mainDashboard/sidebar/Sidebar'
import styles from "../../../../components/com.style/contentArea.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import styless from './replyUser.module.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'


const ReplyUserInquary = () => {


  const { id } = useParams();

  const [problem, setProblem] = useState("")
  const [reply, setReply] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:7070/api/problems/${id}`)
        .then((response) => {
          setProblem(response.data.problem)
        })
        .catch((err) => console.log(err))
    }
    fetchData()
  }, [])


  const items = [
    { label: "Support Center", url: "/siteowner/support-center" },
    { label: "Reply", url: "/siteowner/support-center/replyInquary" },

  ];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const replyDetails = {
      reply: reply,
      status: "Solved"
    }

    axios.put(`http://localhost:7070/api/problems/${id}`, replyDetails)
    axios.put(`http://localhost:7070/api/problems/${id}`, replyDetails)

    Swal.fire(
      'Success',
      'Reply Sent Successfully',
      'success'
    )
    navigate('/siteowner/support-center');
    //navigate('/siteowner/support-center');

  };


  return (
    <div>
      <Sidebar />
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
            Reply 👉
            <div className={styless.replyform}>
              <div className={styless.newUserTitle}><b>Reply Form</b></div>
              <form className={styless.newUserForm} onSubmit={handleSubmit} >
                <div className={styless.newUserRow}>
                  <div className={styless.newUserItem}>
                    <label>ID</label>
                    <input type="text" placeholder="Enter Name" defaultValue={id} disabled />
                  </div>


                </div>


                <div className={styless.newUserRow}>
                  <div className={styless.newUserItem}>
                    <label>Problem</label>
                    <textarea rows="4" cols="50" placeholder="Enter Problem" defaultValue={problem} disabled />
                  </div>


                </div>


                <div className={styless.newUserRow}>
                  <div className={styless.newUserItem}>
                    <label>Reply</label>
                    <textarea rows="4" cols="50" placeholder="Enter Reply" onChange={(e) => setReply(e.target.value)} />
                  </div>


                </div>

                <button className={styless.newUserButton}>Submit</button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ReplyUserInquary
