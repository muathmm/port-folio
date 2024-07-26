import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-purple-900 text-gray-300 py-8'>
      <div className='max-w-6xl mx-auto flex justify-between items-center px-6 md:px-12'>
        <div className='space-y-4'>
          <h3 className='text-3xl font-bold text-white'>DEV.MM</h3>
          <div className='flex gap-6 text-gray-400 text-3xl'>
            <a 
              href="https://github.com/muathmm" 
              className='hover:text-white transition duration-300'
              aria-label="GitHub Profile"
            >
              <FaGithubSquare />
            </a>
            <a 
              href="https://www.linkedin.com/in/muathmhawich/" 
              className='hover:text-white transition duration-300'
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <p className='text-gray-300 text-sm'>@2024 DEV.MM</p>
      </div>
    </div>
  )
}

export default Footer;
