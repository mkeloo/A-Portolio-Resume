import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const links = [
    { id: 1, url: '#', text: 'Home' },
    { id: 2, url: '#', text: 'About' },
    { id: 3, url: '#', text: 'Skills' },
    { id: 4, url: '#', text: 'Work' },
    { id: 5, url: '#', text: 'Contact' },
  ];

  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="Logo" style={{ width: '50px' }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex ">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li
              key={id}
              className="pb-3 link link-underline link-underline-black duration-500 hover:scale-105 hover:text-cyan-400"
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
    </div>
  );
};

export default Navbar;
