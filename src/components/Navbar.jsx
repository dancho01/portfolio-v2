import React from 'react'
import logo from '../assets/logo2.png'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Nav2 = () => {
    const [nav, setNav] = React.useState(false)
    function handleClick() {
        setNav(!nav)
    }

  return (
    <div className='bg-[#1f1e1e] fixed w-full h-[70px] flex justify-between px-3 items-center z-10'>
            <div className='ml-2' >
                <a href="#home-section">
                    <img src={logo} alt="Logo" width={45} />
                </a> 
            </div>
            <div>
                <ul className='hidden md:flex gap-1 text-white font-semibold'>
                    <li className=''>
                        <a className='px-4 py-3 hover:bg-gray-800 rounded-xl duration-200' href="#home-section">Home</a>
                    </li>
                    <li>
                        <a className='px-4 py-3 hover:bg-gray-800 rounded-xl duration-200' href="#about-section">About</a> 
                    </li>
                    <li>
                        <a className='px-4 py-3 hover:bg-gray-800 rounded-xl duration-200' href="#project-section">Project</a>
                    </li>
                    <li>
                        <a className='px-4 py-3 hover:bg-gray-800 rounded-xl duration-200' href="#contact-section">Contact</a>
                    </li>
                </ul>
            </div>
            <div onClick={handleClick} className='md:hidden'>
                {!nav ? <MenuIcon sx={{ color: 'white' }} /> : <MenuOpenIcon sx={{ color: 'white' }} />}
            </div>

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