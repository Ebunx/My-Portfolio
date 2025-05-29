"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars only on the client
    const newStars = Array.from({ length: 50 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      animationDuration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      // Scrolls to the element, then removes the hash
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, document.title, window.location.pathname);
      }
    }
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen text-white bg-black">
      {/* Twinkling Stars */}
      <div className="absolute inset-0 stars-container pointer-events-none z-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white opacity-70 animate-twinkle"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.width}px`,
              height: `${star.height}px`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>

      {/* Earth-like Radial Background Glow */}
      <div
        className="absolute w-[2400px] h-[1200px] rounded-[50%] left-1/2 -translate-x-1/2 top-[450px] border-[1px] border-[#4eb5ff]/30 z-10"
        style={{
          background:
            "radial-gradient(closest-side, #1a2639 60%, #3fa796 80%, #6ccff6 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative mx-auto px-4 pt-12 pb-24 z-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8 mt-4"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent rounded-full blur-3xl" />
            <img src="/profilepic.png" alt="Profile Picture" className="w-[250px] z-10" />
          </motion.div>

         <div>
          <motion.div
            initial={{ opacity: 0, y: 0.9, scale: 0.1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-4"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
              Hi, I am <br /> Ebun <span className="text-green-500">Owoeye</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              I am a fullstack developer focusing on creating websites that provide users with the best experience.
            </p>
          </motion.div>


            {/* <div className="flex gap-4 justify-center">
           
            <a className="cursor-pointer px-6 py-3 bg-green-500 rounded-full font-medium hover:bg-sky-600 transition-colors"    href="#contact"   target="_blank"
            rel="noopener noreferrer">
             
             Contact Me       
             
              </a>
      

              <a href="#portfolio" className="cursor-pointer">
              <div 
                className="px-6 py-3 border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                View Work
              </div>
              </a>
            </div> */}
            
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-xl"
        />
      </div>
    </div>
  );
}
