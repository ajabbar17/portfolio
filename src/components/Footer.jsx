"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const portfolioRef = useRef(null);

  useGSAP(() => {
    const letters = portfolioRef.current.querySelectorAll('.letter');

    gsap.fromTo(
      letters,
      { y: '70%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        stagger: 0.09,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: portfolioRef.current,

          start: 'top 80%', // Start when the top of the footer is 75% from the top of the viewport
          end: 'top 60%', // End when the top of the footer is 30% from the top of the viewport
          scrub: true,
        },
      }
    );

    
  }, []);

  return (
    <div             ref={portfolioRef}
    className='w-full items-center  justify-center flex overflow-hidden  pb-16'>
      <footer className="bg-[#3d0000] w-[94%] md:h-80 flex justify-center items-center md:w-[85%] py-8 rounded-3xl">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse rounded-lg">
          <h1
            className="text-white text-4xl md:text-5xl lg:text-9xl font-semibold text-center"
          >
            {'PORTFOLIO'.split('').map((letter, index) => (
              <span key={index} className="letter inline-block">
                {letter}
              </span>
            ))}
          </h1>
          <div className="flex w-full px-1 gap-2 md:px-32 py-3 justify-between uppercase">
            <p className="text-white text-xs md:text-lg uppercase hover:scale-105 transition-all hover:text-slate-300">
              Ahmed Jabbar
            </p>
            <Link href="https://www.linkedin.com/in/ahmed-jabbar-1bb113209/" target='_blank' className="text-white text-xs md:text-lg hover:scale-105 transition-all hover:text-slate-300">
              LinkedIn
            </Link>
            <Link href="https://github.com/ajabbar17" target='_blank' className="text-white text-xs md:text-lg uppercase hover:scale-105 transition-all hover:text-slate-300">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
