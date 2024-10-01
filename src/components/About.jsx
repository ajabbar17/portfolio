"use client";
import React, { useRef, useEffect } from "react";
import TextRevealByWord from "./magicui/TextReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  useGSAP(() => {
    const letters = ref2.current.querySelectorAll('.letter');
    console.log(letters)

    gsap.fromTo(
      letters,
      { y: '70%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        stagger: 0.4,
        ease: 'circ.out',
        scrollTrigger: {
          trigger: ref2.current,
          start: 'top 50%', // Start when the top of the footer is 75% from the top of the viewport
          end: 'top 20%', // End when the top of the footer is 30% from the top of the viewport
          scrub: true,
        },
      }
    );
    // gsap.from(ref.current, {
    //   y: 200,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power3.out",
    //   stagger: 0.3,
    //   scrollTrigger: {
    //     trigger: ref.current,
    //     start: "top 80%",  
    //     end: "top 50%",    
    //     toggleActions: "play none none none",  
    //   },
    // });
  }, []);

  return (
    <div className="bg-black py-20" id="about">
      <div className="overflow-hidden">
        <h1 ref={ref2} className="text-[#ECFB5C]    text-4xl md:text-8xl text-center">
        {'ABOUT'.split('').map((letter, index) => (
              <span key={index} className="letter  inline-block">
                {letter}
              </span>
            ))}
              <span className="inline-block">&nbsp;</span> {/* This adds a space between "SAY" and "HELLO!" */}

            {'ME'.split('').map((letter, index) => (
              <span key={index} className="letter inline-block">
                {letter}
              </span>
            ))}
        </h1>
      </div>
      <div className="z-10 flex items-center justify-center dark:bg-black">
        <TextRevealByWord text="Hi there! I&apos;m Ahmed Jabbar, a web developer in love with animated, polished, and dynamic sites that not only look good but ensure seamless user experiences. My skills in GSAP and Framer Motion enable me to animate designs with smooth, interactive animations that enchant users. I&apos;m passionate about crafting visually stunning websites that leave a deep and lasting impression on users." />
      </div>
    </div>
  );
};

export default About;
