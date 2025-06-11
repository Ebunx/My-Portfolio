"use client"
import React from 'react'
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import {FaGit, FaGithub, FaGitHub} from 'react-icons/fa'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {FiChevronDown} from 'react-icons/fi' 

const projects = [
  // {
  //   title:"Eccomerce Digital Products",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem neque nostrum distinctio rerum nisi, qui odio. Beatae, facere deleniti.",
  //   devstack: "MongDB, Express, React, Node.js",
  //   link: "#",
  //   git:"#",
  //   src: "proj1.jpg",
  //   type:"fullstack"
  // },
  // {
  //   title:"Eccomerce Landing Page",
  //   desc: "CaseStudy.",
  //   devstack: "MongDB, Express, React, Node.js",
  //   link: "#",
  //   git:"#",
  //   src: "proj1.jpg",
  //   type:"fullstack"
  // },
  // {
  //   title:"Travel  Buddy",
  //   desc: "Travel Buddy is a full-stack travel companion web application designed to help users discover new destinations, plan personalized trips, and track visited locations",
  //   devstack: "React, Tailwind, MongoDB, Express, Nodejs",
  //   link: "https://travelbuddy-mauve.vercel.app/",
  //   git:"https://github.com/ReactLlord/Travelbuddy",
  //   src: "/travelbuddy.png",
  //   type:"FullStack"
  // },
  {
    title:"Findash",
    desc: "A dashboard for a fintech product that allows users to track their finances, investments, savings, and other related information. (Login with any email and password)",
    devstack: "React, Typescript",
    link: "https://find-ash.vercel.app/login",
    git:"https://github.com/Ebunx/Travelbuddy",
    src: "/findash.png",
    type:"FullStack"
  },
  {
    title:"Ecommerce Store",
    desc: "A fully responsive, feature-rich eCommerce platform built with React and Tailwind CSS. This project showcases dynamic, user-friendly shopping experiences, from browsing products to completing purchases.",
    devstack: "React, Tailwind, React-toastify",
    link: "https://ecommerce-website-w3p2.vercel.app/",
    git:"https://github.com/Ebunx/Ecommerce-website/blob/main/package.json",
    src: "/Ecommerce.png",
    type:"frontend"
  },
  {
    title:"Real Estate Landing Page",
    desc: "Real Estate Landing Page is a modern, responsive web page designed to showcase property listings and attract potential buyers or renters. Built with React, it features a clean layout, smooth scroll animations, CTA sections, and property highlights to ensure a seamless browsing experience. The design emphasizes clarity and conversion, making it perfect for real estate agencies or personal portfolio projects..",
    devstack: " React, Tailwind, Framer Motion",
    link: "https://real-estate-landing-page-smoky-eta.vercel.app/",
    git:"https://github.com/Ebunx/Real-estate-landing-page",
    src: "Real-estate-landingpage.png",
    type:"frontend"
  },
  {
    title:"Netflix Clone",
    desc: "Netflix Clone is a full-featured streaming platform replica built with React and Firebase, designed to mirror the sleek interface and functionality of Netflix. It includes user authentication, real-time database integration, responsive design, and dynamic movie listings fetched from the TMDB API. With smooth navigation, hover effects, and a clean UI, the app delivers an engaging streaming experience.",
    devstack: "NextJS, React, Tailwind, Firebase",
    link: "https://netflix-clone-omega-peach.vercel.app/",
    git:"https://github.com/Ebunx/NETFLIX-CLONE",
    src: "/Netflix-clone.png",
    type:"frontend"
  },
  {
    title:"Crypto App",
    desc: "CryptoPlace is a modern, React-powered crypto dashboard that delivers real-time market data, price tracking, and insights for top cryptocurrencies. Built with a sleek, responsive design, CryptoPlace offers a smooth user experience, live charts, and detailed coin information to help users stay informed and make smarter decisions in the ever-changing crypto world..",
    devstack: "React, Tailwind, Api",
    link: "https://cryptoplace-gilt.vercel.app/",
    git:"https://github.com/Ebunx/Cryptoplace",
    src: "/crypto-app.png",
    type:"frontend"
  },
  {
    title:"Advanced Notes Taking App",
    desc: "Advanced Notes Taking Application.",
    devstack: "React, Tailwind, Typescript",
    link: "https://advanced-notes-app-mocha.vercel.app/",
    git:"https://github.com/Ebunx/Advanced-Notes-App",
    src: "/Notes-App.png",
    type:"frontend"
  },
 
]

const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) =>{
    setExpandedIndex(expandedIndex === index ? null : index);

  }
  
  return (
    <>
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => 
             (
            <motion.div
            key={index}
            initial = {{opacity: 0, y: 20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration: 0.5, delay: index*0.1}}
            className='bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'>
             <div className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
             onClick={()=> toggleExpand(index)}>
              <h3 className="text-4xl text-white font-semibold">{project.title}</h3>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-light text-emerald-300">0{index +1}</span>
                <FiChevronDown className={`w-6 h-6 transform transition-transform ${expandedIndex == index ? "rotate-100":"" }`}/> 
              </div>
             </div>

                <AnimatePresence>
                  {expandedIndex == index && (
                    <motion.div
                    initial = {{height: 0, opacity: 0}}
                    animate={{height: "auto", opacity:1}}
                    exit={{height: 0, opacity: 0}}
                    transition={{duration: 0.3}}
                    className='px-6 pb-6 bg-black/20 border border-white/10'>
                      <div className="flex flex-col md:flex-row gap-8">
                        <img src={project.src} alt={project.title} 
                        className='w-full md:w-1/2 h-64 object-cover rounded-lg'/>
                        <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-emerald-300 font-medium mb-2">Stack: {project.devstack}</p>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">Type: {project.type}</p>

                        <div className="flex justify-start items-center space-x-4">
                        <a href={project.link} className='text-emerald-400 hover:text-blue-300 transition-colors' target="_blank" >
                          <HiOutlineExternalLink/>
                        </a>

                        <a href={project.git} className='text-gray-400 hover:text-gray-300 transition-colors'
                        > 
                        <FaGithub/>
                        </a>
                        </div>
                        </div>
                 
                </div>
              </motion.div>
            )}
          </AnimatePresence>
            </motion.div>
            )
          )}
        </div>
      </div>

      
    </div>
        
    </>
  )
}

export default Portfolio