"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";



export const TextRevealByWord = ({
  text,
  className,
}) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[140vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex px-5 text-center  h-[50%] max-w-6xl items-start  bg-transparent  py-[3rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-2 text-base font-normal  text-white/20 md:p-8 md:text-3xl lg:p-5  "
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};



const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5 ">
      <span className={"absolute opacity-30 "}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={" dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
