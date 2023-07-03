import React, { useState, useEffect } from "react";
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import styles from './showroom.module.css'
import { Dropdown } from "primereact/dropdown";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Showroom = () => {

  const { id } = useParams();

  const [showroom, setShowroom] = useState([]);
  const [chairs, setChairs] = useState([]);
  const [beds, setBeds] = useState([]);
  const [tables, setTables] = useState([]);
  const [sofas, setSofas] = useState([]);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7070/api/furniture/showroom/${id}/category/chair`)
      .then(res => {
        setChairs(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })

    axios.get(`http://localhost:7070/api/furniture/showroom/${id}/category/bed`)
      .then(res => {
        setBeds(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })

    axios.get(`http://localhost:7070/api/furniture/showroom/${id}/category/table`)
      .then(res => {
        setTables(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })

    axios.get(`http://localhost:7070/api/furniture/showroom/${id}/category/sofa`)
      .then(res => {
        setSofas(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })

    axios.get(`http://localhost:7070/api/furniture/showroom/${id}/category/others`)
      .then(res => {
        setOthers(res.data);
        console.log(res.data);
      })
  }, []);




  useEffect(() => {
    axios.get(`http://localhost:7070/api/showroom/${id}`)
      .then(res => {
        setShowroom(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "House", code: "house" },
    { name: "Rooms", code: "rooms" },
    { name: "Apartments", code: "apartments" },
  ];

  const ListingName = (text) => {
    return text.substring(0, 15) + " ...";
  };

  return (
    <div>
      <Navbar />
      <div className={styles.bg}>
        <div>
          <h1>Make Your Home <br />Modern Design.</h1>
        </div>
      </div>
      <div className={styles.showroom_details}>
        <div className={styles.showroom_title}>
          {/* <h1>Forty two showroom</h1> */}
          <div className={styles.row}>
            <div>
              {/* <p><i className="bx bxs-map"></i>{showroom.address}</p> */}
            </div>

          </div>

          <div className={styles.row}>
            <div>
              <p><i className="bx bx-mobile"></i> {showroom.contactNumber}</p>
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <p><i className='bx bxl-gmail' ></i> {showroom.email}</p>
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <p><i className='bx bx-time-five' ></i>{showroom.openingTime}</p>
            </div>
          </div>


        </div>
        <div className={styles.gallery}>
          <div className={styles.gallery_img_1}>
            <img src={showroom.image1} alt="" style={{ width: "500px", height: '280px' }} />
          </div>
          <div>
            <img src={showroom.image2} alt="" style={{ width: "500px", height: '280px' }} />
          </div>
          <div>
            <img src={showroom.image3} alt="" style={{ width: "500px", height: '280px' }} />
          </div>

        </div>
        <div className={styles.small_details}>
          <div className={styles.info}>
            <span>Find Furniture items in our showroom</span>
          </div>
          <div className={styles.profile}>
            <Link>
              <img
                src="https://placehold.jp/0A223D/ffffff/55x55.png?css=%7B%22border-radius%22%3A%2250%25%22%7D"
                alt=""
              />
            </Link>
          </div>
        </div>
        <hr className={styles.line} />

      </div>



      <div className={styles.content__area__section}>
        <div className={styles.top__filter__row}>
          <div className={styles.service__name}>Chairs</div>
          <div className={styles.filter__btn}>
          </div>
        </div>
        <div className={styles.all__datacards}>
          <div className={styles.row__datacards}>
            <div className="">

              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {chairs.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div className="">
                      <Link to="">
                        <img src={item.images} alt="card" style={{ width: '250px', height: '250px' }} />
                      </Link>
                      <div className={styles.smallinfo__show}>
                        <Link to="" className={styles.link}>
                          <div>{item.name}</div>
                        </Link>
                        <div>Price (LKR) {item.price}.00</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
          <div className={styles.row__datacards}>
            <div className={styles.grid}>

            </div>
          </div>
        </div>
      </div>

      <br /><hr></hr><br />
      <div className={styles.content__area__section}>
        <div className={styles.top__filter__row}>
          <div className={styles.service__name} >Beds</div><br />
          <div className={styles.filter__btn}>

          </div>
        </div>
        <div className={styles.all__datacards}>
          <div className={styles.row__datacards}>
            <div className="">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {beds.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div className=''>
                      <Link to="">
                        <img src={item.images} alt="card" style={{ width: '250px', height: '250px' }} />
                      </Link>
                      <div className={styles.smallinfo__show}>
                        <Link to="" className={styles.link}>
                          <div>{item.name}</div>
                        </Link>
                        <div>Price (LKR) {item.price}.00</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>


      <br /><hr></hr><br />
      <div className={styles.content__area__section}>
        <div className={styles.top__filter__row}>
          <div className={styles.service__name}>Table</div>
          <div className={styles.filter__btn}>

          </div>
        </div>
        <div className={styles.all__datacards}>
          <div className={styles.row__datacards}>
            <div className="">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {tables.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div className={styles.col - 3}>
                      <Link to="">
                        <img src={item.images} alt="card" style={{ width: '250px', height: '250px' }} />
                      </Link>
                      <div className={styles.smallinfo__show}>
                        <Link to="" className={styles.link}>
                          <div>{item.name}</div>
                        </Link>
                        <div>Price (LKR) {item.price}.00</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
          <div className={styles.row__datacards}>
            <div className={styles.grid}>

            </div>
          </div>
        </div>
      </div>


      <br /><hr></hr><br />
      <div className={styles.content__area__section}>
        <div className={styles.top__filter__row}>
          <div className={styles.service__name}>Sofa</div>
          <div className={styles.filter__btn}>

          </div>
        </div>
        <div className={styles.all__datacards}>
          <div className={styles.row__datacards}>
            <div className="">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {sofas.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div className={styles.col - 3}>
                      <Link to="">
                        <img src={item.images} alt="card" style={{ width: '250px', height: '250px' }} />
                      </Link>
                      <div className={styles.smallinfo__show}>
                        <Link to="" className={styles.link}>
                          <div>{item.name}</div>
                        </Link>
                        <div>Price (LKR) {item.price}.00</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={styles.row__datacards}>
            <div className={styles.grid}>

            </div>
          </div>
        </div>
      </div>


      <br /><hr></hr><br />
      <div className={styles.content__area__section}>
        <div className={styles.top__filter__row}>
          <div className={styles.service__name}>Others</div>
          <div className={styles.filter__btn}>

          </div>
        </div>
        <div className={styles.all__datacards}>
          <div className={styles.row__datacards}>
            <div className="">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {others.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div className={styles.col - 3}>
                      <Link to="">
                        <img src={item.images} alt="card" style={{ width: '250px', height: '250px' }} />
                      </Link>
                      <div className={styles.smallinfo__show}>
                        <Link to="" className={styles.link}>
                          <div>{item.name}</div>
                        </Link>
                        <div>Price (LKR) {item.price}.00</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
          <div className={styles.row__datacards}>
            <div className={styles.grid}>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Showroom