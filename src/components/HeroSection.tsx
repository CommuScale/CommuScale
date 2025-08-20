import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    // Throttle resize events for better performance
    let timeoutId: number;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(checkMobile, 200);
    };

    checkMobile();
    window.addEventListener('resize', throttledResize, { passive: true });
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-start justify-center relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-12 lg:pb-16">
      {/* Static Gradient Background - CSS Only */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient" />
      
      {/* Simplified Background Effects - Only show on desktop */}
      {!isMobile && (
        <div className="absolute inset-0">
          {/* Single Background Orb - CSS Animation Only */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 sm:space-y-10">
          {/* Main Headline - Simplified Animation */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-2 sm:px-0 fade-in">
              <span className="block mb-3 sm:mb-4">
                How You Can
              </span>
              <span className="block mb-3 sm:mb-4">
                Make{' '}
                <span className="gradient-text animate-gradient">
                  $100k+ Monthly
                </span>
              </span>
              <span className="block mb-3 sm:mb-4">
                with{' '}
                <span className="gradient-text animate-gradient">
                  CommuScale
                </span>
              </span>
            </h1>
          </div>

          {/* VSL Section - Simplified */}
          <div className="mt-2 sm:mt-4">
            <div className="relative max-w-full mx-auto px-4 sm:px-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group border border-white/20 shadow-xl transform transition-transform hover:scale-[1.01] active:scale-[0.99] touch-target">
                {/* Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 touch-target transform group-hover:scale-105">
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white ml-1 sm:ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

                {/* Video Info */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Case Study: $0 to $1.2M in 8 Months</h3>
                  <p className="text-gray-300 text-sm sm:text-base block">See how we transformed a local business into a market leader</p>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/50 px-3 sm:px-3 py-1 sm:py-1 rounded-full text-white text-sm sm:text-sm">
                  12:34
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - CSS Animation Only */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
