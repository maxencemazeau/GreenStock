import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Navabar/Header';
import Footer from './components/Navabar/Footer';


function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <Router>
        <Routes>
          <Route>

          </Route>
        </Routes>
      </Router>

      <div>
        <Footer />
      </div>

    </>

  );
}

export default App;
