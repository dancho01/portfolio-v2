import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
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
                background={project2} 
                title='Netflix Clone' 
                techStack='React + Tailwind CSS + Firebase' 
                desc='A front-end Netflix clone with a Firebase back-end. Incorported Firebase Authentication to give login functionality and to store a list of accounts signed up.'
                demo='https://dancho01.github.io/game-galaxy/'
                git='https://github.com/dancho01/netflix-clone-app' 
            />
        </div>
    </div>
  )
}

export default Project2