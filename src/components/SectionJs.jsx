import React from "react";
import hero from "../assets/hero.png";
import RArrow from '../assets/RightArrow.png'
const SectionJs = () => {
  return (
    <div className=" max-w-[1240px] mx-auto  lg:mb-0 ">
      <div className="grid lg:grid-cols-2 place-content-center ">
        <div className=" flex flex-col justify-center items-start px-7 m text-white py-7 ">
      <div className="max-w-[500px]">
      <h1 className="text-3xl  md:text-4xl lg:text-5xl py-6 font-bold">
        Unleash the Power of <span className="text-yellow-500">JavaScript</span> Creativity!
        </h1>
        <p className="text-lg text-gray-400 pb-6 ">
        Step into a world of interactive, innovative, and inspiring JavaScript projects. Explore my journey of code, creativity.
        </p>
        <a href="#project">
        <button className="text-white flex justify-center gap-2 hover:bg-[#534e9e] py-3 px-6 rounded-lg bg-[#645dcf]">
            Explore Projects
              <img src={RArrow} alt="" className="w-6 h-6"/>
        </button>
        </a>
      </div>
        </div>
        <div
          className=" flex justify-center p-8 
        "
        >
          <img
            src={hero}
            alt="Hero Image"
            className="w-full   drop-shadow-2xl rounded-lg  transition-transform transform hover:scale-105 hover:rotate-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionJs;
