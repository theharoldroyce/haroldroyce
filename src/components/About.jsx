import React from "react";
import ProfileIcon from "../assests/Profile.jpg";

const About = () => {
  
  return (
    <div
    name="about"
    className="w-full h-screen bg-[#09070A] text-[#EDECEC] "
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>
      <div className="grid md:grid-cols-2 max-w-screen-lg p-5">
      <div className="flex flex-col justify-center items-center p-4 ">
         <img className='rounded-full h-44 w-44 md:h-64 md:w-64' src={ProfileIcon} alt='/' />
      </div>
      <div className="flex flex-col justify-center items-center p-4 ">
         <p className='text-base md:text-xl'>
              I have knowledge in Programing, Web Designing and Web Development. I
              focus now enhancing my skill on Web Development using modern
              Technology. When I'm not writing code i do photography.
          </p>
          </div>    
        </div>
    </div>
  </div>
  );
};

export default About;
