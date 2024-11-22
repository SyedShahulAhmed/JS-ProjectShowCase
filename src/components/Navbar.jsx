import React from "react";
import linkedin from '../assets/Linkedin.png'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="flex justify-between items-center lg:px-6 px-4 py-5 ">
        <Link to='./'>
        <h1 className="text-xl  sm:xl md:text-2xl lg:text-3xl  font-bold text-gray-300 tracking-wider">
          Code
          <span className="text-[#665DDE] hover:text-[#3b34b1]">X</span>hibit
        </h1></Link>
        <div className="flex justify-center">
       <a href="https://www.linkedin.com/in/shahul-ahmed/">
       <button className="bg-[#665DDE] flex justify-center gap-2 py-2 px-4 text-center rounded-lg font-bold text-gray-200">
        Connect
        <img src={linkedin} alt="" className="w-6 h-6"/>
        </button>
       </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
