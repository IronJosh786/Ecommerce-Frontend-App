import React from 'react';
import womanImg from '../img/woman_hero.png'

const Hero = () => {
  return <div className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
    <div className='flex flex-col justify-center uppercase'>
      <div className='font-semibold flex items-center'>
        <div className='w-10 h-[2px] bg-red-500 mr-2'></div>new trend
      </div>
      <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
        autumn clothing<br /> 
        <span className='font-semibold'>sale</span>
      </h1>
    </div>
    <div className='hidden lg:block'>
      <img src={womanImg} alt='woman image'/>
    </div>
    </div>
  </div>;
};

export default Hero;
