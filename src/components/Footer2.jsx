"use client"
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Footer2 = () => {
  const portfolioRef = useRef(null);

  useGSAP(() => {
    const letters = portfolioRef.current.querySelectorAll('.letter');

    gsap.fromTo(
      letters,
      { y: '70%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: 'top 90%',
          end: 'top 56%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <footer ref={portfolioRef} className="bg-[#3d0000] text-[#fff] py-16 px-4 md:px-20">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-bold mb-8">
          {/* Split each letter into a span and add a gap after "SAY" */}
          {'SAY'.split('').map((letter, index) => (
            <span key={index} className="letter inline-block">{letter}</span>
          ))}
          <span className="inline-block">&nbsp;</span> {/* This adds a space between "SAY" and "HELLO!" */}
          {'HELLO!'.split('').map((letter, index) => (
            <span key={index} className="letter inline-block">{letter}</span>
          ))}
        </h1>
        <div className="border-t border-[#fff] pt-8 flex flex-col md:flex-row justify-between">
          <div className="mb-8 flex flex-col w-auto md:w-1/2 md:mb-0">
            <p className="text-lg mb-4">
              TRANSFORMING IDEAS INTO IMPACTFUL PRODUCTS. LET&apos;S COLLABORATE ON YOUR NEXT INNOVATION!
            </p>
            <button className="flex items-center justify-center px-6 py-2 border md:w-1/3 border-[#ffffff83] rounded hover:bg-[#000] outline-none hover:text-white transition-all">
              CONTACT ME
              <span className="ml-2">&rarr;</span>
            </button>
          </div> 
          <div className="flex justify-between gap-0 p-2 px-7 md:px-4 md:justify-end md:gap-2">
            <div className="flex border-r-0 px-2 md:px-5 border-l flex-col">
              <span className="font-bold mb-2">[MENU]</span>
              <a href="#about" className="mb-1 hover:scale-105 transition-all">
                ABOUT ME
              </a>
              <a href="#projects" className="hover:scale-105 transition-all">
                WORK
              </a>
              <a href="#skills" className="hover:scale-105 transition-all">
                SKILLS
              </a>
            </div>
            <div className="flex border-l px-2 md:px-5 flex-col">
              <span className="font-bold mb-2">[CONTACT]</span>
              <Link
                target="_blank"
                href="mailto:ajabbar1234@gmail.com"
                className="mb-1 hover:scale-105 transition-all"
              >
                EMAIL
              </Link>
              <Link
                target='_blank'
                href="https://www.linkedin.com/in/ahmed-jabbar-1bb113209/"
                className="mb-1 hover:scale-105 transition-all"
              >
                LINKEDIN
              </Link>
              <Link href="https://github.com/ajabbar17" target='_blank' className="mb-1 hover:scale-105 transition-all">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
