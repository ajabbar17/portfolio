"use client";
import React from "react";
import { FloatingNav } from "./magicui/Navbar";
import { IconHome, IconMessage, IconUser,IconBriefcase2 } from "@tabler/icons-react";
import { FaUserGear } from "react-icons/fa6";


export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 hover:text-black " />,

    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 hover:text-black" />,

    },
    {
      name: "Skills",
      link: "#skills",
      icon: <FaUserGear className="h-4 w-4 hover:text-black" />,

    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconBriefcase2 className="h-4 w-4 hover:text-black" />,

      
    },
  ];
  return (
    <div className="relative  w-full">
        
      <FloatingNav navItems={navItems} />
    </div>
  );
}

