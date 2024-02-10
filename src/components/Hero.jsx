import React from 'react';
import bgHeroMobile from '../assets/bg-pattern-intro-mobile.svg';
import bgHeroDesktop from '../assets/bg-pattern-intro-desktop.svg';

function Hero() {

  return (
    <div className="w-[100vw] h-[510px] bg-gradient-to-br from-orange-300 to-red-500 laptop:bg-gradient-to-r overflow-hidden flex flex-col items-center justify-center rounded-bl-[100px]">
      <img src={bgHeroMobile} alt="heroImg" className="scale-y-[3.5] laptop:scale-y-[2] scale-x-[3.3] laptop:scale-x-[2] relative left-[33%] laptop:left-[25%] top-[50%] translate-y-[-50%] laptop:top-[90%] laptop:tranlate-y-[-100%]"/>
      <div className="w-[100%] max-w-[850px] desktop:max-w-[1050px] absolute z-[10] text-center px-[25px]">
        <h1 className="font-medium text-white text-[2.2rem] smob:text-[2.5rem] laptop:text-[3rem] mb-[8px]">A modern publishing platform</h1>
        <p className="text-white font-[18px] mb-[20px]">Grow your audience and build your online brand</p>
        <div className="flex items-center justify-center gap-x-4">
          <button className="outline-none border-none px-[15px] py-[10px] rounded-[25px] font-medium bg-white laptop:hover:bg-red-100 text-red-300 laptop:hover:text-white">Start for Free</button>
          <button className="outline-none px-[15px] py-[10px] border-[1px] border-white rounded-[25px] font-medium text-white hover:bg-white hover:text-red-300">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
