import React from 'react'
import project1 from '../assets/project1.png'
import {FaGithub} from 'react-icons/fa'


const Project2 = () => {
  return (
    <div id='project-section' className='w-full h-auto bg-[#1f1e1e]'>

        <div className='h-full max-w-[1000px] flex flex-col mx-auto text-white items-center'>
            <h1 className='text-4xl font-bold text-[#0097b2] text-center mt-20'>Projects</h1>

            <div className='my-8 w-[400px] lg:w-auto grid lg:grid-cols-2 overflow-hidden rounded-xl'>
                <div>
                    <img src={project1} alt="project 1" />
                </div>
                <div className='bg-gray-900 text-center py-4 px-8'>
                    <h1 className='text-2xl font-bold'>Game Galaxy</h1>
                    <h2 className='text-xl font-semibold text-orange-500'>React</h2>
                    <p>
                    A web application that hosts a couple of fun mini games such as <span className='font-extrabold'>TicTacToe</span>, <span className='font-extrabold'>GuessTheCountry</span>, <span className='font-extrabold'>sliding image puzzle</span> and a <span className='font-extrabold'>multiple choice quiz</span>.
                    </p>
                    <div className='flex justify-evenly mt-6'>
                        <button className='font-bold border-2 border-orange-500 rounded-lg px-4 py-1 text-orange-500 hover:bg-white duration-500'>
                            <a href="https://dancho01.github.io/game-galaxy/" target='blank'>Demo</a>
                        </button>                      
                        <a className='opacity-30 hover:opacity-100 duration-200' href='https://github.com/dancho01/game-galaxy' target='blank'>
                        <FaGithub size={35}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='my-8 w-[400px] lg:w-auto grid lg:grid-cols-2 overflow-hidden rounded-xl'>
                <div>
                    <img src={project1} alt="project 1" />
                </div>
                <div className='bg-gray-900 text-center py-4 px-8'>
                    <h1 className='text-2xl font-bold'>Project 2</h1>
                    <h2 className='text-xl font-semibold text-orange-500'>React</h2>
                    <p>
                    A web application that hosts a couple of fun mini games such as <span className='font-extrabold'>TicTacToe</span>, <span className='font-extrabold'>GuessTheCountry</span>, <span className='font-extrabold'>sliding image puzzle</span> and a <span className='font-extrabold'>multiple choice quiz</span>.
                    </p>
                    <div className='flex justify-evenly mt-6'>
                        <button className='font-bold border-2 border-orange-500 rounded-lg px-4 py-1 text-orange-500 hover:bg-white duration-500'>
                            <a href="https://dancho01.github.io/game-galaxy/" target='blank'>Demo</a>
                        </button>
                        <a className='opacity-30 hover:opacity-100 duration-200' href='https://github.com/dancho01/game-galaxy' target='blank'>
                        <FaGithub size={35}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='my-8 w-[400px] lg:w-auto grid lg:grid-cols-2 overflow-hidden rounded-xl'>
                <div>
                    <img src={project1} alt="project 1" />
                </div>
                <div className='bg-gray-900 text-center py-4 px-8'>
                    <h1 className='text-2xl font-bold'>Project 3</h1>
                    <h2 className='text-xl font-semibold text-orange-500'>React</h2>
                    <p>
                    A web application that hosts a couple of fun mini games such as <span className='font-extrabold'>TicTacToe</span>, <span className='font-extrabold'>GuessTheCountry</span>, <span className='font-extrabold'>sliding image puzzle</span> and a <span className='font-extrabold'>multiple choice quiz</span>.
                    </p>
                    <div className='flex justify-evenly mt-6'>
                        <button className='font-bold border-2 border-orange-500 rounded-lg px-4 py-1 text-orange-500 hover:bg-white duration-500'>
                            <a href="https://dancho01.github.io/game-galaxy/" target='blank'>Demo</a>
                        </button>
                        <a className='duration-200 opacity-30 hover:opacity-100' href='https://github.com/dancho01/game-galaxy' target='blank'>
                        <FaGithub size={35}/>
                        </a>
                    </div>
                </div>
            </div>



        </div>

    </div>
  )
}

export default Project2