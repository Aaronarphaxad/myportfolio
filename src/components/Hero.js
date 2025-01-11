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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl" />
        
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 border-8 border-gray-200/20 rounded-full"
        />
        
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-20 w-40 h-40 border-4 border-gray-200/20 rounded-full"
        />

        <motion.div
          animate={{
            y: [-10, 10, -10],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/3 w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full opacity-30 blur-sm"
        />
        
        <motion.div
          animate={{
            y: [10, -10, 10],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/3 w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full opacity-30 blur-sm"
        />

        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.07]" viewBox="0 0 100 100">
          <motion.path
            d="M0,50 Q25,25 50,50 T100,50"
            stroke="url(#gradient1)"
            strokeWidth="0.5"
            fill="none"
            animate={{
              d: [
                "M0,50 Q25,25 50,50 T100,50",
                "M0,50 Q25,75 50,50 T100,50",
                "M0,50 Q25,25 50,50 T100,50",
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B0BEC5" />
              <stop offset="100%" stopColor="#CFD8DC" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28">
          <div className="font-inter text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-16">
            <div className="md:w-1/2 order-2 md:order-1 space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight"
              >
                Transforming Ideas into{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Digital Solutions
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-2xl md:text-3xl text-slate-700 font-medium">
                  Hi, I'm Aaron
                </p>
                <div className="h-10">
                  {isMounted && (
                    <motion.p
                      key={currentRole}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="text-xl text-blue-600 font-medium"
                    >
                      {roles[currentRole]}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-slate-600 text-lg leading-relaxed"
              >
                Specializing in building robust web applications, maintaining system infrastructure,
                and providing exceptional technical support to drive business success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
              >
                <Link 
                  href="/contact"
                  className="group bg-blue-600 text-white px-8 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200/50 hover:-translate-y-0.5"
                >
                  Get in Touch
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                    →
                  </span>
                </Link>
                <Link
                  href="/portfolio"
                  className="group backdrop-blur-sm bg-white/80 text-slate-800 px-8 py-3.5 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-slate-200/50 hover:-translate-y-0.5 border border-slate-200/50"
                >
                  View My Work
                  <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="md:w-1/2 order-1 md:order-2"
            >
              <div className="relative w-full h-[350px] md:h-[550px] max-w-[450px] mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-3xl blur-2xl transform " />
                <div className="absolute -inset-4 bg-gradient-to-l from-gray-300/20 to-gray-400/20 rounded-3xl blur-2xl transform " />
                
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300/10 to-gray-400/10 mix-blend-overlay" />
                  
                  <NextImage
                    src={heroImage}
                    alt="Aaron Omale"
                    fill
                    priority
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 via-transparent to-gray-400/20" />

                  <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white/20 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-white/20 rounded-full" />
                  
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 left-0 w-16 h-16"
                  >
                    <div className="absolute top-4 left-4 w-2 h-2 bg-gray-400 rounded-full blur-sm" />
                    <div className="absolute top-8 left-8 w-1 h-1 bg-gray-500 rounded-full blur-sm" />
                  </motion.div>
                </div>

                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg"
                >
                  <div className="w-10 h-10 bg-gray-400/20 rounded-xl flex items-center justify-center">
                    <span className="text-gray-600 text-xl">⚡</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [5, -5, 5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-4 bottom-1/4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg"
                >
                  <div className="w-10 h-10 bg-gray-400/20 rounded-xl flex items-center justify-center">
                    <span className="text-gray-600 text-xl">🚀</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-24 sm:mt-28 lg:mt-32 space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
              <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Technologies</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Development */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-slate-800 font-semibold mb-4">Development</h4>
                <div className="space-y-2.5">
                  {['JavaScript', 'Python', 'Java', 'PHP', 'SQL'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 group/item">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 group-hover/item:scale-125 transition-transform duration-300" />
                      <span className="text-slate-600 group-hover/item:text-blue-600 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* DevOps */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-slate-800 font-semibold mb-4">DevOps</h4>
                <div className="space-y-2.5">
                  {['Docker', 'Kubernetes', 'Ansible', 'Jenkins', 'AWX'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 group/item">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 group-hover/item:scale-125 transition-transform duration-300" />
                      <span className="text-slate-600 group-hover/item:text-green-600 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Infrastructure */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-slate-800 font-semibold mb-4">Infrastructure</h4>
                <div className="space-y-2.5">
                  {['AWS', 'Terraform', 'Linux', 'Windows Server', 'Active Directory'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 group/item">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                      <span className="text-slate-600 group-hover/item:text-purple-600 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Monitoring & Tools */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-200/50 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-slate-800 font-semibold mb-4">Monitoring & Tools</h4>
                <div className="space-y-2.5">
                  {['Prometheus', 'Grafana', 'Git', 'Bash', 'PowerShell'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 group/item">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500 group-hover/item:scale-125 transition-transform duration-300" />
                      <span className="text-slate-600 group-hover/item:text-orange-600 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}