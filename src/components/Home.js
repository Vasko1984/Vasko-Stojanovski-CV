import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi,my name is </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#ccd6fd]">
          Vasko Stojanovski
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0]">
          i'm a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w">
          i'm a Frontend Developer passionate about coding .<br />
          Ocassionally designing exeptional digital experieces.
          <br />
          Currently i'm focused on building responcive Frontend applications
        </p>
        <div>
          <button className="text-white border-2 px-6 py-2 my-2 hover:bg-pink-600 hover:border-pink-600 ">
            My Work <HiArrowNarrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
