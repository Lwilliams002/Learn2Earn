import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Slideshow from "./components/SlideShow/Slideshow";



const App = () => {
  return (
          <Router basename={process.env.PUBLIC_URL}>
              <Routes>
                  <Route path="/" element={<Slideshow></Slideshow>} />
              </Routes>
          </Router>


  );
};

export default App;
