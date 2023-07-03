import React, { useState, useEffect } from "react";
import styles from "./customer_QASection.module.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Navigator from "../../../components/Customer_Profile/profile_nav/Profile_nav";
import Info_Card from "../../../components/Customer_Profile/info_card/Info_card";
import axios from "axios";


const Customer_QASection = () => {

    const [problems, setProblems] = useState([]);
    const id = localStorage.getItem("id");

    useEffect(() => {
        function getProblems() {
            axios.get("http://localhost:7070/api/problems/user/" + id).then((res) => {
                setProblems(res.data);
                console.log(res.data);
            })
                .catch((err) => {
                    console.log(err);
                });
        }
        getProblems();
    }, []);

    return (
        <div>
            <Navbar />
            <div className={styles.master}>
                <Navigator />
                <div className={styles.profile_home}>
                    <Info_Card />
                    <div className={styles.main_card}>
                        <div className={styles.table__header}>
                            <h1>Q & A Section</h1>
                        </div>
                        <div className={styles.table_box}>

                            <main className={styles.table_container}>
                                <section className={styles.table__body}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th> Problem <span className="icon-arrow"></span></th>
                                                <th> Reply <span className="icon-arrow"></span></th>
                                                <th> Date <span className="icon-arrow"></span></th>
                                                <th> Status <span className="icon-arrow"></span></th>
                                            </tr>
                                        </thead>
                                        <hr />
                                        <tbody>
                                            {/* <tr>
                                                <td> 1 </td>
                                                <td> I want contact Nipuni Perera lawyer but that phone number not work </td>
                                                <td> Contact the this +94 776753876 Number </td>
                                                <td> 19 Jan, 2023 </td>
                                                <td>
                                                    <p className={styles.status_solved}>Sloved</p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td> 2 </td>

                                                <td> I get to rent home. But i has some problem. What do I do? </td>

                                                <td>  </td>
                                                <td> 17 Feb, 2023 </td>
                                                <td>
                                                    <p className={styles.status_pending}>Pending</p>
                                                </td>

                                            </tr> */}

                                            {problems.map((problem) => (
                                                <tr key={problem._id}>
                                                    <td> {problem.problem} </td>
                                                    <td> {problem.reply} </td>
                                                    <td> {problem.date} </td>
                                                    <td>
                                                        {/* <p className={styles.status_pending}>{problem.status}</p> */}
                                                        {problem.status === "Pending" ? (
                                                            <p className={styles.status_pending}>{problem.status}</p>
                                                        ) : (
                                                            <p className={styles.status_solved}>{problem.status}</p>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </section>

                            </main>
                        </div>
                        <div className={styles.btn_container}>
                            <a href="/customer/question/ask">+ Ask Question</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Customer_QASection;


