import React, { useState } from "react";
import styles from "./login.module.css";
import validation from "./Validation";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setError] = useState({});

  const hadleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(values));

    axios
      .post(`http://localhost:7070/api/userr/login`, values)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("id", res.data._id);
        localStorage.setItem("role", res.data.roll);
        localStorage.setItem("paid", res.data.paid);
      })
      .then(() => {
        const role = localStorage.getItem("role");

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "User Logged In Successfully!",
        }).then((result) => {
          if (result.isConfirmed) {
            if (role === "Regular User") {
              window.location.href = "/customer";
            } else if (role === "Vehical Owner") {
              window.location.href = "/vehicleOwner";
            } else if (role === "Showroom Owner") {
              window.location.href = "/showroomOwner";
            } else if (role === "Landloard") {
              window.location.href = "/landlord";
            } else if (role === "Lowyer") {
              window.location.href = "/lawyer";
            } else if (role === "Site Owner") {
              window.location.href = "/siteOwner";
            }
          }
        });
      })
      .catch((err) => {
        Swal.fire("Error", "Check your email and password again", "error");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.mainContainer}>
          <div className={styles.imageContainer}></div>
          <div className={styles.loginContainer}>
            <div className={styles.inner}>
              <div className={styles.form_head}>
                <div className={styles.title}>Login</div>
                <span className={styles.subtitle}>Don't have an account?</span>
                <a href="/signup" className={styles.maintext3}>
                  Create today!
                </a>
              </div>

              <div className={styles.form_groupmain}>
                <div className={styles.group}>
                  <div className={styles.label_text}>Email</div>
                  <input
                    value={values.name}
                    name="email"
                    type="email"
                    className={styles.form_control}
                    placeholder="Enter email"
                    onChange={hadleChange}
                  />
                  {errors.name && (
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className={styles.group}>
                  <div className={styles.label_text}>Password</div>
                  <input
                    value={values.password}
                    name="password"
                    type="password"
                    className={styles.form_control}
                    placeholder="Password"
                    onChange={hadleChange}
                  />
                  {errors.password && (
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className={styles.form_button}>
                  <div className={styles.check_action}>
                    <input type="checkbox" name="remember" />
                    <label> Remember me</label>
                  </div>

                  <a href="#" className={styles.link}>
                    Forgot Password?
                  </a>
                </div>

                <button label="Submit" className={styles.btn1}>
                  Login
                </button>
                <br />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
