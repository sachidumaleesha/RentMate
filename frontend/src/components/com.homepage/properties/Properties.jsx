import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../com.style/homepage.module.css";

const Properties = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [randomImagePaths, setRandomImagePaths] = useState([]);
  const navigate = useNavigate();

  const imagePaths = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-52128141/original/2f885a34-191b-4b95-9797-799cd514d721.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-591171879509364369/original/1931fbae-0d17-4ef8-9cbe-595c7a29ee73.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
    "https://a0.muscache.com/im/pictures/airflow/Hosting-714258423682866070/original/960755ad-ce79-4606-8f17-7c2d6c64fe41.jpg",
    "https://a0.muscache.com/im/pictures/c238f6c3-e3d8-44c4-b529-9fabce2004d4.jpg",
    "https://a0.muscache.com/im/pictures/airflow/Hosting-20604554/original/4aca814e-b661-47e0-887b-5c143c575252.jpg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-566028065891205462/original/8272f279-b785-4533-b9e5-b400a37d6a52.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-13016398/original/6c59e24d-89f3-4475-aaca-80363792fb51.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-558544930816984660/original/09e08435-2c66-4d22-ac73-94f5fd487126.jpeg"
  ];

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:7070/api/manageListings/"
        );
        const data = await response.json();
        setPropertyData(data);
      } catch (error) {
        console.log(error);
      }
    };

    // Generate random image paths
    const generateRandomImagePaths = () => {
      const remainingPaths = imagePaths.filter(
        (path) =>
          path !==
          "https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg"
      );
      const selectedPaths = [];

      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * remainingPaths.length);
        const randomPath = remainingPaths.splice(randomIndex, 1)[0];
        selectedPaths.push(randomPath);
      }

      return [
        "https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg",
        ...selectedPaths,
      ];
    };

    fetchData();
    setRandomImagePaths(generateRandomImagePaths());
  }, []);

  const navigateToProperty = (id) => {
    navigate("/property", { state: { id } });
  };

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.navigation}>
          <div className={styles.servicename}>
            <i className="bx bxs-building-house"></i>
            <span>Properties</span>
          </div>
          <div className={styles.viewall}>
            <Link to="/properties" className={styles.link}>
              View All
            </Link>
          </div>
        </div>

        {/* Iterate over propertyData and display the fetched data */}
        <div className={styles.cards}>
          <div className={styles.row}>
            {propertyData.slice(0, 4).map((property, index) => (
              <div
                className={`${styles.column} ${styles.column4}`}
                key={property.id}
              >
                <div className={styles.imageview}>
                  <span
                    className={styles.link}
                    onClick={() => navigateToProperty(property._id)}
                  >
                    <img
                      src={randomImagePaths[index]}
                      alt=""
                      style={{ width: "340px", height: "250px" }}
                    />
                  </span>
                </div>
                <div className={styles.smallinfo}>
                  <span
                    className={styles.link}
                    onClick={() => navigateToProperty(property._id)}
                  >
                    <span>{property.name}</span>
                  </span>
                  <div className={styles.price}>${property.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
