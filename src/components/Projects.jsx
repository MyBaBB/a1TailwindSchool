// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProjectItem from './ProjectItem'
import FrankenBakerImg from '../assets/./blackpowdercross.jpg'
import CustomWebImg from '../assets/custom_web600x400.png' 
import RaysPlaceImg from '../assets/RaysPlace.png' 
import SEOImg from '../assets/SEO.png' 


const Projects = () => {
  return (
<div id='projects' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16' >

    <div className='relative scroll-my-52'>
     <a href="#contact">
      <div className='absolute -top-4'>
        <p className='text-[2rem] md:text-[3rem]'>⬇️</p>
      </div>
     </a>
    </div>
    
    
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      
      <p className='text-center py-8'>A landing page is a web page that serves a single and focused purpose, such as capturing leads, promoting an offer, or selling a product. A landing page with display means that the page uses visuals, such as images, videos, or graphics, to enhance the message and appeal of the page. Display elements can help to attract the attention of visitors, convey the value proposition, and persuade them to take action.</p>
<div className='grid sm:grid-cols-2 gap-12'>

     <a href="https://mybabb.com">
      <ProjectItem img={FrankenBakerImg} title={'Thanksgiving Special'}
         /></a>

<a href="https://brandingchute.onrender.com"><ProjectItem img={CustomWebImg} title={'Custom Websites'}   /></a>

    <a href="https://frank-at-thanksgiving.onrender.com"><ProjectItem img={SEOImg} title={'Get Noticed Online'}   /></a>

    

    <a href="https://mybabb.com/SEO.html"><ProjectItem img={RaysPlaceImg} title={'Rays Place'}   /></a>

    

</div>

</div>
  )
}

export default Projects
