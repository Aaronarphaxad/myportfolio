"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent Successfully");
        toast.success(data.message);
        e.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
      setResult("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      href: 'mailto:omale.aaron@gmail.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      href: 'https://github.com/Aaronarphaxad',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/aaron-omale-7bb6b5156/',
      color: 'hover:text-blue-700'
    },
    {
      name: 'Twitter',
      icon: <FiTwitter className="w-6 h-6" />,
      href: 'https://twitter.com/Arphaxad09',
      color: 'hover:text-blue-400'
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 font-inter">
        <div className="max-w-7xl mx-auto">
          {/* Loading skeleton */}
          <div className="text-center mb-16">
            <div className="h-12 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-4" />
            <div className="h-6 w-96 max-w-full bg-gray-200 rounded animate-pulse mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="h-10 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 bg-gray-200 rounded animate-pulse" />
                <div className="h-32 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-6" />
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a question or want to work together? I'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-6 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-blue-200/50 hover:-translate-y-0.5
                      ${isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {result === "Sending...." && (
                    <p className="text-gray-600 text-center">Sending...</p>
                  )}
                  {result === "Message sent Successfully" && (
                    <p className="text-green-600 text-center">Message sent successfully!</p>
                  )}
                  {result === "Failed to send message" && (
                    <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect With Me
                </h2>
                
                <div className="space-y-8">
                  {/* Social Links */}
                  <div className="flex flex-wrap gap-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-600 transition-colors ${link.color}`}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>

                  {/* Additional Information */}
                  <div className="prose prose-blue">
                    <p className="text-gray-600">
                      I'm always interested in hearing about new projects and opportunities.
                      Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                    
                    <p className="text-gray-600 mt-4">
                      Based in: <span className="font-medium">Vancouver, BC</span>
                    </p>

                    <p className="text-gray-600">
                      Response time: <span className="font-medium">Within 24 hours</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}