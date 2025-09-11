"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Projects({ limit = null }) {
  // Static projects without admin panel dependency
  const staticProjects = [
    {
      title: "E-commerce Platform",
      client: "TechStore Inc.",
      description: "A comprehensive e-commerce platform built with modern technologies, featuring seamless user experience, secure payment processing, and advanced inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg"
    },
    {
      title: "Healthcare App",
      client: "MediCare Solutions",
      description: "A revolutionary healthcare application that connects patients with doctors, enabling remote consultations, prescription management, and health tracking.",
      technologies: ["React Native", "Firebase", "AWS", "Telemedicine"],
      image: "/project2.jpg"
    },
    {
      title: "Real Estate Portal",
      client: "PropertyHub",
      description: "An innovative real estate platform that simplifies property search, virtual tours, and transactions for buyers, sellers, and agents.",
      technologies: ["Next.js", "PostgreSQL", "Mapbox", "Stripe"],
      image: "/project3.jpg"
    }
  ];

  const title = "Our Projects";
  const subtitle = "An Experience design agency building high-end products and experiences that grow your business exponentially.";

  // Limit projects if limit prop is provided (for home page)
  const displayProjects = limit ? staticProjects.slice(0, limit) : staticProjects;

  const projectTitles = displayProjects.map(project => project.title);

  const [activeTitle, setActiveTitle] = useState(projectTitles[0] || "");
  const [activeProject, setActiveProject] = useState(displayProjects[0] || {});
  const [isLoading, setIsLoading] = useState(false);

  // Update active project when title changes with delay
  const handleTitleChange = (title) => {
    setIsLoading(true);
    
    setTimeout(() => {
      const selectedProject = displayProjects.find(project => project.title === title);
      if (selectedProject) {
        setActiveProject(selectedProject);
      }
      setActiveTitle(title);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    // Initialize active project on mount
    if (displayProjects.length > 0) {
      const firstProject = displayProjects[0];
      setActiveProject(firstProject);
      setActiveTitle(firstProject.title || "");
    }
  }, [limit]); // Only re-run when limit changes

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4">
          

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {projectTitles.map((title) => (
              <button
                key={title}
                onClick={() => handleTitleChange(title)}
                className={`relative pb-2 text-sm sm:text-base font-medium transition-colors duration-300 ${
                  activeTitle === title
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {title}
                {activeTitle === title && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
          {/* All Projects Button */}
          <a 
            href="/projects"
            className="px-6 sm:px-8 py-3 font-medium rounded-full bg-[#3c359e] text-white hover:bg-[#3c359e]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#3c359e]/30"
          >
            All Projects
          </a>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className="space-y-4">
            {isLoading ? (
              /* Skeleton Loader */
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded-full w-32 animate-pulse"></div>
              </div>
            ) : (
              <div>
                <p className="text-lg sm:text-xl text-gray-600 font-medium mb-2">
                  {activeProject.title}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  {activeProject.client}
                </h3>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {(activeProject.technologies || []).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-l from-gray-700 to-gray-800 text-gray-50 text-sm font-medium rounded-full "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {activeProject.description}
                </p>
                {/* Read More Button */}
                <button className="px-6 sm:px-8 py-3 bg-[#3c359e] text-white font-medium rounded-full hover:bg-[#3c359e]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#3c359e]/30 transform active:scale-95">
                  Read More <ArrowRight className="inline-block ml-2" height={20} width={20} />
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Auto Scrolling Image */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg">
            {isLoading ? (
              /* Image Skeleton */
              <div className="h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-200 animate-pulse rounded-2xl"></div>
            ) : (
              <div className="h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                <div className="auto-scroll-container">
                  <Image
                  src={activeProject.image || "/placeholder-project.jpg"}
                  alt={`${activeProject.title || 'Project'} - ${activeProject.client || 'Client'}`}
                  width={800}
                  height={1600}
                  className="w-full h-full object-cover rounded-2xl"
                />
                </div>
                 </div>
               )}
             </div>
              <style jsx>{`
                .auto-scroll-container {
                  animation: autoScroll 15s linear infinite;
                  transform: translateY(0);
                }
                
                @keyframes autoScroll {
                  0% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-30%);
                  }
                  100% {
                    transform: translateY(0);
                  }
                }
                
                .auto-scroll-container:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
          </div>
      
    </section>
  );
}