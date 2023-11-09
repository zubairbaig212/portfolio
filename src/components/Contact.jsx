import React from 'react';
import { Fade } from 'react-reveal';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300 -mt-1 sm:mt-0'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Contact
            </p>
          </div> 
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 px-4'>
         <Fade bottom duration='1000'>
         <div className="max-w-sm bg-white rounded-lg border 
          border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 px-4 pt-4">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Send mail At</h5>
              <span className="text-gray-700 dark:text-gray-700 pt-6">zubair.baig212@gmail.com</span>
            </div>
          </div>

          <div className="max-w-sm mt-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 px-4 pt-4">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Call me at </h5>
              <span className="text-sm text-gray-700 dark:text-gray-700">+49 (174) 2808779</span>
              <span className='text-pink-600 pt-2'>Send Message</span>
            </div>
          </div>

         </Fade>
        </div>

      </div>
    </div>
  );
};

export default Contact;