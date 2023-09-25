import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Slideshow from "./components/SlideShow/Slideshow";



const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [answers, setAnswers] = useState({});

  const images = [
      "https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/6/44792/files/2017/04/stock-market-3-21gyd1b.jpg",
  ];

  return (
          <Router>
              <Routes>
                  <Route path="/slideshow" element={<Slideshow></Slideshow>} />
              </Routes>
          </Router>


  );
};

export default App;
