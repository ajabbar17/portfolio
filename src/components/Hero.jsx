"use client"
import React, { useRef } from 'react';
import GridPattern from '@/components/magicui/AnimatedGrid';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import WordPullUp from './magicui/Word';

const Hero = () => {
  const elementsRef = useRef([]);


  useGSAP(() => {
    gsap.from(elementsRef.current, {
      y: 200,
      opacity: 0,
      duration: 1,
      delay:0.5,
      ease: 'power3.out',
      stagger: 0.6,
    });
  }, []);

  return (
    <div className="relative flex-col flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
     <div className='overflow-hidden w-full md:w-[67.5%]'>

      <h1
        ref={(el) => elementsRef.current.push(el)}
        className="z-50 whitespace-pre-wrap uppercase text-center md:text-start w-full text-2xl  md:text-5xl font-bold tracking-wide text-[#ECFB5C]"
        >
        Hi! I&apos;m a
      </h1>
          </div>
          <div className='overflow-hidden'>

      <h1
        ref={(el) => elementsRef.current.push(el)}
        className="z-10 whitespace-pre-wrap uppercase text-center text text-4xl md:text-9xl font-bold tracking-wide text-[#ECFB5C]"
        >
        Front-End
      </h1>
          </div>
          <div className='overflow-hidden'>

      <h1
        ref={(el) => elementsRef.current.push(el)}
        className="z-10 whitespace-pre-wrap uppercase text-center text text-4xl md:text-9xl font-bold tracking-wide text-[#ECFB5C]"
        >
        Developer
      </h1>
      
    </div>
    <div className='overflow-hidden'>

      <h1
        ref={(el) => elementsRef.current.push(el)}
        className="z-10 whitespace-pre-wrap uppercase text-center text text-4xl md:text-5xl font-bold tracking-wide text-white"
        >
        Based in Lahore
      </h1>
          </div>
      <GridPattern
        numSquares={30}
        maxOpacity={0.4}
        duration={3}
        repeatDelay={0.5}
        className={cn(
          '[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] z-0',
        )}
      />
    </div>
  );
};

export default Hero;
