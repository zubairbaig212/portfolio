import React from 'react';
import portfolio__1 from '../assets/portfolio__1.jpg';
import portfolio__2 from '../assets/portfolio__2.jpg';
import Home from '../assets/Home__Page.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] -mt-1 sm:mt-0'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-20 md:mt-0'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${portfolio__2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Rider Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/zubairbaig212/driver-app' target={'_blank'}
                  rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Home})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Booking Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/zubairbaig212/airbnb-clone' target={'_blank'}
                  rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${portfolio__1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Food Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/zubairbaig212/food-app' target={'_blank'}
                  rel="noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;