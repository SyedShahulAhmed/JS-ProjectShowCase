import React,{useState} from "react";
import Projects from '../constants/Projects.js'
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
const Project = () => {
  const [visibleCount, setVisibleCount] = useState(6); 
  const loadMoreProjects = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  }
  const allLoaded = visibleCount >= Projects.length;
  return (
    <div className="max-w-[1240px]  mx-auto mb-7 " id="project">
      <h1 className='uppercase tracking-wider font-bold text-3xl  md:text-4xl lg:text-5xl text-[#8d43ff] py-0 lg:py-7 text-center mb-7'>
        Projects
      </h1>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto ">
       {Projects.slice(0, visibleCount).map((item,key) => (
         <div key={key} className="max-w-[350px]  flex justify-center flex-col items-center  mx-auto border-2 border-[#9a6dff] shadow-md shadow-[#9a6dff] p-3 rounded-lg hover:scale-105 transition-all duration-300 mb-8">
         <img src={item.img} alt="" className="w-full mx-auto object-cover " />
         <h2 className="text-pink-600 text-3xl border-t-2 border-gray-600 w-full text-center pt-5">
           {item.title}
         </h2>
         <p className="text-gray-300 pt-3 text-center px-2">{item.miniDescription}</p>
         <div className="flex justify-center items-center">
           <Link to={item.github}>
           <button className="py-2 text-white text-center mx bg-[#7736ee] px-4 rounded-lg my-4 font-semibold hover:bg-[#6b3dc0] flex justify-center items-center gap-1">
            <FaGithub size={20}/>
           Github
           </button>
           </Link>
           <Link
                to={`/project/${item.id}`}
                className="py-2 text-white mx-3 bg-[#7736ee] px-4 rounded-lg my-4 font-semibold hover:bg-[#6b3dc0] flex justify-center items-center gap-1"
              >
                <TbListDetails size={20}/>
                Details
              </Link>
         </div>
       </div>
       ))}
        <button className="mx-auto sm:col-span-2 lg:col-span-3 mt-6 rounded-lg h-[50px] font-semibold  w-[100px] bg-[#c8adfb] 
        hover:bg-[#c8adfb] " onClick={loadMoreProjects}
        disabled={allLoaded}
        >Load more</button>
      </div>
      
    </div>
  );
};

export default Project;
