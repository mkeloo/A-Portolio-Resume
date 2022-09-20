import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div name="Home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-500 text-xl">Hi, my name is</p>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Moksh Keloo
        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a {/* Front-End Developer.*/}{' '}
          <Typed
            strings={['Junior Front-End']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group md:text-lg border-4 px-5 py-4 my-2 flex items-center hover:bg-pink-600 hover:font-bold hover:border-pink-900 duration-300 hover:scale-110 rounded-lg">
            View Work
            <span className="duration-300 group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-3" size={30} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
