import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function FloatingNavbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <motion.nav
      className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 sm:py-3 shadow-2xl border border-white/30 mx-3 sm:mx-0 max-w-[calc(100vw-1.5rem)] sm:max-w-none"
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
      <div className="flex items-center justify-between space-x-3 sm:space-x-8">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-1 sm:space-x-2 text-white font-bold text-lg sm:text-xl cursor-pointer touch-target"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/CommuNav.png"
            alt="CommuScale Logo"
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
            loading="eager"
          />
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            CommuScale
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
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

        {/* Book Now Button */}
        <motion.a
          href="https://calendly.com/comunkn/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-purple-600 px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-sm hover:bg-purple-50 transition-colors duration-200 flex items-center space-x-2 sm:space-x-2 touch-target"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar size={16} className="sm:w-4 sm:h-4" />
          <span className="whitespace-nowrap">Book Now</span>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 mt-2 bg-gradient-to-r from-purple-600/95 to-pink-600/95 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          height: isMobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 space-y-3">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block text-white/90 hover:text-white transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
