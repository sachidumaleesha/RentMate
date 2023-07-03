import React, { useEffect, useState } from "react";
import axios from "axios";
import "./customer_Profile.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Navigator from "../../components/Customer_Profile/profile_nav/Profile_nav";
import Info_Card from "../../components/Customer_Profile/info_card/Info_card";

const Customer_Profile = () => {

  // const [task, setTask] = useState("");
  const [task, setTask] = useState("");
  const [dataCount, setDataCount] = useState(0);
  
  //get user id from storage
  const userid = localStorage.getItem("id");

  const handleChange = (e) => {
    setTask(e.target.value);
  }; 

  const submitHandler = (e) => {
    console.log(task);
    e.preventDefault();
    axios.post("http://localhost:7070/api/customer/insert",{
      userid: userid,
      content: task,
    })
      .then((response) => {
        // console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        // handle the error, if needed
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:7070/api/customer/getpropertybooking/${userid}`)
      .then((res) => {
        setDataCount(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const [tododata, setAllData] = useState([]);
  useEffect(() => {
    function getTodos() {
      axios(`http://localhost:7070/api/customer/gettodo/${userid}`) 
        .then((res) => {
          setTodos(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTodos();
  }, []);
  
  
  const [todos, setTodos] = useState([]);
  
  // Assuming todos is an array of documents
  
  
  return (
    <div>
      <Navbar />
      <div className="master">
        <Navigator />
        <div className="profile_home">
          <Info_Card />
          <div className="main_card">
            <div className="greeting">
              <h1>Hello! Shan</h1>
            </div>
            <div className="status_bar">
              <div className="content1"><h1 className="prop_book">0{dataCount}</h1></div>
              <div className="content2"><h1 className="trans_book">00</h1></div>
            </div>
            <div className="second_layer">
              <div className="todo_container">
                <div className="todo_list">
                  <h1>To Do</h1> 
                  <div className="todo_input">
                    <form onSubmit={submitHandler}>
                      {/* <input type="text" placeholder="Add a new task" /> */}
                      <textarea name="task" value={task} cols="30" rows="5" onChange={handleChange}></textarea>
                      <button type="submit">Add</button>
                    </form>
                  </div>
                  <div className="display_todo">
                      {todos.map((eshan) => (
                        <><span className="display_todo_content">🛑{eshan.content}</span><br /></>
                      ))}
                  </div>
                </div>
              </div>
              <div className="image_layer"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customer_Profile;
