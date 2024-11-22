import React from 'react'
import js from '../assets/js.png'
import Uarrow from '../assets/UpArrow.png'
const Javascript = () => {
  return (
    <div className=" max-w-[1240px] mx-auto ">
      <div className="grid lg:grid-cols-2 place-content-center mb-7">
      <div
          className=" flex justify-center p-8 
        "
        >
          <img
            src={js}
            alt="Hero Image"
            className="w-full sm:w-[50%] lg:w-[100%]  drop-shadow-2xl rounded-lg  transition-transform transform hover:scale-105 hover:rotate-2"
          />
        </div>
        <div className=" flex flex-col justify-center items-start px-7 m text-white py-7 ">
      <div className="max-w-[500px]">
      <h1 className="text-3xl  md:text-4xl lg:text-5xl py-6 font-bold text-yellow-500">
      Why JavaScript?
        </h1>
        <p className="text-lg text-gray-400 pb-6 text-justify">
        JavaScript is the backbone of interactive, dynamic web development. It's a powerful scripting language that enables developers to bring websites to life, making them not only functional but engaging.
        <br/>
        JavaScript is essential for creating seamless user experiences. With its versatility, JavaScript powers everything from real-time updates, animations, and interactive forms to complex web APIs.
        </p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
        <button className="text-slate-300 flex justify-center gap-2 hover:bg-[#433D86]uy7i8 py-3 px-6 rounded-lg bg-[#433D91]">
            Learn more
            <img src={Uarrow} alt="" className='w-6 h-6'/>
        </button>
        </a>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Javascript

