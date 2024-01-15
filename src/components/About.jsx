import React from 'react'
import HTML from '../assets/html.png'
import Javascript from'../assets/javascript.png'
import reacticon from'../assets/react.png'
import Python from'../assets/python.png'
import java from'../assets/java.png'
import css from'../assets/css.png'
import tailwind from'../assets/tailwind.png'
import postgres from'../assets/postgresql.png'
import mui from '../assets/mui.png'

const About2 = () => {

    const [tech, setTech] = React.useState('language')
    
    function handleClick (param) {
        setTech(param)
    }

  return (
    <div id='about-section' className='w-full h-auto md:h-screen'>
        <div className='h-full max-w-[1000px] flex flex-col mx-auto dark:text-gray-400 px-8 text-xl pt-14'>
            <h1 className='text-4xl font-bold text-[#0097b2] text-center my-4'>About Me</h1>
            <div className='grid md:grid-cols-2 gap-8 my-4'>
                <div className='text-center sm:text-left md:text-right'>
                Hi, my name is Daniel and I am a currently a UNSW student studying <span className='dark:text-[white] font-extrabold'>Bachelor of Computer Science</span> and I have a keen interest in <span className='dark:text-white font-extrabold'>web development</span>. Having self taught <span className='dark:text-white font-extrabold'>HTML</span>, <span className='dark:text-white font-extrabold'>CSS</span> and <span className='dark:text-white font-extrabold'>JavaScript</span>, I have been able to use the knowledge I gained and start building my own webpages that is both interactive and visually appealing. 
                </div>
                <div className='text-center sm:text-left'>
                    In my spare I like to
                    <ul>
                        <li>• Read 📚</li>
                        <li>• Swim 🏊‍♂️</li>
                        <li>• Play Piano 🎹</li>
                    </ul>
                </div>
            </div>

            {/* Technologies */}
            <div className='my-4'>Check out some of the technologies I have worked with</div>
            <div className='grid grid-cols-3 my-4 gap-4'>
                <div className='col-span-1 font-semibold' >
                    <div className='flex flex-col text-center'>
                        <button onClick={() => handleClick('language')} className={tech==='language' ? 'text-[#0097b2] border-blue-400 border-l-4 py-2 bg-gray-300 dark:bg-[#282828] duration-500' : 'border-l-2 border-blue-400 py-2 hover:bg-gray-300 dark:hover:bg-[#282828] duration-500'}>Languages</button>
                        <button onClick={() => handleClick('framework')} className={tech==='framework' ? 'text-[#0097b2] border-blue-400 border-l-4 py-2 bg-gray-300 dark:bg-[#282828] duration-500' : 'border-l-2 border-blue-400 py-2 hover:bg-gray-300 dark:hover:bg-[#282828] duration-500'}>Framworks</button>
                    </div>
                </div>
                <div className='col-span-2 dark:text-white font-semibold'>
                    {tech === 'language' ? 
                      <div className='flex gap-3 flex-wrap justify-center sm:justify-start'>
                        <div className='flex items-center hover:scale-110 duration-500 bg-gray-300 dark:bg-[#282828] px-3 py-1 rounded-md'>
                            <img  src={HTML} alt="HTML" width={25}/>
                            <div className='pl-2' >HTML</div>
                        </div>

                        <div className='flex items-center hover:scale-110 duration-500 bg-gray-300 dark:bg-[#282828] px-3 py-1 rounded-md'>
                            <img  src={css} alt="HTML" width={25}/>
                            <div className='pl-2' >CSS</div>
                        </div>

                        <div className='flex items-center hover:scale-110 duration-500 bg-gray-300 dark:bg-[#282828] px-3 py-1 rounded-md'>
                            <img  src={Javascript} alt="HTML" width={25}/>
                            <div className='pl-2' >JavaScript</div>
                        </div>

                        <div className='flex items-center hover:scale-110 duration-500 bg-gray-300 dark:bg-[#282828] px-3 py-1 rounded-md'>
                            <img  src={Python} alt="HTML" width={25}/>
                            <div className='pl-2' >Python</div>
                        </div>

                        <div className='flex items-center hover:scale-110 duration-500 bg-gray-300 dark:bg-[#282828] px-3 py-1 rounded-md'>
                            <img  src={postgres} alt="HTML" width={25}/>
                            <div className='pl-2' >PostgreSQL</div>
                        </div>

                        <div className='flex items-center hover:scale-110 duration-500 bg-gray-300 dark:bg-[#282828] px-3 py-1 rounded-md'>
                            <img  src={java} alt="HTML" width={25}/>
                            <div className='pl-2' >Java</div>
                        </div>
                      </div> 
                    : 
                    <div className='flex gap-3 flex-wrap justify-center sm:justify-start'> 
                        <div className='flex items-center hover:scale-110 duration-500 bg-gray-300 dark:bg-[#282828] px-3 py-1 rounded-md'>
                            <img  src={reacticon} alt="HTML" width={25}/>
                            <div className='pl-2' >React</div>
                        </div>
                        <div className='flex items-center hover:scale-110 duration-500 bg-gray-300 dark:bg-[#282828] px-3 py-1 rounded-md'>
                            <img  src={tailwind} alt="HTML" width={25}/>
                            <div className='pl-2' >TailwindCSS</div>
                        </div>
                        <div className='flex items-center hover:scale-110 duration-500 bg-gray-300 dark:bg-[#282828] px-3 py-1 rounded-md'>
                            <img  src={mui} alt="HTML" width={25}/>
                            <div className='pl-2' >MaterialUI</div>
                        </div>
                    </div>    
                    }
                </div>
            </div>


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