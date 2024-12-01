import React from "react";
import linkedin from '../assets/Linkedin.png'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="flex justify-between items-center lg:px-6 px-4 py-5 ">
        <Link to='./'>
        <h1 className="text-xl  sm:xl md:text-2xl lg:text-3xl  font-bold text-white tracking-wider
        hover:scale-105 transition-all duration-300
        ">
          Code
          <span className="text-[#8d43ff] hover:text-[#7642c4]">X</span>hibit
        </h1></Link>
        <div className="flex justify-center">
       <a href="https://www.linkedin.com/in/shahul-ahmed/">
       <button className="bg-[#665DDE] flex justify-center gap-2 py-2 px-4 text-center rounded-lg font-bold text-gray-200 hover:bg-[#534cb2] hover:scale-105 transition-all duration-300">
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
