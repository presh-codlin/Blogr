import {React, useState} from 'react';
import Logo from '../assets/logo.svg';
import menuOpen from '../assets/icon-hamburger.svg';
import menuClosed from '../assets/icon-close.svg';
import arrowDown from '../assets/icon-arrow-dark.svg';
import arrowUp from '../assets/icon-arrow-light.svg';

function NavBar() {

  const [menuClicked,setMenuClicked] = useState(false);
  const [subLink,setActiveSubLink] = useState(0);
  
  const toggleMenu = () => {
    setMenuClicked(!menuClicked);
  }
  
  const toggleSubMenu = (number) => {
    if(subLink === number){
      setActiveSubLink(0);
    }
    setActiveSubLink(number);
  }
  
  
  return (
    <div className="max-w-[850px] w-[100%] h-[60px] flex justify-between items-center p-[25px] absolute top-[20px] z-[9000] desktop:max-w-[1050px]">
      <div className="w-[65px]">
        <img src={Logo} alt="logo" className="w-[100%]"/>
      </div>
      <div className={menuClicked? "max-w-[850px] laptop:max-w-auto w-[90%] laptop:w-[90%] bg-white laptop:bg-transparent fixed laptop:static px-[15px] laptop:px-[0px] py-[20px] laptop:py-[0px] top-[85px] laptop:top-[0px] rounded-[8px] laptop:rounded-0 flex flex-col laptop:flex-row laptop:justify-between items-center left-[50%] laptop:left-[0px] translate-x-[-50%] laptop:translate-x-[0px] duration-[.7s] laptop:duration-0 shadow-md laptop:shadow-none" : "max-w-[850px] laptop:max-w-auto w-[90%] laptop:w-[75%] bg-white laptop:bg-transparent fixed laptop:static top-[85px] laptop:top-0 rounded-[15px] laptop:rounded-0 flex flex-col laptop:flex-row items-center laptop:justify-between left-[-100%] laptop:left-[50%] translate-x-[-50%] laptop:translate-x-[0px] duration-[0.3s] laptop:duration-0 px-[15px] laptop:px-[0px] py-[10px] laptop:py-[0px] shadow-md laptop:shadow-none"}>
        <section className="w-[100%] laptop:w-[60%] border-b-[1px] laptop:border-none pb-[20px] laptop:pb-[0px] mb-[10px] laptop:mb-[0px] laptop:flex laptop:items-center laptop:gap-x-4">
          <div className="w-[100%] text-center laptop:w-auto laptop:flex laptop:flex-col laptop:gap-x-8">
            <li onClick={()=> toggleSubMenu("1")} className={subLink === "1" ? "py-[10px] laptop:py-0 text-[18px] text-blue-150 laptop:text-white text-center font-medium flex items-center justify-center" : "py-[10px] laptop:py-0 text-[18px] text-blue-300 laptop:text-white text-center font-medium flex items-center justify-center"}>
              <span className="hover:text-blue-150 mr-[8px] laptop:hover:text-white">Product</span>
              <span><img src={subLink === "1" ? arrowUp : arrowDown} alt="arrowIcon"/></span>
            </li>
            <ul className={subLink === "1" ? "bg-blue-100 laptop:bg-white w-[100%] laptop:w-auto laptop:absolute laptop:top-[110%] rounded-[8px] laptop:rounded-[3px] text-center laptop:text-left pt-[8px] laptop:px-[8px] laptop:pb-[10px] laptop:shadow-xl" : "bg-blue-100 laptop:bg-white w-[100%] laptop:w-auto laptop:absolute hidden laptop:top-[110%] rounded-[8px] laptop:rounded-[3px] text-center laptop:text-left pt-[8px] laptop:px-[8px] laptop:pb-[10px] laptop:shadow-xl"}>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Overview</li>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Pricing</li>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Marketplace</li>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Features</li>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Integrations</li>
            </ul>
          </div>
          <div className="w-[100%] text-center laptop:w-auto laptop:flex laptop:flex-col">
            <li onClick={()=> toggleSubMenu("2")} className={subLink === "2" ? "py-[10px] laptop:py-0 text-[18px] text-blue-150 laptop:text-white text-center font-medium flex items-center justify-center" : "py-[10px] laptop:py-0 text-[18px] text-blue-300 laptop:text-white text-center font-medium flex items-center justify-center"}>
              <span className="hover:text-blue-150 mr-[8px] laptop:hover:text-white">Company</span>
              <span><img src={subLink === "2" ? arrowUp : arrowDown} alt="arrowIcon"/></span>
            </li>
            <ul className={subLink === "2" ? "bg-blue-100 laptop:bg-white w-[100%] laptop:w-auto laptop:absolute laptop:top-[110%] rounded-[8px] laptop:rounded-[3px] text-center laptop:text-left pt-[8px] laptop:px-[8px] laptop:pb-[10px] laptop:shadow-xl" : "bg-blue-100 laptop:bg-white w-[100%] laptop:w-auto laptop:absolute hidden laptop:top-[110%] rounded-[8px] laptop:rounded-[3px] text-center laptop:text-left pt-[8px] laptop:px-[8px] laptop:pb-[10px] laptop:shadow-xl"}>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">About</li>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Team</li>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Blog</li>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Careers</li>
            </ul>
          </div>
          <div className="w-[100%] text-center laptop:w-auto laptop:relative laptop:flex laptop:flex-col">
            <li onClick={()=> toggleSubMenu("3")} className={subLink === "3" ? "py-[10px] laptop:py-0 text-[18px] text-blue-150 laptop:text-white text-center font-medium flex items-center justify-center" : "py-[10px] laptop:py-0 text-[18px] text-blue-300 laptop:text-white text-center font-medium flex items-center justify-center"}>
              <span className="hover:text-blue-150 mr-[8px] laptop:hover:text-white">Product</span>
              <span><img src={subLink === "3" ? arrowUp : arrowDown} alt="arrowIcon"/></span>
            </li>
            <ul className={subLink === "3" ? "bg-blue-100 laptop:bg-white w-[100%] laptop:w-auto laptop:absolute laptop:top-[110%] rounded-[8px] laptop:rounded-[3px] text-center laptop:text-left pt-[8px] laptop:px-[8px] laptop:pb-[10px] laptop:shadow-xl" : "bg-blue-100 laptop:bg-white w-[100%] laptop:w-auto laptop:absolute hidden laptop:top-[110%] rounded-[8px] laptop:rounded-[3px] text-center laptop:text-left pt-[8px] laptop:px-[8px] laptop:pb-[10px] laptop:shadow-xl"}>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Contact</li>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Newsletter</li>
              <li className="py-[8px] laptop:pl-[10px] laptop:pr-[40px] text-[16px] text-blue-150 laptop:hover:text-blue-300 font-medium">Linkedin</li>
            </ul>
          </div>
        </section>
        <section className="w-[100%] laptop:w-auto h-[110px] laptop:h-auto pb-[15px] laptop:pb-[0px] pt-[5px] laptop:pt-[ppx] flex flex-col laptop:flex-row items-center justify-between">
          <button className="px-[35px] py-[10px] font-semibold font-[16px] border-none outline-none rounded-[25px] text-blue-300 laptop:text-white">Login</button>
          <button className="px-[35px] py-[10px] font-semibold font-[16px] border-none outline-none rounded-[25px] bg-gradient-to-l from-red-500 to-orange-300 text-white laptop:from-white laptop:text-red-300 laptop:to-white laptop:hover:from-red-100 laptop:hover:to-red-100 laptop:hover:text-white">Sign Up</button>
        </section>
      </div>
      <div className="block laptop:hidden desktop:hidden">
        <img src={menuClicked? menuClosed : menuOpen} alt="menuIcon" onClick={()=>{toggleMenu()}} className="w-[25px] transition-[.7s]"/>
      </div>
    </div>
  )
}

export default NavBar;

/*
          
          
          */
         