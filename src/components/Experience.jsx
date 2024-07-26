import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineEye, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Reveal from "./Reveal";

const certificates = [
  {
    title: 'Front end Certification',
    img: 'https://i.postimg.cc/J0Z46C6Y/java-script.jpg',
    link: 'https://www.udemy.com/certificate/UC-48931f3c-4530-48a6-aa4c-14d65d98d58b/',
  },
  {
    title: 'MEAN Stack Certification',
    img: 'https://i.postimg.cc/KYGk1jqG/UC-06d4d06b-7176-4908-bd5a-14d6be50e86b.jpg',
    link: 'https://www.udemy.com/certificate/UC-06d4d06b-7176-4908-bd5a-14d6be50e86b/',
  }
  // More certificates
];

const itemsPerPage = 2;

const Experience = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = certificates.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className='p-8 max-w-4xl mx-auto'>
       <Reveal>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Certificates</h1>
      <p className="text-center text-white mb-8">
        My comprehensive array of certificates demonstrates a high level of proficiency, steadfast dedication, and notable success across multiple disciplines, underscoring a diverse skill set and significant accomplishments.
      </p>
      <div className='relative'>
   
          <motion.div
            key={currentPage} // Key to trigger re-rendering on page change
            className='flex flex-wrap justify-center gap-6'
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }}   // Slide in from the right
            exit={{ opacity: 0, x: -100 }}   // Slide out to the left
            transition={{ duration: 0.5 }}
          >
            {currentItems.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}  // Exit animation for individual items
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className='border border-purple-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-purple-700/10 h-full'>
                  <img
                    src={certificate.img}
                    alt={certificate.title}
                    className='w-full h-60 object-cover rounded-lg shadow-md mb-4'
                  />
                  <h2 className='text-gray-100 text-lg font-semibold mb-2'>{certificate.title}</h2>
                  <a
                    href={certificate.link}
                    className='mt-2 px-4 py-2 bg-blue-600 text-gray-200 rounded-lg hover:bg-blue-700 transition duration-300 inline-flex items-center'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <AiOutlineEye className='mr-2 text-lg' />
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
    
      </div>
      <div className='flex justify-center mt-8 space-x-6'>
        <motion.button
          onClick={prevPage}
          className='w-12 h-12 flex items-center justify-center bg-gray-600 text-gray-200 rounded-full hover:bg-gray-700 transition duration-300'
          disabled={currentPage === 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AiOutlineLeft className='text-lg' />
        </motion.button>
        <span className='text-gray-300 flex items-center justify-center'>
           {currentPage} / {totalPages}
        </span>
        <motion.button
          onClick={nextPage}
          className='w-12 h-12 flex items-center justify-center bg-gray-600 text-gray-200 rounded-full hover:bg-gray-700 transition duration-300'
          disabled={currentPage === totalPages}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AiOutlineRight className='text-lg' />
        </motion.button>
      </div>
      </Reveal>
    </div>
  );
};

export default Experience;
