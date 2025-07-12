import React from 'react';

const StickyCards = () => {
  const projects = [
    {
      id: 1,
      title: "PHOTON",
      description: "Photon – Developed a modern, responsive portfolio website for Photon, a company specializing in smart building and sustainable energy solutions.",
      tech: ["Next.js", "Tailwind-CSS", "GSAP"],
      image: "photon picture.png"
    },
    {
      id: 2,
      title: "MYORAH",
      description: "Developed a full-featured e-commerce store for a jewelry brand, enabling customers to browse and purchase products with ease. Integrated a custom CMS using Sanity for dynamic product management.",
      tech: ["Next.js", "Tailwind-CSS", "Sanity", "Firebase"],
      image: "myorahpic.png"
    },
    {
      id: 3,
      title: "Design on Demand",
      description: "Portfolio website for a digital agency to showcase their identity and stand out in the market. The website contains different pages for each service they are providing and show the projects they have currently completed.",
      tech: ["Next.js", "Tailwind-CSS", "GSAP", "Framer-Motion","Locomotive"],
      image: "dod picture.png"
    },
    {
      id: 4,
      title: "Fitness App",
      description: "Developed a feature-rich fitness platform using Next.js and Express.js, focusing on health tracking, workout routines, and nutrition analysis.",
      tech: ["Next.js", "PostgreSQL", "JWT", "Express.js"],
      image: "fitnesspic.png"
    }
  ];

  const cardColors = [
    'from-purple-600/20 to-blue-600/20',
    'from-blue-600/20 to-indigo-600/20',
    'from-indigo-600/20 to-violet-600/20',
    'from-violet-600/20 to-purple-800/20'
  ];

  return (
    <div className="min-h-screen mb-36 bg-black py-12">
      <div className="relative flex flex-col max-w-7xl gap-6 mx-auto px-4" style={{ height: '2440px' }}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`w-full box-border h-screen sm:h-auto sm:min-h-[500px] rounded-3xl sticky backdrop-blur-xl border border-white/10 shadow-2xl bg-gradient-to-br bg-white/10 hover:bg-gradient-to-br hover:from-white/5 hover:to-white/0 transition-all duration-300`}
            style={{ 
              top: `${50 + index * 30}px`,
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-center justify-center">
              {/* Left Column - Project Details */}
              <div className="flex-1 space-y-4 sm:space-y-6 w-full">
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#ECFB5C] leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#ECFB5C]">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 sm:px-4 sm:py-2 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-white border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column - Project Image */}
              <div className="flex-1 w-full max-w-full lg:max-w-xl">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyCards;