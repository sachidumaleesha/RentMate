import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Showroom from "./pages/Showroom/Showroom";
import Checkout from "./pages/Checkout/Checkout";
import Customer_Profile from "./pages/Customer_Profile/Customer_Profile";
import Property from "./pages/Property/Property";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/showroom" element={<Showroom/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/customer" element={<Customer_Profile/>} />
        <Route path="/property" element={<Property/>} />
      </Routes>
    </div>
  )
}

export default App
