import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full sm:h-[65%]">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8 ">
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="700"
            className="sm:text-right  pb-8 m-4 mt-[-8] pl-4"
          >
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="900"
            className="sm:text-right text-4xl font-bold group"
          >
            <p>
              Hi. I'm{' '}
              <span className="link link-underline link-underline-black duration-300 group-hover:text-cyan-400">
                Moksh
              </span>
              , nice to meet you. Please take a look around.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <p className="md:text-xl text-lg">
              I enjoy working on Front-End UI projects that can have a positive
              impact on the lives of others. I specialize in creating web UI
              using
              <span className="text-cyan-500">
                {' '}
                React, NextJS, and TailwindCSS
              </span>{' '}
              . I am also experienced in building{' '}
              <span className="text-emerald-500">RESTful APIs</span> using{' '}
              <span className="text-emerald-500">
                {' '}
                NodeJS, Express, and MongoDB.
              </span>{' '}
              Currently, I'm a third-year student at the{' '}
              <span className="text-orange-500"> University of Florida </span>
              studying <span className="text-orange-500">Data Science.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
