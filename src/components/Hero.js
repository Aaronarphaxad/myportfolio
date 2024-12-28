"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NextImage from 'next/image'; 
import heroImage from '@/assets/images/hero-image.webp';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  const roles = [
    "Fullstack Developer",
    "System Administrator",
    "DevOps Engineer",
    "Tech Support Specialist"
  ];

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-60 md:pt-0 pt-10">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 md:pt-40 pb-12 md:pb-20">
          {/* Main Content */}
          <div className="font-inter text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Transforming Ideas into{' '}
                <span className="text-blue-600">Digital Solutions</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <p className="text-xl md:text-2xl text-gray-600 mb-2">
                  Hi, I'm Aaron
                </p>
                <div className="h-8 md:h-10">
                  {isMounted && (
                    <motion.p
                      key={currentRole}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-lg md:text-xl text-blue-600 font-semibold"
                    >
                      {roles[currentRole]}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0"
              >
                Specializing in building robust web applications, maintaining system infrastructure,
                and providing exceptional technical support to drive business success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Link 
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  View My Work
                </Link>
              </motion.div>
            </div>

            {/* Hero Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="hidden md:block md:w-1/2"
            >
              <div className="relative w-full h-[500px]">
                {/* Hexagonal clip path background */}
                <div 
                  className="absolute inset-0 bg-blue-100/50 -z-10 transform translate-x-4 translate-y-4"
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                  }}
                />
                {/* Image container with hexagonal clip path */}
                <div 
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                  }}
                >
                  <NextImage
                    src={heroImage}
                    alt="Aaron Omale"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Updated Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center md:text-left"
          >
            <p className="text-sm text-gray-500 mb-4">TECH STACK</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {/* Languages */}
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">JavaScript</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Python</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Java</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">PHP</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Bash</span>
              </div>

              {/* DevOps Tools */}
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Docker</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Kubernetes</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Ansible</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">AWX</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Jenkins</span>
              </div>

              {/* Monitoring & OS */}
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Prometheus</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Grafana</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Linux</span>
              </div>

              {/* Cloud & Infrastructure */}
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">AWS</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Terraform</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Git</span>
              </div>

              {/* Web Technologies */}
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">React</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-gray-600">Node.js</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}