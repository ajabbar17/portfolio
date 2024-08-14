"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Circle, { Circle2 } from './Circle';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const data = [
    {
      id: 1,
      title: "Nebula Capital",
      link: "https://nebula-capital.vercel.app/",
      imgsrc: "/nebula.png"
    },
    {
      id: 2,
      title: "Phillie-BOP",
      link: "https://ajabbar17.github.io/Phillie-BOP/",
      imgsrc: "/pb.png"
    },
    {
      id: 3,
      title: "Smart Stay",
      link: "https://www.linkedin.com/posts/ahmed-jabbar-1bb113209_webdevelopment-pernstack-expressjs-activity-7228075740666208256-tYNp?utm_source=share&utm_medium=member_desktop",
      imgsrc: "/ss.png"
    },
  ];

  return (
    <div className='h-screen w-full relative flex  md:flex-col bg-[#000] pb-6 ' >
      <Circle/>
        <Circle2/>
            <div className='w-full flex md:flex-row flex-col gap-0 md:gap-5 px-8 pt-3 ' id='main' style={{ overflow: 'hidden' }}>
        <div id='left' className='w-full z-40  md:w-1/2 flex items-center  justify-center relative h-1/4 md:h-[70%]'>
          {data.map((project, index) => (
            <div
              key={project.id}
              className={`absolute ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'} w-1/2 transition-opacity duration-300`}
              style={{
                willChange: 'opacity',
                // marginTop: `${index * 70}px`, // Increase margin based on index
              }}
            >
              <Image src={project.imgsrc}  alt={project.title} width={500} height={500} />
            </div>
          ))}
        </div>
        <div id='right' className='z-40' style={{ height: '100%' }}>
          {data.map((project) => (
            <div
              key={project.id}
              className='text-white z-40 justify-center items-center mt-9 border-r-0 hover:scale-105 transition-all border-l-0 px-1 text-center md:px-5 py-4 border border-slate-400'
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <a target='_blank' rel='noopener noreferrer' href={project.link}>
                <h1 className='text-3xl md:text-6xl text-[#ECFB5C]'>{project.title}</h1>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;




