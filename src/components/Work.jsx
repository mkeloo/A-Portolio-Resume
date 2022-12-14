import React from 'react';
import Bogo from '../assets/projects/Bogo.png';
import Hoobr from '../assets/projects/Hoobr.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Light from '../assets/projects/Light.png';
import Defi from '../assets/projects/Defi.png';
import Dollartech from '../assets/projects/Dollartech.png';
import Onn from '../assets/projects/Onn.png';
import DataWarehouse from '../assets/projects/DataWarehouse.png';

const Work = () => {
  const workList = [
    {
      id: 1,
      name: 'Bogo Eats',
      img: Bogo,
      sub: 'A food delivery app UI',
      tech: 'React JS, Tailwind CSS',
      demo: 'https://bogo-eats.netlify.app',
      code: 'https://github.com/mkeloo/Bogo-Eats',
    },
    {
      id: 2,
      name: 'Hoober Bank',
      img: Hoobr,
      sub: 'A banking app UI',
      tech: 'React JS, Tailwind CSS',
      demo: 'https://payment-hoobnk.netlify.app',
      code: 'https://github.com/mkeloo/Hoobank-Payment',
    },
    {
      id: 3,
      name: 'Light',
      img: Light,
      sub: 'A VR media app UI',
      tech: 'React JS, Tailwind, SCSS',
      demo: 'https://vr-light.netlify.app',
      code: 'https://github.com/mkeloo/VR-Light',
    },
    {
      id: 4,
      name: 'Defi',
      img: Defi,
      sub: 'A crypto app UI',
      tech: 'React JS, Tailwind CSS',
      demo: 'https://defi-crypto-labs.netlify.app/',
      code: 'https://github.com/mkeloo/Defi',
    },
    {
      id: 5,
      name: 'Dollartech',
      img: Dollartech,
      sub: 'A Finance app UI',
      tech: 'React JS, Tailwind CSS',
      demo: 'https://growth-data.netlify.app',
      code: 'https://github.com/mkeloo/Finance-Data',
    },
    {
      id: 6,
      name: 'Onn',
      img: Onn,
      sub: 'A Cloud Hosting app UI',
      tech: 'React JS, Tailwind CSS',
      demo: 'https://cloud-services-landing.netlify.app/',
      code: 'https://github.com/mkeloo/Cloud-Web-Mockup-Website',
    },
    {
      id: 7,
      name: 'Data Warehouse',
      img: DataWarehouse,
      sub: 'A Data Solution UI',
      tech: 'React JS, Tailwind CSS',
      demo: 'https://data-warehouse-storage.netlify.app/',
      code: 'https://github.com/mkeloo/Storage-Data',
    },
  ];

  return (
    <div id="work" className="w-full md:h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay="600"
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 p-2  mb-4">
          {/* Grid Item */}

          {workList.map(({ id, name, img, sub, tech, demo, code }) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="600"
              key={id}
              className="sm:relative flex items-center justify-center h-full w-full shadow-xl shadow-pink-500 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] mb-1 lg:hover:scale-105 transition duration-300 ease-in-out hover:shadow-cyan-500  "
            >
              <img
                className="rounded-xl group-hover:opacity-10 "
                src={img}
                alt="/"
              />
              <div className="hidden group-hover:block absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] pb-4 pt-2 ">
                <h3 className="lg:text-2xl text-white text-center sm:font-bold text-lg underline">
                  {name}
                </h3>
                <p className="lg:text-lg text-gray-300 text-md">{sub}</p>
                <p className="lg:pb-4 lg:pt-2  text-white text-center text-md">
                  {tech}
                </p>
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg lg:px-2 lg:py-3 m-2 px-1 py-1 bg-white text-gray-700 text-md font-bold lg:text-lg  lg:hover:rotate-6">
                    Demo
                    {/* hide icon */}
                    <span className="">
                      <FaExternalLinkAlt className="inline ml-1" />
                    </span>
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg lg:px-2 lg:py-3 m-2 px-1 py-1 bg-white text-gray-700 font-bold lg:text-lg text-md lg:hover:rotate-6">
                    Code
                    <span className="">
                      <FaGithub className="inline ml-1" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
