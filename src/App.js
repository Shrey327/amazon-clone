import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Homepg from "./Homepg";
function Checkout() {
  return (
    <div>
      <Header />
      <h1>Checkout</h1>
    </div>
    
  );
}

function Login() {
  return (
    <div>
      <Header />
      <h1>Login Page</h1>
    </div>     
  );
}

function Home() {
  return (
    <div>
      {/* Render the header only on the home page */}
      <Header />
      <Homepg />
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/"  element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
