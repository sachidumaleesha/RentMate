<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Showroom from "./pages/Showroom/Showroom";
import Checkout from "./pages/Checkout/Checkout";
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
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
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/showroom" element={<Showroom/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
