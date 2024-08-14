import About from "@/components/About";
import Circle from "@/components/Circle";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GridPattern from "@/components/magicui/AnimatedGrid";
import { VelocityScroll } from "@/components/magicui/Scroll";
import { FloatingNavDemo } from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { cn } from "@/lib/utils";


export default function Home() {
  return (
    <main className="bg-black">
      <FloatingNavDemo/>
     <Hero/>
     <About/>
     <Skills/>
     <VelocityScroll className="text-6xl md:text-8xl  py-2 font-bold text-[#ECFB5C] uppercase" text="Projects" />
     <Projects/>
      <Footer/>
      </main>
  );
}
