import React from "react";
import html from "../icons/external-html-5-mobile-app-development-flaticons-lineal-color-flat-icons.png";
import css from "../icons/css3.png";
import bootstrap from "../icons/bootstrap.png";
import javascript from "../icons/javascript-logo.png";
import react from "../icons/react.png";
import next from "../icons/Nextjs.b8a717322c08.png";
import typescript from "../icons/typescript--v1.png";
import github from "../icons/R.png";
import gitlab from "../icons/R (1).png";
const Skills = () => {
  return (
    <div name="skills">
      <div className="bg-[#0a192f] flex mx-auto px-4 flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-blue-600 pb-4">Experience</p>
          <p className="text-3xl text-white pb-4">
            These are the technologies i know
          </p>
        </div>
        <div>
          <div className="w-full grid grid-cols-4  gap-4 text-center py-2">
            <img src={html} className="mx-auto w-20" alt="HTML logo" />
            <p className="text-white">HTML</p>
            <img src={css} className="mx-auto w-20" alt="css logo" />
            <p className="text-white">CSS</p>
            <img
              src={bootstrap}
              className="mx-auto w-20"
              alt="bootstrap logo"
            />
            <p className="text-white">Bootstrap</p>
            <img
              src={javascript}
              className="mx-auto w-20"
              alt="javascript logo"
            />
            <p className="text-white">JavaScript</p>
            <img src={react} className="mx-auto w-20" alt="react logo" />
            <p className="text-white">React</p>
            <img src={next} className="mx-auto w-20" alt="next.js logo" />
            <p className="text-white">Next.js</p>
            <img src={typescript} className="mx-auto" alt="typescript logo" />
            <p className="text-white">Typescript</p>
            <img src={github} className="mx-auto w-20" alt="github logo" />
            <p className="text-white">Github</p>
            <img src={gitlab} className="mx-auto w-20" alt="gitlab logo" />
            <p className="text-white">Gitlab</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
