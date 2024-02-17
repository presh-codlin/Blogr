import React from 'react';
import laptopImg from '../assets/illustration-laptop-desktop.svg';
import mobLaptopImg from '../assets/illustration-laptop-mobile.svg';

function Fopen(props){
  return(
    <div className="w-[100%] fit-content flex flex-col-reverse laptop:flex-row-reverse sm:items-center laptop:items-left justify-between laptop:pr-[7%] laptop:mt-[100px] laptop:mb-[100px] mb-[100px]">
      <div className="w-[100%] h-[350px] laptop:h-[300px] laptop:w-[50%] laptop:pr-[7%] px-[25px] laptop:pl-0 border-box flex flex-col laptop:mt-[-20px] desktop:mt-[0px] justify-between">
        <div className="w-[100%] text-center laptop:text-left mb-[30px] laptop:mb-0">
          <h2 className="text-blue-700 text-[25px] mb-[10px] font-medium">Free, open, simple</h2>
          <p className="text-center laptop:text-left font-normal text-[17px] text-blue-700">Blogr is a free and open source application backed by a large community of helpful developers. It supports 
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
          </p>
        </div>
        <div className="w-[100%] text-center laptop:text-left">
          <h2 className="text-blue-700 text-[25px] mb-[10px] font-medium">Powerful tooling</h2>
          <p className="text-center laptop:text-left font-normal text-[17px] text-blue-700">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites.</p>
        </div>
      </div>
      <div className="w-100% laptop:w-[49%] laptop:mb-0 mb-[40px] flex items-left">
        <img src={laptopImg} alt="desktlapImg" className="scale-[1.4] hidden laptop:block relative left-[-110px] top-[-60px]"/>
        <img src={mobLaptopImg} alt="moblapImg" className="scale-[1.3] block laptop:hidden"/>
      </div>
    </div>
  )
}

export default Fopen;