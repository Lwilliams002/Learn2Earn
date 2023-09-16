import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Slide from './components/SlideShow/Slide.js';
import Summary from './components/Summary/Summary';
import Index from "./scenes";
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
              <Route path="/" element={<Index> </Index>} />
              <Route path="/slideshow" element={<Slideshow></Slideshow>} />
          </Routes>

      </Router>

  );
};

export default App;
