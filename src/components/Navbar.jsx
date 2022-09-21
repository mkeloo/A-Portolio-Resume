import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NameGIF from '../assets/scrap.gif';
import { Link } from 'react-scroll';

const Navbar = () => {
  const links = [
    { id: 1, url: 'home', text: 'Home' },
    { id: 2, url: 'about', text: 'About' },
    { id: 3, url: 'skills', text: 'Skills' },
    { id: 4, url: 'work', text: 'Work' },
    { id: 5, url: 'contact', text: 'Contact' },
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
      icon: <BsFillPersonLinesFill size={30} Download />,
      text: 'Resume',
    },
  ];

  const [nav] = useState(true);

  // navbar hide
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  // main Component
  return (
    <div className="fixed sm:sticky w-full h-[75px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          src={NameGIF}
          alt="Logo"
          style={{ width: '90px' }}
          className="ml-3 mt-2"
        />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <Link
              to={url}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <li
                key={id}
                className="pb-3 link link-underline link-underline-black duration-500 hover:scale-110 hover:text-cyan-400"
              >
                {text}
              </li>
            </Link>
          );
        })}
      </ul>

      {/* Hamburger Menu */}
      <div onClick={() => setIsMenuOpen(true)} className="md:hidden  z-[100]">
        {isMenuOpen && nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Mobile Menu */}
      {/* Floating Navbar Design */}
      <div
        className={`${nav ? 'flex' : 'hidden'} p-6 sm:hidden z-front text-xl ${
          isMenuOpen && 'bg-black-gradient'
        }  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        ref={ref}
      >
        {isMenuOpen && (
          <ul className="list-non flex flex-col justify-end items-center flex-1 ">
            {links.map(({ id, url, text }) => (
              <Link
                to={url}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <li
                  key={id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    id === links.length ? 'mr-0' : 'mb-4'
                  } text-white`}
                >
                  <span className="link link-underline font-bold hover:text-cyan-500 pb-2 link-underline-black">
                    <a href={url}>{text}</a>
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>

      {/* Social icons */}
      {/* Fixed Media Query for Medium devices */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socials.map((social) => {
            const { id, url, icon, text } = social;
            return (
              <li
                key={id}
                className="w-[160px] h-[60px] flex justify-between items-center ml-[-102px] hover:ml-[-10px] duration-500 rounded-md bg-pink-600"
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
