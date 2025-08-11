import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollColorTransition() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Transform scroll progress to color values
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      'rgb(15, 23, 42)', // slate-900
      'rgb(88, 28, 135)', // purple-800
      'rgb(147, 51, 234)', // purple-600
      'rgb(168, 85, 247)' // purple-500
    ]
  );

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.1, 0.3, 0.5, 0.7]
  );

  if (!mounted) return null;

  return (
    <>
      {/* Background Color Transition */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ backgroundColor }}
      />
      
      {/* Gradient Overlay */}
      <motion.div
        className="fixed inset-0 z-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
        style={{ opacity: overlayOpacity }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 150, -150, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </>
  );
}
