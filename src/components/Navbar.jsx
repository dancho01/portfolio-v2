import React from 'react'
import logo from '../assets/logo2.png'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { animateNavbar, toggleDarkMode } from '../helper'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ModeContext } from '../context/context';


const Nav2 = () => {
    const [nav, setNav] = React.useState(false)
    const { getters, setters } = ModeContext()  // use context

    React.useEffect(() => {
        animateNavbar()
    }, [])

    function handleClick() {
        setNav(!nav)
    }

  return (
    <div className='dark:bg-[#1f1e1e] bg-[#ebebeb] fixed w-full h-[70px] flex justify-between px-3 items-center z-40'>
            <div className='ml-2'>
                <a href="#home-section">
                    <img src={logo} alt="Logo" width={45} className='navlink-slide'/>
                </a> 
            </div>
            <div>
                <ul className='hidden md:flex gap-1 dark:text-white font-semibold items-center'>
                    <li className='navlink-slide'>
                        <a className='navlink-a' href="#home-section">Home</a>
                    </li>
                    <li className='navlink-slide'>
                        <a className='navlink-a' href="#about-section">About</a> 
                    </li>
                    <li className='navlink-slide'>
                        <a className='navlink-a' href="#project-section">Project</a>
                    </li>
                    <li className='navlink-slide'>
                        <a className='navlink-a' href="#contact-section">Contact</a>
                    </li>
                    <li className='navlink-slide cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full px-2 py-2' onClick={() => {toggleDarkMode(getters, setters)}}>
                        { getters.darkMode ? <LightModeIcon /> : <DarkModeIcon /> }
                    </li>
                </ul>
            </div>
         
            {/*Burger Icon*/}
            <ul className='md:hidden flex gap-1 items-center'>
                <li className='navlink-slide cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full px-2 py-2' onClick={() => {toggleDarkMode(getters, setters)}}>
                { getters.darkMode ? <LightModeIcon /> : <DarkModeIcon /> }
                </li>
                <li onClick={handleClick} className='navlink-slide cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full px-2 py-2'>
                {!nav ? <MenuIcon /> : <MenuOpenIcon /> }
                </li>
            </ul>    

            {nav ? <div onClick={handleClick} className='bg-black/40 md:hidden fixed w-full h-screen top-[70px] left-0' /> : ''}

            {/*Mobile Menu*/}
            <ul className={!nav ? 'flex flex-col absolute w-[60%] h-screen bg-slate-500 right-[-60%] top-[70px] duration-300 gap-6 items-center' : 'flex md:hidden flex-col items-center absolute w-[60%] h-screen gap-6 bg-[#0097b2] right-0 top-[70px] duration-300 text-white font-bold text-xl'}>
                <li className='mt-10'>
                    <a onClick={handleClick} className='navlink-mobile-a' href="#home-section">Home</a>
                </li>
                <li>
                    <a onClick={handleClick} className='navlink-mobile-a' href="#about-section">About</a>
                </li>
                <li>
                    <a onClick={handleClick} className='navlink-mobile-a' href="#project-section">Projects</a>
                </li>
                <li>
                    <a onClick={handleClick} className='navlink-mobile-a' href="#contact-section">Contact</a>
                </li>
            </ul>
    </div>
  )
}

export default Nav2