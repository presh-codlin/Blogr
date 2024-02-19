import React from 'react';
import Logo from '../assets/logo.svg';

function Footer() {

  return (
    <div className="w-[100vw] px-[25px] py-[45px] flex flex-col items-center justify-center bg-blue-900 bottom-[0px] left-[0px] rounded-tr-[100px]">
      <div className="max-w-[650px] w-[100%] border-1px border-red-300 desktop:max-w-[1050px] flex flex-col laptop:flex-row items-center laptop:items-start laptop:justify-between gap-y-[10px] laptop:gap-y-0 laptop:gap-x-8">
        <div className="w-[65px] laptop:w-[65px] mb-[20px] laptop:mb-0">
          <img src={Logo} alt="logo" className="w-[100%]"/>
        </div>
        <div className="w-[65px] laptop:w-auto text-center laptop:text-left mb-[10px] laptop:mb-0">
          <li className="list-none text-white font-[18px] font-semibold mb-[20px]">Product</li>
          <ul>
            <li className="list-none text-white font-[14px]">Overview</li>
            <li className="list-none text-white font-[14px]">Pricing</li>
            <li className="list-none text-white font-[14px]">Marketplace</li>
            <li className="list-none text-white font-[14px]">Features</li>
            <li className="list-none text-white font-[14px]">Integration</li>
          </ul>
        </div>
        <div className="w-[65px] laptop:w-auto text-center laptop:text-left mb-[10px] laptop:mb-0">
          <li className="list-none text-white font-[18px] font-semibold mb-[20px]">Company</li>
          <ul>
            <li className="list-none text-white font-[14px]">About</li>
            <li className="list-none text-white font-[14px]">Team</li>
            <li className="list-none text-white font-[14px]">Blog</li>
            <li className="list-none text-white font-[14px]">Careers</li>
          </ul>
        </div>
        <div className="w-[65px] laptop:w-auto text-center laptop:text-left mb-[10px] laptop:mb-0">
          <li className="list-none text-white font-[18px] font-semibold mb-[20px]">Connect</li>
          <ul>
            <li className="list-none text-white font-[14px]">Contact</li>
            <li className="list-none text-white font-[14px]">Newsletter</li>
            <li className="list-none text-white font-[14px]">Linkedin</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
