import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const projects = [
    {
        img: "https://i.postimg.cc/PJfpvN5b/Screenshot-2024-07-24-232434.png",
        title: "🎓 Students Tracking🎓",
        description: "Students Tracking System is an advanced web platform built with the MERN Stack, offering real-time updates and detailed reports while facilitating effective communication between parents and teachers, and improving attendance tracking",
        links: {
            site: "https://studentstracking.vercel.app/",
            github: "https://github.com/UN-Org-Project",
        },
    },
    {
        img: "https://i.postimg.cc/50D9b0FN/Screenshot-2024-07-24-233422.png",
        title: "🎵 Melody Hub🎵",
        description: "Melody Hub is a music streaming web application featuring a user-friendly interface built with React and a robust backend powered by Node.js, Express, and PostgreSQL, designed for seamless music discovery and playback.",
        links: {
            site: "https://rococo-muffin-50b08e.netlify.app/",
            github: "https://github.com/project-weak",
        },
    }
];

const Portfolio = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
            {projects.map((project, index) => (
                <Reveal key={index}>
                    <motion.div 
                        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.3 }}
                    >
                        <div className='relative w-full md:w-1/2 p-4'>
                            <img
                                src={project.img}
                                alt={project.title}
                                className='w-full h-full object-cover rounded-lg shadow-lg'
                            />
                            <div className='absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                                <div className='flex space-x-4'>
                                    <a href={project.links.site}
                                        className='px-4 py-2 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-800
                                                    transition duration-300'>
                                        View Site
                                    </a>
                                    <a href={project.links.github}
                                        className='px-4 py-2 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-800
                                                    transition duration-300'>
                                        <AiOutlineGithub className='text-2xl' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                        <h3 className='text-2xl font-semibold text-blue-500 mb-4'>{project.title}</h3>
                            <p className='text-gray-300 mb-4'>{project.description}</p>
                            <div className='flex space-x-4'>
                                    <a href={project.links.site}
                                        className='px-4 py-2 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-800
                                                    transition duration-300'>
                                        View Site
                                    </a>
                                    <a href={project.links.github}
                                        className='px-4 py-2 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-800
                                                    transition duration-300'>
                                        <AiOutlineGithub className='text-2xl' />
                                    </a>
                                </div>
                        </div>
                    </motion.div>
                </Reveal>
            ))}
        </div>
    )
}

export default Portfolio;
