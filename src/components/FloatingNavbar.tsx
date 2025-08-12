import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function FloatingNavbar() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#book-call' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="hidden md:block fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 sm:py-3 shadow-2xl border border-white/30"
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isHidden ? -100 : 0, 
          opacity: isHidden ? 0 : 1 
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut" 
        }}
      >
        <div className="flex items-center justify-between space-x-8">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 text-white font-bold text-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/CommuNav.png"
              alt="CommuScale Logo"
              className="w-8 h-8 object-contain"
              loading="eager"
            />
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              CommuScale
            </span>
          </motion.div>

          {/* Desktop Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Book Now Button */}
          <motion.a
            href="https://calendly.com/comunkn/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold text-sm hover:bg-purple-50 transition-colors duration-200 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar size={16} />
            <span className="whitespace-nowrap">Book Now</span>
          </motion.a>
        </div>
      </motion.nav>

      {/* Mobile Book Now Button Only */}
      <motion.a
        href="https://calendly.com/comunkn/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed top-4 right-4 z-40 bg-white text-purple-600 px-3 py-2 rounded-full font-semibold text-sm hover:bg-purple-50 transition-colors duration-200 flex items-center space-x-1.5 shadow-lg border border-purple-200/30 backdrop-blur-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ 
          y: isHidden ? -50 : 0, 
          opacity: isHidden ? 0 : 1 
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Calendar size={14} />
        <span className="whitespace-nowrap text-xs">Book Now</span>
      </motion.a>
    </>
  );
}
