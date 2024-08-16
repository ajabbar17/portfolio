"use client"
import React, { useEffect, useState } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { RiNextjsFill, RiFirebaseFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { gsap } from 'gsap';
import Circle, { Circle2, Circle3 } from './Circle';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { name: 'Next.js', icon: <RiNextjsFill /> },
    { name: 'React.js', icon: <FaReact className='text-blue-500' /> },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion className='text-blue-500' /> },
    { name: 'Node.js', icon: <FaNodeJs className='text-green-500' /> },
    { name: 'MongoDB', icon: <BiLogoMongodb className='text-green-500' /> },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql className='text-[#316192]' /> },
    { name: 'Firebase', icon: <RiFirebaseFill className='text-[#F5820B]'/> },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".service-item",
      { x: '-200%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'bounce.out',
        stagger: 0.2, // Adds stagger
        scrollTrigger: {
          trigger: ".service-item",
          start: 'top 70%',
          toggleActions: "play none none none",
        },
        clearProps: 'all' // Clear all applied properties after animation completes

      }
    );
  }, []);

  return (
    <div id='skills' className="bg-black border border-[#ffffff24] mx-5 mb-14 overflow-hidden text-white relative flex gap-3 flex-col md:flex-row py-10 p-5 md:p-10 rounded-3xl">
      <Circle/>
      <Circle3/>

      <div className="md:text-left mb-5 md:mb-10 z-30 text-center w-auto md:w-1/2">
        <h3 className="uppercase text-3xl md:text-5xl font-semibold">Skills</h3>
        <h1 className="text-xl md:text-3xl font-bold">
          There is a lot I can do - Here is a few
        </h1>
      </div>
      <div className="flex flex-wrap z-40 w-auto overflow-hidden md:py-3  md:px-5 md:w-1/2 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item gap-2 items-center flex w-full justify-between border border-[#fff4]  rounded-full p-4 hover:scale-105 transition-all duration-200"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center z-40">
              <span className="text-3xl mr-4">{service.icon}</span>
              <p className="text-lg font-medium">{service.name}</p>
            </div>
            <div
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                hoveredIndex === index ? 'bg-white' : 'bg-[#22120A]'
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
