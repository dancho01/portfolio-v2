import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full h-[200px] bg-gradient-to-r from-[#0870ee] to-[#13c634]'>
        <div className='flex flex-col items-center '>
            <div className='flex gap-4 justify-center my-8 sm:justify-start'>
                <a className='hover:scale-110 duration-200' href='https://github.com/dancho01' target='blank'>
                <FaGithub size={50}/>
                </a>
                <a className='hover:scale-110 duration-200' href='https://www.linkedin.com/in/daniel-cho-129984226/' target='blank'>
                <FaLinkedin size={50}/>
                </a>
                <a className='hover:scale-110 duration-200' href='https://www.facebook.com/daniel.cho.549221/' target='blank'>
                <FaFacebook size={50}/>
                </a>
                <a className='hover:scale-110 duration-200' href='mailto:chodaniel99@gmail.com'>
                <HiOutlineMail size={50}/>
                </a>
            </div>
            <p className='text-xl my-1'>  
                © Daniel Cho 2023
            </p>
            <p>
                Built using React and Tailwind CSS
            </p>

        </div>

    </div>
  )
}

export default Footer