import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Preloader from './Preloader';
import ScrollColorTransition from './ScrollColorTransition';
import FloatingNavbar from './FloatingNavbar';
import HeroSection from './HeroSection';
import ProcessSection from './ProcessSection';
import BookCallSection from './BookCallSection';

import SmoothScrolling from './SmoothScrolling';
import { useViewportHeight, usePerformanceMonitoring } from './MobileOptimizations';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  // Mobile optimizations
  useViewportHeight();
  usePerformanceMonitoring();

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowMainContent(true);
    }, 100);
  };

  useEffect(() => {
    // Preload critical resources
    const preloadImages = () => {
      // Add any critical images here if needed
      return Promise.resolve();
    };

    preloadImages();
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {showMainContent && (
        <SmoothScrolling>
          {/* Background Color Transition */}
          <ScrollColorTransition />
          
          {/* Navigation */}
          <FloatingNavbar />
          
          {/* Main Content */}
                         <main className="relative z-10">
                 <HeroSection />
                 <ProcessSection />
                 <BookCallSection />
               </main>
          
          {/* Footer */}
          <footer className="relative z-10 bg-slate-900/90 backdrop-blur-lg py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    CommuScale
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Scaling businesses to 7-figures through proven marketing strategies, automation, and community building.
                  </p>
                </div>
                
                {/* Quick Links */}
                                     <div className="space-y-4">
                       <h4 className="text-white font-semibold">Quick Links</h4>
                       <ul className="space-y-2 text-sm">
                         <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                         <li><a href="#process" className="text-gray-400 hover:text-white transition-colors duration-200">Process</a></li>
                         <li><a href="#book-call" className="text-gray-400 hover:text-white transition-colors duration-200">Book Call</a></li>
                       </ul>
                     </div>
                
                {/* Our Process */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">Our Process</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-400">Strategy Call</li>
                    <li className="text-gray-400">Market Deep-Dive</li>
                    <li className="text-gray-400">Build & Implement</li>
                    <li className="text-gray-400">Launch & Scale</li>
                  </ul>
                </div>
                
                {/* Contact */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">Contact</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-400">hello@commuscale.com</li>
                    <li className="text-gray-400">+1 (555) 123-4567</li>
                    <li className="text-gray-400">San Francisco, CA</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-white/10 mt-12 pt-8 text-center">
                <p className="text-gray-400 text-sm">
                  © 2024 CommuScale. All rights reserved. Built with Astro & powered by innovation.
                </p>
              </div>
            </div>
          </footer>
        </SmoothScrolling>
      )}
    </div>
  );
}
