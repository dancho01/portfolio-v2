import React from 'react'
import {FaGithub} from 'react-icons/fa'

const ProjectCard = (props) => {
  return (
    <div className='my-8 w-[400px] lg:w-auto grid lg:grid-cols-2 overflow-hidden rounded-xl hover:scale-105 duration-300'>
        <div>
            <img src={props.background} alt="/" />
        </div>
        {/* bg-gradient-to-r  from-[#884eab] to-[#3806a2]*/}
        <div className='bg-gray-300 dark:bg-gray-800 text-center py-4 px-8'>
            <h1 className='text-2xl font-bold'>{props.title}</h1>
            <h2 className='text-xl font-semibold text-orange-500'>{props.techStack}</h2>
            <p>{props.desc}</p>
            <div className='flex justify-evenly mt-6'>
                <button className='font-bold border-2 border-orange-500 rounded-lg px-4 py-1 text-orange-500 hover:bg-white duration-500'>
                    <a href={props.demo} target='blank'>Demo</a>
                </button>                      
                <a className='opacity-30 hover:opacity-100 duration-200' href={props.git} target='blank'>
                <FaGithub size={35}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard