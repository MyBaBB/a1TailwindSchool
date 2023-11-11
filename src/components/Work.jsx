// eslint-disable-next-line no-unused-vars
import React from 'react'
import WorkItem from './WorkItem' 

const data = [
  { 
    year: 'SEO ',
    title: "Search Engine Optimizer ",
    duration: "Become Visible on the web 👀 ",
    details: "Are you looking for a way to create fast, modern, and SEO-friendly websites? If so, you should consider using React, the most popular JavaScript library for building interactive user interfaces. React is not only easy to use and maintain, but also SEO-friendly, if you follow some best practices and strategies. With React, you can create dynamic and engaging web pages that can rank well on Google and other search engines. You can also use a React CMS to manage your content and optimize it for SEO. Whether you need a landing page, a blog, an e-commerce site, or any other kind of web application, React can help you achieve your goals and boost your online presence. To learn more about how to use React for SEO, contact us today using the form Below"
  },

  { 
    year: "Special",
    title: "Web Developer",
    duration: "With Benefits",
    details: "🟢I can make this Website Yours. I can make you a custom website that matches your preferences.🟢I have made this Website to help Newbies Get started.🟢  I can modify it according to your requirements.🟢Give me your Background image and all of your links to X, Facebook, etc... and your Brand so that I can match your effects."
  },
  
  { 
    year: 'A Contact Form',
    title: "A new Business Email",
    duration: "A link to paychecks",
    details: "A customized form on your website is a way to collect valuable information from your visitors and potential customers. It can help you to:🟢Increase conversions🟢Improve user experience by designing a form that matches your website style, layout, and branding🟢 The best practices of form design🟢Gain insights into your audience preferences, needs, and feedback, by asking relevant and personalized questions that can help you improve your products or services to them.🟢A customized form on your website can also show your users that you care about their opinions, satisfaction, and privacy.🟢 A customized form on your website is not only a tool for data collection, but also a way to communicate with your users and create a lasting impression of your quality and pride."
  },
  { 
    year: 'Customize',
    title: "React Pro Websites",
    duration: "2023 - future ",
    details: "🟢If a simple landing page to get started then this is it.🟢It is Developed by a React Developer🟢You can Easily Upgrade for years to come. React is the most popular for Customizing and linking to your Social Media Marketing. 🟢 We use the latest technologies and best practices to ensure that your website is fast, secure, and user-friendly.🟢We also provide ongoing support and maintenance to keep your website running smoothly.🟢Do not settle for a generic, cookie-cutter website that does not represent you or your business.🟢Contact us today for a free consultation and quote.🟢Send in the form below to get started. "
  },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-8 '>

<div className='relative'>
     <a href="#projects">
      <div className='absolute'>
        <p className=' text-[2rem] md:text-[3rem]'>⬇️</p>
      </div>
     </a>
    </div>

      <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-4'>Custom <br /> Websites</h1>
      {data.map((item, idx) => (
        <WorkItem
        key={idx} 
        year={item.year}
        title={item.title}
        duration={item.duration}
        details={item.details}   
        />
      ))}
    </div>
  );
};

export default Work