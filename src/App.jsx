import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import { Context, initial } from './context';
import { initDarkMode } from './helper';


function App() {

  const [darkMode, setDarkMode] = useState(initial.darkMode)
  const [bgColor, setBgColor] = useState(initial.bgColor)
  const [fontColor, setFontColor] = useState(initial.fontColor)

  const getters = {
    darkMode,
    bgColor,
    fontColor,
  }
  const setters = {
    setDarkMode,
    setBgColor,
    setFontColor,
  }

  useEffect(() => {
    initDarkMode(setters)
  }, [])

  return (
    <div style={{ backgroundColor: bgColor, color: fontColor, transition: 'all 0.8s ease' }}>
      <Context.Provider value={{ getters, setters }}>
        <Navbar/>
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
      </Context.Provider>
    </div>
  );
}

export default App;
