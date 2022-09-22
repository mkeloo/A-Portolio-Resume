import React from 'react';
import { Link } from 'react-scroll';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../index.css';

const Footer = () => {
  return (
    <div className="w-full bg-[#03045e] text-gray-400 py-8 px-2 border-t-2 border-pink-600">
      <div className="flex flex-col-2 items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="flex items-center justify-between pb-8 mr-7">
          <div className="ml-8 mr-8">
            <a
              href={'https://resume-mokshkeloo.netlify.app'}
              target="_blank"
              rel="noreferrer"
            >
              <button className="text-white group md:text-lg border-4 px-6 md:px-10 py-4 my-2 flex items-center hover:bg-pink-600 hover:font-bold hover:border-pink-900 duration-300 hover:scale-110 rounded-lg">
                Resume
                <span className="duration-300 group-hover:rotate-90">
                  {/* <HiArrowNarrowRight className="ml-3" size={30} /> */}
                </span>
              </button>
            </a>
          </div>
          <div className="md:ml-8 md:mr-8">
            <Link
              to={'home'}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <button className="text-white group md:text-lg border-4  md:px-14 px-8 py-4 my-2 flex items-center hover:bg-cyan-500 hover:font-bold hover:border-cyan-300 duration-300 hover:scale-110 rounded-lg">
                Home
                <span className="duration-300 group-hover:rotate-90">
                  {/* <HiArrowNarrowRight className="ml-3" size={30} /> */}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row items-center justify-center w-full">
        {/* Social Icons */}

        <div className="w-3/4 md:w-1/2">
          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <div className="flex items-center justify-center rounded-md group shadow-xl shadow-pink-500 p-3 cursor-pointer hover:scale-110 duration-200 ease-in hover:shadow-cyan-500">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={35}
                  className="duration-300 group-hover:scale-125"
                />
              </a>
            </div>
            <div className="flex items-center justify-center rounded-md group shadow-xl shadow-pink-500 p-3 cursor-pointer hover:scale-110 duration-200 ease-in hover:shadow-cyan-500">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={35}
                  className="duration-300 group-hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-8 mt-12">
        <h1 className="text-xl sm:text-xl  mb-8 lg:text-2xl px-2 link link-underline link-underline-black ">
          <span className="font-serif font-semibold">Made by </span>
          <span className="font-extrabold ">Moksh Keloo</span>
        </h1>
        <h1 className="text-4xl sm:text-6xl  lg:text-6xl px-2 link link-underline link-underline-black ">
          <span className="font-serif font-semibold">The </span>
          <span className="font-extrabold ">End</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
