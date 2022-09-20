import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NameGIF from '../assets/NameGIF.gif';

const Navbar = () => {
  const links = [
    { id: 1, url: '#', text: 'Home' },
    { id: 2, url: '#', text: 'About' },
    { id: 3, url: '#', text: 'Skills' },
    { id: 4, url: '#', text: 'Work' },
    { id: 5, url: '#', text: 'Contact' },
  ];

  const socials = [
    {
      id: 1,
      url: 'https://www.github.com',
      icon: <FaGithub size={30} />,
      text: 'GitHub',
    },
    {
      id: 2,
      url: 'https://www.linkedin.com',
      icon: <FaLinkedin size={30} />,
      text: 'LinkedIn',
    },
    {
      id: 3,
      url: 'mailto:mokshkeloo@gmail.com',
      icon: <HiOutlineMail size={30} />,
      text: 'Email',
    },
    {
      id: 4,
      url: 'https://www.instagram.com',
      icon: <BsFillPersonLinesFill size={30} />,
      text: 'Resume',
    },
  ];

  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={NameGIF} alt="Logo" style={{ width: '80px' }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li
              key={id}
              className="pb-3 link link-underline link-underline-black duration-500 hover:scale-110 hover:text-cyan-400"
            >
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>

      {/* Hamburger Menu */}
      <div onClick={toggleNav} className="md:hidden z-10">
        {!nav ? <FaBars size={28} /> : <FaTimes size={28} />}
      </div>

      {/* Mobile Menu */}
      {/* Add Logo on top and socials in the bottom */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li
              key={id}
              className="py-6 duration-500 hover:scale-105 hover:text-cyan-400 text-2xl link link-underline link-underline-black"
            >
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>

      {/* Social icons */}
      {/* Fixed Media Query for Medium devices */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socials.map((social) => {
            const { id, url, icon, text } = social;
            return (
              <li
                key={id}
                className="w-[160px] md:w-[130px] md:h-[50px] md:ml-[-80px] h-[60px] flex justify-between items-center ml-[-102px] hover:ml-[-10px] duration-500 rounded-md bg-pink-600"
              >
                <a
                  className="flex justify-between  items-center w-full font-mono hover:font-bold text-gray-200"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text} {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
