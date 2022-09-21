import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  const skills = [
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
      id: 4,
      name: 'React',
      img: ReactImg,
    },
    {
      id: 5,
      name: 'Node',
      img: Node,
    },
    {
      id: 6,
      name: 'FireBase',
      img: FireBase,
    },
    {
      id: 7,
      name: 'AWS',
      img: AWS,
    },
    {
      id: 8,
      name: 'GitHub',
      img: GitHub,
    },
    {
      id: 9,
      name: 'Tailwind',
      img: Tailwind,
    },
    {
      id: 10,
      name: 'MongoDB',
      img: Mongo,
    },
  ];

  return (
    <div id="skills" className="w-full h-full bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 duration-300 hover:text-cyan-400">
            Skills
          </p>
          <p className="py-4 text-xl">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
          {skills.map(({ id, name, img }) => (
            <div
              key={id}
              className="shadow-md shadow-[#ff64ff] md:hover:scale-110 duration-500 rounded-2xl group hover:shadow-cyan-500 hover:shadow-xl "
            >
              <img
                className="w-20 mx-auto lg:group-hover:skew-x-3 duration-500 lg:group-hover:rotate-6 lg:group-hover:skew-y-6 lg:group-hover:scale-110"
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
