import logo from './logo.svg';
import './App.css';

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Showroom from "./pages/Showroom/Showroom";
import Checkout from "./pages/Checkout/Checkout";
import Customer_Profile from "./pages/Customer_Profile/Customer_Profile";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/showroom" element={<Showroom/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/customer" element={<Customer_Profile/>} />
      </Routes>

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
