import React,{useState} from "react";
import Projects from '../constants/Projects.js'
import { Link } from "react-router-dom";
const Project = () => {
  const [visibleCount, setVisibleCount] = useState(6); 
  const loadMoreProjects = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  }
  const allLoaded = visibleCount >= Projects.length;
  return (
    <div className="max-w-[1240px]  mx-auto mb-7 " id="project">
      <h1 className='uppercase tracking-wider font-bold text-3xl  md:text-4xl lg:text-5xl text-white py-0 lg:py-7 text-center mb-7'>
        Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 ">
       {Projects.slice(0, visibleCount).map((item,key) => (
         <div key={key} className="min-w-[350px]  flex justify-center flex-col items-center shadow-[-1px_4px_35px_-13px_rgba(0,_0,_0,_0.8)] border-2 border-blue-300 rounded-lg">
         <img src={item.img} alt="" className="w-full mx-auto object-cover " />
         <h2 className="text-pink-600 text-3xl border-t-2 border-gray-600 w-full text-center pt-5">
           {item.title}
         </h2>
         <p className="text-gray-300 py-3 text-center px-2">{item.miniDescription}</p>
         <div className="flex justify-center items-center">
           <Link to={item.github}>
           <button className="py-2 text-white text-center mx bg-[#433D91] hover:scale-105 hover:border-2 px-4 rounded-lg my-6 ">
           Github
           </button>
           </Link>
           <Link
                to={`/project/${item.id}`}
                className="py-2 text-white mx-3 bg-[#433D91] hover:scale-105 hover:border-2 px-4 rounded-lg my-6"
              >
                Details
              </Link>
         </div>
       </div>
       ))}
        <button className="mx-auto md:col-span-2 lg:col-span-3 mt-6 rounded-lg h-[50px] w-[100px] bg-yellow-200 " onClick={loadMoreProjects}
        disabled={allLoaded}
        >Load more</button>
      </div>
      
    </div>
  );
};

export default Project;
