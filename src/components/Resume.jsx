import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BiAtom, BiCodeAlt } from 'react-icons/bi';

const Resume = () => {
  const skillBeginner = [
    { id: 9, name: 'Node JS' },
    { id: 10, name: 'Express JS' },
    { id: 11, name: 'MongoDB' },
    { id: 14, name: 'Django' },
  ];

  //   const skillIntermediate = [
  //     { id: 1, name: 'Java' },
  //     { id: 2, name: 'Python' },
  //     { id: 3, name: 'C++' },
  //     { id: 4, name: 'HTML' },
  //     { id: 5, name: 'CSS' },
  //     { id: 15, name: 'Tailwind' },
  //     { id: 16, name: 'Bootstrap' },
  //     { id: 17, name: 'SCSS' },
  //     { id: 6, name: 'JavaScript' },
  //     { id: 21, name: 'JQuery' },
  //     { id: 21, name: 'TypeScript' },
  //     { id: 7, name: 'React JS' },
  //     { id: 8, name: 'Next JS' },
  //     { id: 12, name: 'SQL, PostgreSQL' },
  //     { id: 13, name: 'Git' },
  //     { id: 18, name: 'REST API' },
  //     { id: 19, name: 'Microsoft Suite' },
  //     { id: 20, name: 'Figma (UI/UX Design)' },
  //     { id: 22, name: 'Tableau' },
  //     { id: 23, name: 'Knowledge of SDLC, Agile, and Scrum Methodologies' },
  //   ];

  return (
    <div name="resume" className="max-w-[940px] mx-auto p-2 pt-[120px]">
      <h2 className="text-center text-4xl font-bold">Resume</h2>
      <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
        <h2 className="text-cente text-2xl font-bold ml-2">Moksh Keloo</h2>
        <div className="flex">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn
              size={30}
              className="hover:scale-125 duration-300"
              style={{ marginRight: '2rem' }}
            />
          </a>
          <a href="https://github.com/mkeloo" target="_blank" rel="noreferrer">
            <FaGithub
              size={30}
              className="hover:scale-125 duration-300"
              style={{ marginRight: '2rem' }}
            />
          </a>
        </div>
      </div>
      <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
        <div className="hidden sm:block">
          <p>
            Proven Leadership <span className="px-1">|</span> Web Development{' '}
            <span className="px-1">|</span> Complex Problem Solving
          </p>
        </div>
        <div className="block sm:hidden">
          <p>Proven Leadership</p>
          <p className="py-2">Web Development</p>
          <p>Complex Problem Solving</p>
        </div>
      </div>
      <p>
        Analytical, innovative, and motivated web development professional with
        experience in customer service, team leadership, and organizational
        effectiveness in fast-paced and challenging environments. Adept at
        developing strategies and driving streamlined operations. Diverse
        analytical skills, team collaboration, and relationship building.
        Consummate professional, and motivated leader, with solid interpersonal
        abilities and complex problem-solving skills. Effective and proven track
        record of critical thinking, idea generation, and optimizing
        efficiencies.
      </p>

      {/* Skills */}
      <div className="text-center py-4 text-lg">
        <h5 className="text-center underline text-2xl font-bold py-3 mt-3">
          Technical Skills
        </h5>

        <div className="flex flex-col-2 justify-center gap-2">
          <div className="flex flex-col items-center">
            <h5 className="text-center underline text-xl font-bold py-2 mt-3">
              Intermediate
            </h5>
            <div className="">
              <ul className="list-disc list-outside px-7 py-3 leading-relaxed">
                <li className="">
                  <span>
                    Java <span className="px-1">|</span> Python{' '}
                    <span className="px-2">|</span> C++{' '}
                  </span>
                </li>
                <li>
                  <span>
                    HTML <span className="px-1">|</span> CSS{' '}
                    <span className="px-2">|</span> JavaScript{' '}
                    <span className="px-2">|</span>TypeScript{' '}
                  </span>
                </li>
                <li>
                  <span>
                    React JS <span className="px-1">|</span> Next JS{' '}
                    <span className="px-2">|</span>JQuery{' '}
                  </span>
                </li>
                <li>
                  <span>
                    Tailwind CSS <span className="px-1">|</span> Bootstrap{' '}
                    <span className="px-2">|</span>SASS{' '}
                    <span className="px-2">|</span>SCSS{' '}
                  </span>
                </li>
                <li>
                  <span>
                    SQL <span className="px-1">|</span> PostgreSQl{' '}
                  </span>
                </li>
                <li>
                  <span>
                    GIT <span className="px-1">|</span> GitHub{' '}
                  </span>
                </li>
                <li>
                  <span>REST API</span>
                </li>
                <li>
                  <span>Figma (UI/UX Design)</span>
                </li>
                <li>
                  <span>Microsoft Suite</span>
                </li>
                <li>
                  <span>Tableau</span>
                </li>
                <li>
                  <span>Knowledge of SDLC, Agile, and Scrum Methodologies</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-center underline text-xl font-bold py-2 mt-3">
              Beginner
            </h5>
            <div>
              {skillBeginner.map((skill) => (
                <ul
                  key={skill.id}
                  className="py-1 list-disc list-outside px-7 leading-relaxed "
                >
                  <li>{skill.name}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <h5 className="text-center underline text-2xl font-bold py-2 mt-3">
        Professional Experience
      </h5>
      {/* Experience */}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold">
            Amnesty Floor Monitor (AFM) at Amazon Robotics Warehouse
          </span>
          <span className="px-2">|</span>Jacksonville, FL
        </p>
        <p className="py-1 italic">Amazon.com (December 2021 – August 2022)</p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Diagnosed problematic and disabled robotic drives units to ensure
            smooth operations on the AR Floor for the associates.
          </li>
          <li>
            Assisted inbound and outbound teams in accomplishing daily
            performance targets by fostering optimum floor health on the Amazon
            Robotics (AR) floor.
          </li>
          <li>
            Removed obstacles and merchandise from the AR Floor to optimize
            robotic drive and pod functionality.
          </li>
          <li>
            Retrieved orders rapidly to meet demanding efficiency targets during
            Prime Day and other peak seasons
          </li>
          <li>
            Accomplished targets by prioritizing tasks well and striving
            diligently.
          </li>
        </ul>
      </div>
      {/* Experience */}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold">
            Virtual Customer Service Representative
          </span>
          <span className="px-2">|</span>Jacksonville, FL
        </p>
        <p className="py-1 italic">Amazon.com (May 2019 – September 2021)</p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
          <li>
            Provided customers with product concerns while offering great
            experiences through timely assistance.
          </li>
          <li>
            Delivered detailed information on navigating Amazon services and its
            self-service systems.
          </li>
          <li>
            Maintained an in-depth understanding of the company's goods and
            services in order to provide information on premium offers
          </li>
          <li>
            Connected customers with constructive initiatives in order to assess
            their requirements and provide effective solutions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
