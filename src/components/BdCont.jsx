import React from 'react';
import Cont from './Content.jsx';
import Fopen from './Fopen.jsx';
import layoutImg from '../assets/illustration-editor-desktop.svg';
import mobLayoutImg from '../assets/illustration-editor-mobile.svg';
import Circle from '../assets/bg-pattern-circles.svg';
import Phone from '../assets/illustration-phones.svg';
import Footer from './Footer';

function BdCont(){
  return(
    <div className="w-[100vw] flex flex-col items-center justify-center pt-[100px] mb-[0px] overflow-hidden">
      <h1 className="text-[28px] text-blue-800 mb-[40px] laptop:mb-[60px] font-medium">Designed for the future</h1>
      <Cont 
      heading1="Introducing an extensible editor"
      heading2="Robust content management"
      paragraph1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
      The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
      videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
      change the looks of a blog."
      paragraph2="Flexible content management enables users to easily move through posts. Increase the usability of your blog 
      by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
      image= {layoutImg}
      image2= {mobLayoutImg}
      />
      <div className="w-[100%] h-[500px] md:h-[600px] xl:h-[700px] sm:z-[-100] sm:mt-[80px] laptop:h-auto bg-blue-800 rounded-tr-[100px] rounded-bl-[100px] relative mb-[60px] laptop:mb-[160px]">
        <div className="h-[300px] xl:h-[500px] w-[100%] rounded-tr-[100px] overflow-hidden">
          <img src={Circle} alt="circlePartern" className="sm:scale-[1.6] laptop:w-[980px] relative laptop:left-[-110px] top-[-130px] laptop:top-[-580px]"/>
        </div>
        <div className="w-[100%] max-w-[850px] desktop:max-w-[1050px] absolute top-0 flex flex-col left-[50%] translate-x-[-50%] laptop:flex-row items-center justify-between px-[15px] border-box">
          <div className="h-[300px] mt-[-140px] laptop:mt-[-110px]">
            <img src={Phone} alt="phoneImg" className="w-[1300px]"/>
          </div>
          <div className="h-[300px] laptop:w-[1200px] mt-[0px] md:mt-[200px] xl:mt-[330px] laptop:mt-auto flex flex-col laptop:pl-[30px] px-[5px] items-center laptop:items-left justify-left laptop:justify-center">
            <h2 className="text-white font-semibold text-center text-[32px] mb-[15px]">State of the Art Infrastructure</h2>
            <p className="text-[17px] text-white text-center font-normal">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
        </div>
      </div>
     <Fopen/>
     <Footer/>
    </div>
  )
}

export default BdCont;