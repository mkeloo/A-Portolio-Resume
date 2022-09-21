import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold group">
            <p>
              Hi. I'm{' '}
              <span className="link link-underline link-underline-black duration-300 group-hover:text-cyan-400">
                Moksh
              </span>
              , nice to meet you. Please take a look around.
            </p>
            {/* <p>
              Hi. it's nice to meet you. I'm a third-year student at the
              University of Florida studying Computer Science. Please take a
              look around.
            </p> */}
          </div>
          <div>
            {/* Change About Section: Keep it concise and noticeable */}
            {/* <img src={Blob} alt="blob" className="blur z-[-8]" /> */}
            <p className="text-xl">
              I am passionate about building Front-End UI that improves the
              lives of those around me. I specialize in creating web UI using
              React, NextJS, and TailwindCSS. I am also experienced in building
              RESTful APIs using NodeJS, Express, and MongoDB. Usually, for
              clients ranging from individuals and small-businesses all the way
              to large enterprise corporations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
