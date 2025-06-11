import React from 'react'

import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillFacebook,
    AiFillInstagram,
} from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer className="py-8" id="contact">
        <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex items-center justify-between flex-col md:flex-row">
                <div className="">
                    <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
                    Get in <span className="text-gray-400">touch</span>
                    </h2>
                    <a href="mailto:ebunowoeye316@gmail.com" className="md:text-6xl text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300">ebunowoeye316.com</a>
                </div>

                <div className="text-white/50 mt-12">
                <div className="mb-8">
                    <p className="text-lg mb-1">Phone</p>

                    <a href="+2348148580526" className="text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-400 transition duration-300">+234-8148580526</a>
                </div>

                <div className="text-lg mb-8">
                    <p className="font-bold">Office</p>
                    <p>Street  00 000</p>
                    <p>Universe 1</p>
                    <p>Earth</p>
                </div>
                </div>
            </div>

           <div className="relative z-10 text-center mt-8 py-12">
            <h1 className="hidden md:block text-[10rem] md:text-[10rem] lg:text-[10rem] font-bold text-white opacity-10">
                EBUNOWOEYE
            </h1>

            <h1 className="md:hidden relative text-6xl md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
                EBUN
                <br />
                OWOEYE
            </h1>
           </div>
            
            <div className="relative nt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="text-gray-200 caption text-n-4 lg:block">
                    ©️ 2025. All rights reserved
                </p>

                <ul className="flex gap-5 flex-wrap">
                    <a href="https://github.com/Ebunx" 
                    aria-label='GitHub'
                    className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full">
                        <AiFillGithub size={10}/>
                    </a>
                </ul>
            </div>


        </div>
        </footer>  
    </>
  )
}

export default Footer