import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Preloader from './Preloader';
import ScrollColorTransition from './ScrollColorTransition';
import FloatingNavbar from './FloatingNavbar';
import HeroSection from './HeroSection';
import ProcessSection from './ProcessSection';
import BookCallSection from './BookCallSection';

import SmoothScrolling from './SmoothScrolling';
import LazyLoad from './LazyLoad';
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
            <LazyLoad>
              <ProcessSection />
            </LazyLoad>
            <LazyLoad>
              <BookCallSection />
            </LazyLoad>
          </main>
          
          {/* Footer */}
          <footer className="relative z-10 bg-gradient-to-br from-purple-900/20 via-slate-900/40 to-pink-900/20 backdrop-blur-xl py-12 sm:py-16 border-t border-purple-500/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {/* Company Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/CommuNav.png"
                      alt="CommuScale Logo"
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                      style={{
                        filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 24px rgba(147, 51, 234, 0.4)) drop-shadow(0 0 36px rgba(59, 130, 246, 0.2))',
                      }}
                      loading="lazy"
                    />
                    <h3 
                      className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.5)) drop-shadow(0 0 16px rgba(147, 51, 234, 0.5)) drop-shadow(0 0 24px rgba(34, 211, 238, 0.3))',
                      }}
                    >
                      CommuScale
                    </h3>
                  </div>
                                    <div className="text-sm leading-relaxed max-w-sm space-y-3 font-serif">
                    <p className="text-gray-300 italic leading-6 text-sm">
                      <em>Imagine waking up to</em>{' '}
                      <span className="text-white font-medium not-italic text-sm">new sales</span>
                      , <em>a</em>{' '}
                      <span className="text-white font-medium not-italic text-sm">growing audience</span>
                      , <em>and a</em>{' '}
                      <span className="text-white font-medium not-italic text-sm">loyal community</span>
                      {' '}— <em>all on</em>{' '}
                      <span className="text-white font-medium italic text-sm">autopilot</span>.
                    </p>
                    <p className="text-gray-200 font-medium text-sm italic leading-6">
                      <em>That's what</em>{' '}
                      <span className="text-white font-bold not-italic text-sm">we build</span>
                      {' '}<em>for</em>{' '}
                      <span className="text-white font-bold not-italic text-sm">you</span>.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">Contact Us</h4>
                    <a 
                      href="mailto:commuscale@gmail.com" 
                      className="text-purple-300 hover:text-purple-200 transition-colors duration-200 text-sm flex items-center space-x-2"
                    >
                      <span>📧</span>
                      <span>commuscale@gmail.com</span>
                    </a>
                  </div>
                </div>
                
                {/* Quick Navigation */}
                <div className="space-y-6">
                  <h4 className="text-white font-semibold">Quick Links</h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a 
                        href="#home" 
                        className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center space-x-2"
                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        <span>🏠</span>
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#process" 
                        className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span>⚡</span>
                        <span>Our Process</span>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#book-call" 
                        className="text-gray-300 hover:text-purple-300 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span>📅</span>
                        <span>Book Strategy Call</span>
                      </a>
                    </li>

                  </ul>
                </div>
                
                {/* Our 4-Step Process */}
                <div className="space-y-6">
                  <h4 className="text-white font-semibold">Growth Process</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="text-gray-300 flex items-center space-x-2">
                      <span className="text-purple-400 font-bold">1.</span>
                      <span>Strategy Call</span>
                    </li>
                    <li className="text-gray-300 flex items-center space-x-2">
                      <span className="text-purple-400 font-bold">2.</span>
                      <span>Market Deep-Dive</span>
                    </li>
                    <li className="text-gray-300 flex items-center space-x-2">
                      <span className="text-purple-400 font-bold">3.</span>
                      <span>Build & Implement</span>
                    </li>
                    <li className="text-gray-300 flex items-center space-x-2">
                      <span className="text-purple-400 font-bold">4.</span>
                      <span>Launch & Scale</span>
                    </li>
                  </ul>
                  
                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href="https://calendly.com/comunkn/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
                    >
                      <span>📞</span>
                      <span>Book Free Call</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-purple-500/20 mt-12 pt-8 text-center">
                <p className="text-gray-400 text-sm">
                  © 2024 CommuScale. All rights reserved. Growth That PAYS. 
                </p>
              </div>
            </div>
          </footer>
        </SmoothScrolling>
      )}
    </div>
  );
}
