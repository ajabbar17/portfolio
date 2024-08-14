"use client";
import React, { useRef, useEffect } from "react";
import TextRevealByWord from "./magicui/TextReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",  
        end: "top 50%",    
        toggleActions: "play none none none",  
      },
    });
  }, []);

  return (
    <div className="bg-black py-20" id="about">
      <div className="overflow-hidden">
        <h1 ref={ref} className="text-[#ECFB5C] text-4xl md:text-8xl text-center">
          About me
        </h1>
      </div>
      <div className="z-10 flex items-center justify-center dark:bg-black">
        <TextRevealByWord text="Hi there! I&apos;m Ahmed Jabbar, a web developer in love with animated, polished, and dynamic sites that not only look good but ensure seamless user experiences. My skills in GSAP and Framer Motion enable me to animate designs with smooth, interactive animations that enchant users. I&apos;m passionate about crafting visually stunning websites that leave a deep and lasting impression on users." />
      </div>
    </div>
  );
};

export default About;
