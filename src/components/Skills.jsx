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
import TechCard from './TechCard'
import nextJs from '../assets/nextjs.png'
import firebase from '../assets/firebase.png'

const Skills = () => {
    const [tech, setTech] = React.useState('language')
    
    function handleClick (param) {
        setTech(param)
    }

  return (
    <div>
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
                    <TechCard icon={HTML} tech="HTML" />
                    <TechCard icon={css} tech="CSS" />
                    <TechCard icon={Javascript} tech="JavaScript" />
                    <TechCard icon={Python} tech="Python" />
                    <TechCard icon={postgres} tech="PostgreSQL" />
                    <TechCard icon={java} tech="Java" />                      
                    </div> 
                : 
                <div className='flex gap-3 flex-wrap justify-center sm:justify-start'> 
                    <TechCard icon={reacticon} tech="React" />
                    <TechCard icon={nextJs} tech="Next.js" />
                    <TechCard icon={firebase} tech="Firebase" />
                    <TechCard icon={tailwind} tech="TailwindCSS" />
                    <TechCard icon={mui} tech="MaterialUI" />    
                </div>    
                }
            </div>
        </div>
    </div>

    
  )
}

export default Skills