"use client"

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects, projectCategories } from '@/data/data';
import { useState, useEffect } from 'react';


// SKELETON CARD
function SkeletonProjectCard() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      {/* Skeleton Image */}
      <div className="h-64 bg-gray-200 animate-pulse" />
      
      {/* Skeleton Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          {/* Title */}
          <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse" />
          {/* Icons */}
          <div className="flex gap-3">
            <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

// LOADING SKELETON
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-4" />
          <div className="h-6 w-96 max-w-full bg-gray-200 rounded animate-pulse mx-auto" />
        </div>

        {/* Filter Buttons Skeleton */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
        </div>

        {/* Projects Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <SkeletonProjectCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}


// PORTFOLIO PAGE
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  if (!isMounted) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my work in infrastructure automation, system administration,
            and web development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full bg-white shadow-sm hover:shadow-md 
                         transition-all duration-300
                         ${activeCategory === category 
                           ? 'text-blue-600 bg-blue-50' 
                           : 'text-gray-700 hover:text-blue-600'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}