import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';

import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Bootstrap from '../assets/Bootstrap.png';
import Django from '../assets/django.png';
import Python from '../assets/python.jpg';
import CPP from '../assets/cpp.svg';
import Java from '../assets/Java.png';
import JQuery from '../assets/jquery.png';
import sql from '../assets/sql.png';
import Typescript from '../assets/Typescript.png';

const Skills = () => {
  const skills = [
    {
      id: 13,
      name: 'Python',
      img: Python,
    },
    {
      id: 14,
      name: 'Java',
      img: Java,
    },
    {
      id: 6,
      name: 'C++',
      img: CPP,
    },
    {
      id: 1,
      name: 'HTML',
      img: HTML,
    },
    {
      id: 2,
      name: 'CSS',
      img: CSS,
    },
    {
      id: 3,
      name: 'JavaScript',
      img: JavaScript,
    },
    {
      id: 7,
      name: 'TypeScript',
      img: Typescript,
    },
    {
      id: 4,
      name: 'React',
      img: ReactImg,
    },
    {
      id: 9,
      name: 'Tailwind',
      img: Tailwind,
    },
    {
      id: 11,
      name: 'Bootstrap',
      img: Bootstrap,
    },
    {
      id: 15,
      name: 'JQuery',
      img: JQuery,
    },
    {
      id: 5,
      name: 'Node',
      img: Node,
    },
    {
      id: 10,
      name: 'MongoDB',
      img: Mongo,
    },
    {
      id: 8,
      name: 'GitHub',
      img: GitHub,
    },
    {
      id: 12,
      name: 'Django',
      img: Django,
    },
    {
      id: 16,
      name: 'SQL',
      img: sql,
    },
  ];

  return (
    <div
      id="skills"
      className="w-full md:h-screen h-full bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div data-aos="fade-down" data-aos-duration="2000" data-aos-delay="600">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 duration-300 hover:text-cyan-400">
            Skills
          </p>
          <p className="py-4 text-xl">
            These are the technologies I've worked with
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="600"
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8"
        >
          {skills.map(({ id, name, img }) => (
            <div
              key={id}
              className="shadow-md shadow-[#ff64ff] md:hover:scale-110 duration-500 rounded-2xl group hover:shadow-cyan-500 hover:shadow-xl "
            >
              <img
                className="w-20 mx-auto md:group-hover:skew-x-3 duration-500 md:group-hover:rotate-6 md:group-hover:skew-y-6 md:group-hover:scale-110"
                src={img}
                alt={name}
              />
              <p className="my-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
