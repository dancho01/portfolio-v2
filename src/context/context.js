import {createContext, useEffect, useState, useContext} from 'react';
import { initDarkMode } from '../helper';

export const Context = createContext();

export const ModeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(true)
  const [bgColor, setBgColor] = useState('#1f1e1e')
  const [fontColor, setFontColor] = useState('#e8e6e3')

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
      {children}
    </Context.Provider>
  </div>
  )
}

// arrow function has to return a function
export const ModeContext = () => {
  return useContext(Context)
}

