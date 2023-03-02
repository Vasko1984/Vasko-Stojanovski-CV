import React from "react";
import Worki from "../pictures/apple-g70dd7a0f9_640.jpg";
import Working from "../pictures/firebase.logo.png";

const Work = () => {
  return (
    <>
      <div
        name="work"
        className="bg-[#0a192f] w-full md:h-screen text-gray-600 pt-4 pb-36"
      >
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full mt-36">
          <div className="pb-8">
            <p className="text-6xl text-white">Work</p>
            <p className="4xl text-blue-600 py-6">
              Check out some of my recent projects
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div
              style={{ backgroundImage: `url {${Worki}}` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div>
                <span className="text-2xl font-bold textt-white tracking-wider">
                  React JS Application
                </span>
              </div>
              <div className="pt-8 text-center ">
                <a href="https://heartfelt-pika-353d45.netlify.app/">
                  <button className="text-center rounded -lg px-4 py-2 m-2 bg-white text-gray">
                    Demo
                  </button>
                </a>
                <a href="https://gitlab.com/Vasko1984/brainster-projects.vasko-stojsnovski/-/tree/project3">
                  <button className="text-center rounded -lg px-4 py-2 m-2 bg-white text-gray">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url {${Working}}` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div>
                <span className="text-2xl font-bold textt-white tracking-wider">
                  React JS Application
                </span>
              </div>
              <div className="pt-8 text-center ">
                <a href="https://vasko1984.netlify.app/">
                  <button className="text-center rounded -lg px-4 py-2 m-2 bg-white text-gray">
                    Demo
                  </button>
                </a>
                <a href="https://gitlab.com/Vasko1984/brainster-projects.vasko-stojsnovski/-/tree/Project01">
                  <button className="text-center rounded -lg px-4 py-2 m-2 bg-white text-gray">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url {${Worki}}` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div>
                <span className="text-2xl font-bold textt-white tracking-wider">
                  React JS Application
                </span>
              </div>
              <div className="pt-8 text-center ">
                <a href="https://street-artist-402ea2.netlify.app/">
                  <button className="text-center rounded -lg px-4 py-2 m-2 bg-white text-gray">
                    Demo
                  </button>
                </a>
                <a href="https://gitlab.com/Vasko1984/brainster-projects.vasko-stojsnovski/-/tree/Project2">
                  <button className="text-center rounded -lg px-4 py-2 m-2 bg-white text-gray">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url {${Worki}}` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div>
                <span className="text-2xl font-bold textt-white tracking-wider">
                  React JS Application
                </span>
              </div>
              <div className="pt-8 text-center ">
                <a href="https://github.com/Vasko1984/Mozok-Challenge">
                  <button className="text-center rounded -lg px-4 py-2 m-2 bg-white text-gray">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url {${Worki}}` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div>
                <span className="text-2xl font-bold textt-white tracking-wider">
                  React JS Application
                </span>
              </div>
              <div className="pt-8 text-center ">
                <a href="https://github.com/Vasko1984/react-crud">
                  <button className="text-center rounded -lg px-4 py-2 m-2 bg-white text-gray">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url {${Worki}}` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div mb-36"
            >
              <div>
                <span className="text-2xl font-bold textt-white tracking-wider">
                  React JS Application
                </span>
              </div>
              <div className="pt-8 text-center ">
                <a href="https://github.com/Vasko1984/todo">
                  <button className="text-center rounded -lg px-4 py-2 m-2 bg-white text-gray">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
