// eslint-disable-next-line no-unused-vars
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import BeachCouple from '../assets/GeekyBeachCouple.jpg';

const Main = () => {
  return (
    <div id='main' >

     
      <img className=' w-full h-screen object-cover' src={BeachCouple} alt="Nerdy Beach Couple" />
     <div className='w-full h-screen absolute top-0 left-0
       bg-white/80 

      '>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center '>

               
            <h1 className='text-center text-4xl px-14 pt-10 sm:text-5xl text-4xl font-bold text-gray-800' >I&apos;m a Custom Web Developer <br /><span className='text-varDARKDUCKHEAD text-2xl font-Orbitron'>I Can</span></h1>
            <h2 className='flex text-center sm:text-3xl text-2xl pt-4 text-gray-800'> 
             
            <TypeAnimation
      sequence={[
        
        'Customize This Website for you',
        1000, // 
        'Write Code and Modify Code',
        1000,
        'Make it your way',
        1000,
        'Use Your Links and Your Brand',
        1000,
        'Increase Your Sales',
        1000,
        'Make you a Contact Form',
        1000,
        'Use your Images',
        1000
      ]}
      wrapper="span" 
      speed={40}
        style={{ fontSize: '1.5em', 
        display: 'inline-block',
       
        fontWeight: 'bold',
         
        textShadow: '0 0 0.5em rgba(50, 205, 50, 0.7)',
      }}
      repeat={Infinity}
    />
    
            </h2>

            
          <div className='relative justify-center m-0 m-auto text-red-600 mt-[4rem]  flex justify-between  max-w-[300px] w-full'>
           <FaTwitter className size={40}  />
           <FaFacebookF className size={40} />
           <FaInstagram className size={40} />
           <FaLinkedinIn className size={40} />
          </div>


        </div>
     </div> 
    </div>

  )
}

export default Main