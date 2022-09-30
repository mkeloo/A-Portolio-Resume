import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id="home" className="bg-[#0a192f] w-full h-screen z-4 ">
      {/* Container */}
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="900"
        className="max-w-[1000px]  mx-auto mt-[-8] px-8 flex flex-col justify-center h-full"
      >
        <p className="text-pink-500  text-xl">Hi, my name is</p>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Moksh Keloo
        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] z-4">
          I'm a {/* Front-End Developer.*/}{' '}
          <Typed
            className=""
            strings={['Junior Front-End', 'Data Analyst']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Developer.
        </h2>
        <p
          data-aos="flip-left"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="text-[#8892b0] text-lg py-4 max-w-[700px]"
        >
          I’m a junior developer specializing in building (and occasionally
          designing) exceptional web and mobile digital experiences with simple
          backend capabilities.
        </p>
        <div>
          <Link
            to={'work'}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <button
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="1100"
              className="text-white group md:text-lg border-4 px-5 py-4 my-2 flex items-center hover:bg-pink-600 hover:font-bold hover:border-pink-900 duration-300 hover:scale-110 rounded-lg"
            >
              View Work
              <span className="duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight className="ml-3" size={30} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
