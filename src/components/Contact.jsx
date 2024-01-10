import React from 'react'

const Contact = () => {
  return (
    <div id='contact-section' className='bg-[#1f1e1e] w-full md:h-screen'>
        <form action="https://getform.io/f/6fb3fc03-5daa-45f4-8d3d-c0b99972a25c" method='POST' className='flex flex-col max-w-[600px] mx-auto p-8'>
            <div className='mb-8 mt-10'>
                <h1 className='text-4xl font-bold text-[#0097b2]'>Contact</h1>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - chodaniel99@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' rows="10" placeholder='Message' name='message'></textarea>
            <button className='text-white bg-orange-600 hover:bg-gray-300 hover:text-orange-600 font-bold rounded-md duration-300 px-4 py-3 my-8 mx-auto'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact