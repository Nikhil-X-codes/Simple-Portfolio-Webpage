
import { FaGithub, FaGraduationCap, FaCogs, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState, useEffect } from "react";
import './index.css'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg z-50 w-full text-white py-3"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold">Nikhil Nagar</div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-2xl focus:outline-none transition-colors duration-300 ${
            isOpen ? "text-red-500" : "text-white"
          }`}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {isOpen && (
          <div className="absolute top-12 right-0 w-48 bg-blue-600 rounded-lg shadow-md flex flex-col items-start p-4 space-y-2">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="w-full text-left px-2 py-2 hover:bg-blue-700 rounded transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="w-full text-left px-2 py-2 hover:bg-blue-700 rounded transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
            <Link
              to="links"
              smooth={true}
              duration={500}
              className="w-full text-left px-2 py-2 hover:bg-blue-700 rounded transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Profile Links
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="w-full text-left px-2 py-2 hover:bg-blue-700 rounded transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center py-16 bg-gray-100 w-full"
    >
      <motion.img 
        src='/myimage.jpg' 
        alt="Profile"
        className="w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full border-4 border-gray-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
      />
      <h1 className="text-3xl sm:text-5xl font-bold text-blue-700 mt-6">Hello World!</h1>
      <h3 className="text-xl sm:text-3xl text-gray-600">NIKHIL NAGAR</h3>
    </motion.section>
  );
};

export const Projects = () => {
  const projects = [
    { id: 1, image: '/healthcart.jpg', title: 'Healthcart', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/Nikhil-X-codes/Healthcart', live: 'https://nikhil-x-codes.github.io/Healthcart/' },
    { id: 2, image: '/portfilio.jpg', title: 'Personal Portfolio', tech: ['HTML', 'CSS', 'JavaScript', 'React'], github: 'https://github.com/Nikhil-X-codes/Personal-Portfolio-Webpage', live: 'https://rococo-zuccutto-68a605.netlify.app/' },
    { id: 3, image: '/fitgym.png', title: 'FitGym Life', tech: ['HTML', 'CSS'], github: 'https://github.com/Nikhil-X-codes/FitLife-Gym', live: 'https://nikhil-x-codes.github.io/FitLife-Gym/' },
  ];

  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="py-16 bg-white w-full"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-700">Projects</h1>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            whileHover={{ scale: 1.1 }} 
            className="card"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <div className="links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <span className="icon">&#x1F517;</span>
              </a>
            </div>
            <div className="tech-list">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export const About = () => {
  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      className="py-12 bg-gray-50 w-full"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">About Me</h1>
      <div className="container mx-auto px-6">
        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="card bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <div className="icon-section flex items-center mb-4">
            <FaGraduationCap className="icon mr-2 text-blue-600" />
            <h2 className="card-title text-xl font-semibold">Education</h2>
          </div>
          <ul className="info-list space-y-2">
            <li><strong>B.Tech, IIIT Sonepat</strong> | IT | 2023-27</li>
            <li><strong>Class 12, Shiv Jyoti International School</strong> | 2023 | Score: 80%</li>
            <li><strong>Class 10, Shiv Jyoti International School</strong> | 2021 | Score: 82%</li>
          </ul>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="card bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <div className="icon-section flex items-center mb-4">
            <FaCogs className="icon mr-2 text-blue-600" />
            <h2 className="card-title text-xl font-semibold">Skills</h2>
          </div>
          <div className="skills flex flex-wrap gap-2">
            {["C", "C++", "HTML/CSS", "MySQL", "MongoDB", "Java", "JavaScript", "React"].map((skill, index) => (
              <span key={index} className="skill bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }} 
          className="card bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <h2 className="card-title text-xl font-semibold mb-4">Extra-Curricular Activities</h2>
          <div className="extra-activities space-y-2">
            <div><strong>🏆 Represented U-14 State Level in Football (Rajasthan)</strong></div>
            <div><strong>🧠 NTSE Stage-1 Qualified</strong></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};


export const Links = () => {
  const profiles = [
    { name: 'Leetcode', link: 'https://leetcode.com/u/nagarn2005/' },
    { name: 'Codolio', link: 'https://codolio.com/profile/J6G0HHGi' },
    { name: 'GFG', link: 'https://www.geeksforgeeks.org/user/nikhilngrnik007/' },
    { name: 'Github', link: 'https://github.com/Nikhil-X-codes' },
  ];

  return (
    <motion.section id="links" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="py-12 w-full">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">Links</h1>
      <ul className="text-center">
        {profiles.map((profile, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1 }}>
            <a href={profile.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm sm:text-lg">{profile.name} 🔗</a>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="py-16 bg-gray-200 w-full"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Contact</h1>
      <div className="flex justify-center gap-6 mt-6">
        <motion.a whileHover={{ scale: 1.2 }} href="mailto:nagarn2005@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-3xl sm:text-4xl text-gray-700 hover:text-red-500" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/nikhil-nagar-7a527928b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl sm:text-4xl text-gray-700 hover:text-blue-500" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/nik_ngr05/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl sm:text-4xl text-gray-700 hover:text-pink-500" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="https://x.com/NIKHILNAGA8208" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl sm:text-4xl text-gray-700 hover:text-blue-500" />
        </motion.a>
      </div>
    </motion.section>
  );
};

