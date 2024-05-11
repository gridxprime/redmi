import './App.css'
import PhoneGridApps from './components/PhoneGridApps'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const setRedColor = () => {
    const phoneInner = document.querySelector('.phone')
    phoneInner.style.background = 'red'  
  }

  const setGreenColor = () => {
    const phoneInner = document.querySelector('.phone')
    phoneInner.style.background = 'lime'
  }

  const setBlueColor = () => {
    const phoneInner = document.querySelector('.phone')
    phoneInner.style.background = 'blue'
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>з</div>} />

        </Routes>
      </BrowserRouter>

      <div className="change__color">
        <button onClick={setRedColor}>Red</button>
        <button onClick={setGreenColor}>Green</button>
        <button onClick={setBlueColor}>Blue</button>
      </div>

      <div className="phone">
        <div className="phone__top-line">
          <div className="phone__top-line-time">
            <span>11:53</span>
          </div>
          <div className="phone__top-line-camera">
              <div className="phone__top-line-camera-round"></div>
          </div>
          <div className="phone__top-line-right">
            <span>87%</span>
          </div>
        </div>

        <div className="phone__inner">
          <div className="phone__apps-grid">
            <PhoneGridApps />
          </div>
        </div>

        <span className='phone__bottom-name'>Redmi</span>
      </div>
    </>
  )
}

export default App
