import React from 'react'
import logo from '../assets/logo2.png'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { animateNavbar, toggleDarkMode } from '../helper'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Context, useContext } from '../context';


const Nav2 = () => {
    const [nav, setNav] = React.useState(false)
    const { getters, setters } = useContext(Context)

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
                        <a className='px-4 py-3 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-xl duration-200' href="#home-section">Home</a>
                    </li>
                    <li className='navlink-slide'>
                        <a className='px-4 py-3 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-xl duration-200' href="#about-section">About</a> 
                    </li>
                    <li className='navlink-slide'>
                        <a className='px-4 py-3 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-xl duration-200' href="#project-section">Project</a>
                    </li>
                    <li className='navlink-slide'>
                        <a className='px-4 py-3 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-xl duration-200' href="#contact-section">Contact</a>
                    </li>
                    <li className='navlink-slide cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full px-2 py-2' onClick={() => {toggleDarkMode(getters, setters)}}>
                        { getters.darkMode ? <LightModeIcon /> : <DarkModeIcon /> }
                    </li>
                </ul>
            </div>
         
            <ul className='md:hidden flex gap-1 items-center'>
                <li className='navlink-slide cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full px-2 py-2' onClick={() => {toggleDarkMode(getters, setters)}}>
                { getters.darkMode ? <LightModeIcon /> : <DarkModeIcon /> }
                </li>
                <li onClick={handleClick} className='navlink-slide cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full px-2 py-2'>
                {!nav ? <MenuIcon /> : <MenuOpenIcon /> }
                </li>
            </ul>    

            {nav ? <div onClick={handleClick} className='bg-black/40 fixed w-full h-screen top-[70px] left-0'>
            </div> : ''}

            {/*Mobile Menu*/}
            <ul className={!nav ? 'flex flex-col absolute w-[60%] h-screen bg-slate-500 right-[-60%] top-[70px] duration-300 gap-6 items-center' : 'flex flex-col items-center absolute w-[60%] h-screen gap-6 bg-[#0097b2] right-0 top-[70px] duration-300 text-white font-bold text-xl'}>
                <li className='mt-10'>
                    <a onClick={handleClick} className='px-24 py-2 hover:bg-gray-800 rounded-xl duration-200 ' href="#home-section">Home</a>
                </li>
                <li>
                    <a onClick={handleClick} className='px-24 py-2 hover:bg-gray-800 rounded-xl duration-200 ' href="#about-section">About</a>
                </li>
                <li>
                    <a onClick={handleClick} className='px-24 py-2 hover:bg-gray-800 rounded-xl duration-200 ' href="#project-section">Projects</a>
                </li>
                <li>
                    <a onClick={handleClick} className='px-24 py-2 hover:bg-gray-800 rounded-xl duration-200 ' href="#contact-section">Contact</a>
                </li>
            </ul>

    </div>
  )
}

export default Nav2