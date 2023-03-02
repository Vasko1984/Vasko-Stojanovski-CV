import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div name="name" className="w-full h-screen text-white bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div>
          <div className="text-5xl font-sans inline border-b-4 border-blue-500">
            <p>About me</p>
          </div>
          <div></div>
          <div className="max-w-[1000px] w-full grid grid-col-2 gap-0">
            <div>
              <p className="text-4xl font-serif text-blue-600">
                Hi, i'm Vasko please have a look around and nice to meet you
              </p>
              <p className="text-3xl font-serif text-blue-600">
                I'm passionate about building exelent apps ,and improve myself
                everyday
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
