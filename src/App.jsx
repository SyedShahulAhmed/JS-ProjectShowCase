import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SectionJs from './components/SectionJs';
import Javascript from './components/Javascript';
import Contact from './components/Contact';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <Router>
      <div className="bg-[#252252] w-full h-full overflow-x-hidden">
        <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <SectionJs />
              <Javascript />
              <Project />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
