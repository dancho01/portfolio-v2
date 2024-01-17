import React from 'react'

const TechCard = (props) => {
  return (   
    <div className='flex items-center hover:scale-110 duration-500 bg-gray-300 dark:bg-[#282828] px-3 py-1 rounded-md'>
        <img  src={props.icon} alt="/" width={25}/>
        <div className='pl-2' >{props.tech}</div>
    </div>        

  )
}

export default TechCard