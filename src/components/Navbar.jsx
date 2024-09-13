import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-12 h-20 text-gray-200 text-xl">
   
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li className="relative group">
            <Link to="skills" smooth={true} offset={50} duration={500} className="hover:text-purple-400 transition duration-300">
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </li>
          <li className="relative group">
            <Link to="portfolio" smooth={true} offset={50} duration={500} className="hover:text-purple-400 transition duration-300">
              Portfolio
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </li>
          <li className="relative group">
            <Link to="contact" smooth={true} offset={50} duration={500} className="hover:text-purple-400 transition duration-300">
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </li>
        </ul>
        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200 cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <li>
              <Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
