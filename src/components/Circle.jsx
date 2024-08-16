"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Circle = () => {
  const ref = useRef(null)

  
  useGSAP(() => {
    const animate = () => {
      gsap.to(ref.current, {
        x: () => Math.random() * 500 - 100, // random x-axis movement
        y: () => Math.random() * 200 - 100, // random y-axis movement
        duration: 3, // duration of each move
        onComplete: animate, // trigger animation again on completion
        yoyo: true, // reverse the animation
        ease: 'sine.out', // smooth ease for the animation
      });
    };

    animate(); // start the animation
  }, []);

  return (
    <div ref={ref} className='md:w-96 h-72 w-72 md:h-96 blur-[68px] absolute top-0 left-0 z-0 bg-[#22120A] rounded-full'  >


    </div>
  )
}

export default Circle



export const Circle2 = () => {

 

  return (
<div   className='md:w-96 h-72 w-72 md:h-96 blur-[72px] absolute bottom-0 md:top-0 right-32 md:right-52  z-0 bg-[#373e11a3] rounded-full'  >


</div>  )
}
export const Circle3 = () => {
  return (
<div  className='md:w-96 h-72 w-72 md:h-96 blur-[72px] absolute bottom-0 md:top-0 right-32 md:right-0  z-0 bg-[#22120A] rounded-full'  >


</div>  )
}
