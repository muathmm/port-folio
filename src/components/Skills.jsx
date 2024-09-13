import { motion } from "framer-motion";
import React from "react";
import { Link } from 'react-scroll';
import {
  
  DiMsqlServer,
  DiHtml5,
  DiCss3,
  DiPostgresql,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiDotnet,
  DiGithubBadge,
} from "react-icons/di";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faJira } from '@fortawesome/free-brands-svg-icons';
import Reveal from "./Reveal";

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: '.NET', icon: <DiDotnet className='text-blue-500' /> },
      { name: 'PostgreSQL', icon: <DiPostgresql className='text-white-600' /> },
      { name: 'SQLServer', icon: < DiMsqlServer  className='text-white-600' /> }
    ],
  },
  {
    category: 'Collaboration Tools',
    technologies: [
      { name: 'Git Hub', icon: <DiGithubBadge className='text-green-500' /> },
      { name: 'Figma', icon: <FontAwesomeIcon icon={faFigma} size="1x" className="text-purple-500" /> },
      { name: 'Jira', icon: <FontAwesomeIcon icon={faJira} size="1x" className="text-blue-500" /> },
    ],
  }
];

const Skills = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          
        Full Stack Development: Proficient in frontend backend ,database entegrations and more... I create visually appealing interfaces and scalable solutions
        </p>
        <p className="text-center mb-8">

          I worked on various frontend and fullstack projects. Check them<a  > <Link to="portfolio" smooth={true} offset={50} duration={500} className="underline">there</Link></a>.
        </p>

        <div className="flex flex-col md:flex-row flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 }} 
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-[29%] mx-1"
            >
              <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-gray-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
