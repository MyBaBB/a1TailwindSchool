// eslint-disable-next-line no-unused-vars
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>

<div className='relative'>
     <a href="#backTop">
      <div className='absolute top-2'>
        <p className='text-[2rem] md:text-[3rem]'>⬇️</p>
      </div>
     </a>
    </div>

     <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]' >Contact
     </h1>

     <form action="https://getform.io/f/77f2624d-a38b-4a6a-92a5-b9598d0fd757" method='post' encType='multipart/form-data'>
    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
       <div className='flex flex-col'>
         <label className='uppercase text-sm py-2'>Name</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' required />
            </div>
         <div className='flex flex-col'>
         <label className='uppercase text-sm py-2'>Phone</label>
         <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
       </div>
    </div>

       <div>
         <label className='uppercase text-sm py-2'>Email</label>
         <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' required />
       </div>
       <div className='flex flex-col py-2'>
         <label className='uppercase text-sm py-2'>Subject</label>
         <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' required />
       </div>
       <div className='flex flex-col py-2 ' >
         <label className='uppercase text-sm py-2'>Message</label>
         <textarea className='border-2 rounded-lg p-3 border-gray-300' name="message" rows="10" required>
         </textarea>
       </div>
       <button id="Contact" className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg '>
        Send Message
       </button>  

    </form>
</div>
  )
}

export default Contact