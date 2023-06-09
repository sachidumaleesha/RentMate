import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import styles from './landLordRevenue.module.css'

const LandlordRevenue = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["House", "Rooms", "Apartments"],
      datasets: [
        {
          label: "Revenue",
          data: [540, 325, 702, 620],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 2,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className={styles.data__charts}>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default LandlordRevenue;
