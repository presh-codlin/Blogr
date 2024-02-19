import React from 'react';
import Circle from '../assets/bg-pattern-circles.svg';

function Content(props){
  const {heading1, heading2, paragraph1, paragraph2, image, image2} = props;
  return(
    <div className="w-[100%] flex flex-col-reverse laptop:flex-row sm:items-center laptop:items-left justify-between pb-[30px] laptop:pb-0 laptop:pl-[7%] mb-[260px] laptop:mb-[30px]">
      <div className="w-[100%] h-[350px] laptop:h-[300px] laptop:w-[50%] laptop:pl-[7%] px-[25px] border-box flex flex-col laptop:justify-between laptop:mt-[0px]">
        <div className="w-[100%] text-center laptop:text-left mb-[30px] laptop:mb-0">
          <h2 className="text-blue-700 text-[25px] mb-[10px] font-medium">{heading1}</h2>
          <p className="text-center laptop:text-left font-normal text-[17px] laptop:text-[14px] text-blue-700">{paragraph1}</p>
        </div>
        <div className="w-[100%] text-center laptop:text-left">
          <h2 className="text-blue-700 text-[25px] mb-[10px] font-medium">{heading2}</h2>
          <p className="text-center laptop:text-left font-normal text-[17px] text-blue-700">{paragraph2}</p>
        </div>
      </div>
      <div className="w-100% laptop:w-[49%] flex items-left mb-[40px] laptop:mb-0">
        <img src={image} alt="desktlayImg" className="scale-[1.3] hidden laptop:block relative right-[-110px] top-[-90px]"/>
        <img src={image2} alt="moblayImg" className="scale-[1.1] block laptop:hidden"/>
      </div>
    </div>
  )
}

export default Content;