import React from 'react'
import portrait from '../assets/aboutPortrait.jpg'
import Skills from './Skills'

const About2 = () => {


  return (
    <div id='about-section' className='w-full h-auto md:h-screen'>
        <div className='h-full max-w-[1000px] flex flex-col mx-auto dark:text-gray-400 px-8 text-xl pt-14'>
            <h1 className='text-4xl font-bold text-[#0097b2] text-center my-4'>About Me</h1>
            <div className='grid md:grid-cols-2 gap-8 my-4'>
                <div className='text-center sm:text-left'>
                    <p>Hi, my name is Daniel and I am a currently a UNSW student studying <span className='dark:text-[white] font-extrabold'>Bachelor of Computer Science</span> and I have a keen interest in <span className='dark:text-white font-extrabold'>web development</span>. Having self taught <span className='dark:text-white font-extrabold'>HTML</span>, <span className='dark:text-white font-extrabold'>CSS</span> and <span className='dark:text-white font-extrabold'>JavaScript</span>, I have been able to use the knowledge I gained and start building my own webpages that is both interactive and visually appealing. </p>
                    <p className='mt-4'>
                        In my spare I like to
                        <ul>
                            <li>• Read 📚</li>
                            <li>• Swim 🏊‍♂️</li>
                            <li>• Play Piano 🎹</li>
                        </ul>
                    </p>
                </div>       
                <div>
                    <img className='w-[200px] md:w-[300px] rounded-full mx-auto' src={portrait} alt="portrait" />
                </div>                   
            </div>

            <Skills />

            {/*                     
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-4 gap-8'>
            <div className='shadow-md shadow-[#041609] flex flex-col items-center hover:scale-110 duration-500'>
                <img  src={HTML} alt="HTML" width={60}/>
                <div className='py-2'>HTML</div>
            </div>

            <div className='shadow-md shadow-[#041609] flex flex-col items-center hover:scale-110 duration-500'>
                <img src={css} alt="HTML" width={60}/>
                <div className='py-2'>CSS</div>
            </div>

            <div className='shadow-md shadow-[#041609] flex flex-col items-center hover:scale-110 duration-500'>
                <img src={Javascript} alt="HTML" width={60}/>
                <div className='py-2'>JavaScript</div>
            </div>

            <div className='shadow-md shadow-[#041609] flex flex-col items-center hover:scale-110 duration-500'>
                <img src={reacticon} alt="HTML" width={60}/>
                <div className='py-2'>React</div>
            </div>
            <div className='shadow-md shadow-[#041609] flex flex-col items-center hover:scale-110 duration-500'>
                <img src={Python} alt="HTML" width={60}/>
                <div className='py-2'>Python</div>
            </div>

            <div className='py-2 shadow-md shadow-[#041609] flex flex-col items-center hover:scale-110 duration-500'>
                <img src={postgres} alt="HTML" width={60}/>
                <div className='py-2'>PostgreSQL</div>
            </div>

            <div className='shadow-md shadow-[#041609] flex flex-col items-center hover:scale-110 duration-500'>
                <img src={java} alt="HTML" width={60}/>
                <div className='py-2'>Java</div>
            </div>

            <div className='shadow-md shadow-[#041609] flex flex-col items-center hover:scale-110 duration-500'>
                <img src={tailwind} alt="HTML" width={60}/>
                <div className='py-2'>Tailwind</div>
            </div>
        </div>        
        */}
        </div>
    </div>
  )
}

export default About2