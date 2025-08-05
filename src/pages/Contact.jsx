import { useState } from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import { GiAntibody, GiAnts } from "react-icons/gi";
import GetMessage from '../components/contact/GetMessage';

function ContactSection() {
  
  
  return (
    <div className='h-full bg-slate-600/50 '>

    <section className="h-full max-w-6xl mx-auto px-5 py-20 dark:bg-slate-800 bg-slate-200">
      {/* Section Header */}
      <div className="text-center mb-15">
        <h2 className="text-4xl font-bold dark:text-slate-200 text-gray-900 mb-4 p3">
          Get In Touch
        </h2>
        <p className="text-xl dark:text-slate-300 text-slate-600 max-w-2xl mx-auto p3">
          Have a question or want to work together? I'd love to hear from you. 
          Send me a message and I'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-15 items-start grid-rows-auto">
        
        <div className='bg-none col-span-2 row-span-1'>
          <ContactInfo fontColor="text-white"></ContactInfo>

        </div>

        <div className='bg-none col-span-1 h-full row-span-1 flex flex-col justify-center items-center'>
          <GiAntibody size="100%" color="white"/>

        </div>
      
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-15 items-start">
        
        <div className='bg-none col-span-1 h-full row-span-1 flex flex-col justify-center items-center'>
          <GiAnts size="100%" color="white"/>

        </div>
      
        {/* getMessage container */}
        <div className="bg-none p-10 col-span-2 rounded-2xl shadow-md">
          <GetMessage bgStyle='bg-none' fontStyle='b6 text-white'></GetMessage>
          
        </div>
      </div>
    </section>

    </div>
  );
}

export default ContactSection;