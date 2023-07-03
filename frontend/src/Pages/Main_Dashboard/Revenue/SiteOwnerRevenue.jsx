//import React from "react";
import Sidebar from "../../../components/com.mainDashboard/sidebar/Sidebar";
import styles from "../../../components/com.style/contentArea.module.css";
import style from "../Revenue/siteOwnerRevenue.module.css";
import { BreadCrumb } from "primereact/breadcrumb";
import img1 from "../Revenue/images/Dollar2.png";
import img2 from "../Revenue/images/property2.png";
import img3 from "../Revenue/images/transport.png";
import img4 from "../Revenue/images/adz.png";
import { Card } from "primereact/card";
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import axios from "axios"

const SiteOwnerRevenue = () => {
  const items = [{ label: "Revenue", url: "/siteowner/revenue" }];
  const home = { icon: "pi pi-th-large", url: "/siteowner" };

  const [searchTerm, setSearchTerm] = useState("");
        const handleSearchChange = (event) => {
          setSearchTerm(event.target.value);
        };

  // Pie chart for category wise income
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [reservation, setReservation] = useState([]);

  // line graph for total income previous year

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Property', 'Transport', 'Subscription'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        };
	const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);

        function getReservationDetails(){
          axios.get("http://localhost:7070/reservation/").then((res) =>{
            setReservation(res.data)
          }).catch((err) => {
            alert(err.message);
          })
        }

        getReservationDetails();
    }, []);

    const filteredreservationData = reservation.filter((data) => {
      const searchTerms = searchTerm.toLowerCase().split(" ");
      const dataInfo =
        `${data.reserveItem} ${data.bookingDate} ${data.amount}`.toLowerCase();
      return searchTerms.every((term) => dataInfo.includes(term));
    });

    //calculate total income

    let totalIncome = 0;

    reservation.forEach((data) => {
    totalIncome += data.amount;
    });

    console.log(reservation)

  return (
    <div>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.text}>Revenue</div>
        <BreadCrumb
          model={items}
          home={home}
          className={styles.breadcrumb__path}
        />
        <hr className={styles.line} />
        <div className={styles.contentArea}>
          <div className={styles.contentbody}>
              <div className={style.revenue_Box}>
                <Card title="Earning" className={style.card_main}>
                  <div className={style.cardDesign}>
                    <div className={style.overview_cd}>
                      <span className={style.headline}>Total Incomes</span>
                      <span className={style.amount}>$ {totalIncome}</span>
                    </div>
                    <div className={style.overview_cd}>
                      <span className={style.headline}>Property</span>
                      <span className={style.amount}>$ {}</span>
                    </div>
                    <div className={style.overview_cd}>
                      <span className={style.headline}>Transport</span>
                      <span className={style.amount}>$ 90600.00</span>
                    </div>
                    <div className={style.overview_cd}>
                      <span className={style.headline}>Subscription</span>
                      <span className={style.amount}>$ 17500.00</span>
                    </div>
                  </div>
                  {/* <div className={style.card}>
                    <Card className={style.card01}>
                      <div className={style.left}>
                        <div className={style.amount}>1 949 500.00</div>
                        <div className={style.category}><h3>Total</h3></div>
                      </div>
                      <div className={style.right}>
                        <div className={style.icon_case1}>
                          <div className={style.image}>
                            <img src={img1} alt="wallet" />
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card className={style.card01}>
                      <div className={style.left}>
                        <div className={style.amount}>1 125 650.00</div>
                        <div className={style.category}><h3>Property</h3></div>
                      </div>
                      <div className={style.right}>
                        <div className={style.icon_case2}>
                          <div className={style.image}>
                            <img src={img2} alt="wallet" />
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card className={style.card01}>
                      <div className={style.left}>
                        <div className={style.amount}>321 000.00</div>
                        <div className={style.category}><h3>Transport</h3></div>
                      </div>
                      <div className={style.right}>
                        <div className={style.icon_case3}>
                          <div className={style.image}>
                            <img src={img3} alt="wallet" />
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card className={style.card01}>
                      <div className={style.left}>
                        <div className={style.amount}>60 000.00</div>
                        <div className={style.category}><h3>Subscription</h3></div>
                      </div>
                      <div className={style.right}>
                        <div className={style.icon_case4}>
                          <div className={style.image}>
                            <img src={img4} alt="wallet" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div> */}
                </Card>
              </div>

              <div className={style.content_02}>
                <div className={style.category_prec}>
                  <div className={style.title}>
                    Categorical total Earning precentage
                  </div>
                  <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-20rem" />
                </div>
                <div className={style.total_prec}>
                  <div className={style.title}>
                    Total revenue
                  </div>
                  <Chart type="line" data={chartData} options={chartOptions} />
                </div>
              </div>

              <div className={style.content_03}>
              <Card title="Recent Transactions" className={style.transtable_card}>
              <div className={style.trans_table}>
                <table>
                  <thead>
                    <tr>
                      {/* <th>Payment ID</th> */}
                      <th>Description</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Refund Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredreservationData.map((data) => (
                    <tr>
                      {/* <td width={150}>P00001</td> */}
                      <td>{data.reserveItem}</td>
                      <td>{data.bookingDate}</td>
                      <td>
                        <strong>{data.amount}</strong>
                      </td>
                      <td>
                        <p className={style.status_complete}>Completed</p>
                      </td>
                      <td>
                        <select name="refund_status" id="ref_Status" className={style.refund_status}>
                          <option className="No_refund" value="No_refund" selected='"selected"'>-</option>
                          <option className="Req_refund" value="Req_refund">Request Refund</option>
                          <option className="In_progress" value="In_progress">In Progress</option>
                          <option className="refunded" value="refunded">Refunded</option>
                        </select>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </Card>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteOwnerRevenue;
