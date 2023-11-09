import React from 'react';
import { Fade } from 'react-reveal';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 -mt-1 sm:mt-0'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-0 md:gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <Fade left duration='1000'>
              <p>Hi. I'm Zubair, nice to meet you. Please take a look around.</p>
              </Fade>
            </div>
            <div>
            <Fade right duration='1000'>
              
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
              </Fade>

            </div>
          </div> 
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-0 md:gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
            <Fade left duration='1500'>

              <p>Education</p>
              </Fade>

            </div>
            <div className='pt-0 md:pt-3'>
            <Fade right duration='1500'>
              <p>Masters in Computer Science</p>  
              </Fade>

            </div>
          </div> 
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-0 md:gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
            <Fade left duration='2000'>

              <p>Address</p>
              </Fade>

            </div>
            <div className='pt-0 md:pt-3'>
            <Fade right duration='2000'>
              <p>Berlin, Germany</p>  
              </Fade>

            </div>
          </div> 
      </div>
    </div>
  );
};

export default About;