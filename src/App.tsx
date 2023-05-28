import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Navabar/Header';
import Footer from './components/Navabar/Footer';
import Landing from './page/Landing/Landing';


function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </Router>

      <div>
        <Footer />
      </div>

    </>

  );
}

export default App;
