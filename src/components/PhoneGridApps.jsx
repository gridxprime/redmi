import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Calculator from './Apps/Calculator/Calculator';
import calcIcon from './Apps/Calculator/calc.png';
import Browser from './Apps/Browser/Browser';
import browserIcon from './Apps/Browser/browser.png';
import Calendar from './Apps/Calendar/Calendar';
import calendarIcon from './Apps/Calendar/calendarIcon.png';

function PhoneGridApps() {




  return (
    <section className='phone__grid'>
      {/* Links to different app components */}
      <nav className='links'>
        <a className='link-main' href="/"></a>
        <a className='link' href="/calculator"><img src={calcIcon}></img><span>Калькулятор</span></a>
        <a className='link' href="/browser"><img src={browserIcon}></img><span>Браузер</span></a>
        <a className='link' href="/calendar"><img src={calendarIcon}></img>Календарь</a>
      </nav>

      {/* Define routes for each app */}
      <Routes>
        <Route path="/" element={<div></div>}  />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PhoneGridApps />
    </BrowserRouter>
  );
}

export default App;