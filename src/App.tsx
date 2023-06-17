import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Navabar/Header';
import Footer from './components/Navabar/Footer';
import Landing from './page/Landing/Landing';
import Cart from './page/Cart/Cart';


function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Panier" element={<Cart />}></Route>
        </Routes>
      </Router>

      <div>
        <Footer />
      </div>

    </>

  );
}

export default App;
