import React from 'react'
import project1 from '../assets/project1.png'
import project3 from '../assets/project3.png'
import ProjectCard from './ProjectCard'


const Project2 = () => {
  return (
    <div id='project-section' className='w-full h-auto'>
        <div className='h-full max-w-[1000px] flex flex-col mx-auto dark:text-white items-center'>
            <h1 className='text-4xl font-bold text-[#0097b2] text-center mt-20'>Projects</h1>
            <ProjectCard 
                background={project1} 
                title='Game Galaxy' 
                techStack='React + CSS' 
                desc='A web application that hosts a couple of fun mini games such as TicTacToe, GuessTheCountry, sliding image puzzle and a multiple choice quiz.'
                demo='https://dancho01.github.io/game-galaxy/'
                git='https://github.com/dancho01/game-galaxy' 
            />
            <ProjectCard 
                background={project3} 
                title='Expense Tracker' 
                techStack='Next.js + TailwindCSS + Firebase' 
                desc='An expense tracker built using Firebase as a backend, allowing for user authentication and a database to store user-specific data.'
                demo='https://expense-tracker-delta-murex.vercel.app/'
                git='https://github.com/dancho01/expense-tracker' 
            />
        </div>
    </div>
  )
}

export default Project2