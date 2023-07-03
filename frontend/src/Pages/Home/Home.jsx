import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/com.homepage/heroSection/HeroSection";
import Properties from "../../components/com.homepage/properties/Properties";
import Transports from "../../components/com.homepage/transports/Transports";
import Showrooms from "../../components/com.homepage/showrooms/Showrooms";
import Lawyers from "../../components/com.homepage/lawyers/Lawyers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Properties/>
      <Transports/>
      <Showrooms/>
      <Lawyers/>
      <Footer />
    </div>
  );
};

export default Home;
