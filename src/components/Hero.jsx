import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiArrowNarrowRight} from 'react-icons/hi'
import portrait from '../assets/portrait.jpg'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import resume from '../assets/CV Daniel Cho 2024.pdf'
import { animateHeroText } from '../helper'

const Hero2 = () => {

    React.useEffect(() => {
        animateHeroText()
    }, [])

  return (
    <div id='home-section' className='w-full h-[900px] md:h-screen bg-[#1f1e1e]'>
        <div className='max-w-[1000px] h-full flex flex-col mx-auto px-8 justify-center text-center sm:text-left text-gray-300'>

            <div className='grid md:grid-cols-2 gap-8'>
                <div>
                    <p className='text-xl md:text-2xl hero-text-slide'>Hi 👋🏻, my name is</p>
                    <h1 className='text-6xl md:text-7xl font-semibold py-3 bg-gradient-to-r from-[#0870ee] to-[#13c634] bg-clip-text text-transparent hero-text-slide'>Daniel Cho</h1>
                    <h2 className='text-2xl md:text-3xl text-white font-semibold hero-text-slide'>UNSW Comp Sci Student 👨🏻‍🎓</h2>
                    <p className='text-xl md:text-2xl py-3 hero-text-slide'>I'm a driven and diligent team player and a learner with a keen interest in web developement 👨🏻‍💻</p>

                    <div className='flex gap-6 justify-center py-4 sm:justify-start'>
                        <a className='hover:scale-110 duration-200 hero-link-slide' href='https://github.com/dancho01' target='blank'>
                            <FaGithub size={35}/>
                        </a>
                        <a className='hover:scale-110 duration-200 hero-link-slide' href='https://www.linkedin.com/in/daniel-cho-129984226/' target='blank'>
                            <FaLinkedin size={35}/>
                        </a>
                        <a className='hover:scale-110 duration-200 hero-link-slide' href='mailto:chodaniel99@gmail.com'>
                            <HiOutlineMail size={35}/>
                        </a>
                        <a className='hover:scale-110 duration-200 hero-link-slide' href={resume} target='blank'>
                            <BsFillPersonLinesFill size={35}/>
                        </a>
                    </div>

                    <div>
                        <button className='bg-orange-600 font-bold group my-6 px-4 py-3 hover:bg-gray-300 hover:text-orange-600 duration-300 rounded-md mx-auto sm:mx-0 hero-link-slide'>
                            <a href="#project-section" className='flex items-center'>                
                                Click to view Projects
                                <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-2'></HiArrowNarrowRight>
                                </span>
                            </a> 
                        </button> 
                    </div>

                </div>
                <div>
                    <img className='w-[200px] md:w-[300px] rounded-xl mx-auto portrait' src={portrait} alt="portrait"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero2