import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-start justify-center relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-12 lg:pb-16">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        animate={{
          background: [
            'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
            'linear-gradient(135deg, #1e1b4b 0%, #7c3aed 50%, #1e1b4b 100%)',
            'linear-gradient(135deg, #312e81 0%, #8b5cf6 50%, #312e81 100%)',
            'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Animated Background Effects - Reduced for mobile performance */}
      <div className="absolute inset-0">
        {/* Floating Background Orbs - Simplified for mobile */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, 50, -25, 0],
            y: [0, -25, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-pink-500/20 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, -50, 25, 0],
            y: [0, 25, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"
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

        {/* Gradient Overlay Animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Particle Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-2 sm:px-0">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block mb-3 sm:mb-4"
              >
                How You Can
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block mb-3 sm:mb-4"
              >
                Make{' '}
                <span 
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'gradient-slide 8s ease-in-out infinite',
                  }}
                >
                  $100k+ Monthly
                </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block mb-3 sm:mb-4"
              >
                with{' '}
                <span 
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'gradient-slide 6s ease-in-out infinite',
                  }}
                >
                  CommuScale
                </span>
              </motion.span>
            </h1>


          </div>

          {/* VSL Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-2 sm:mt-4"
          >


            <div className="relative max-w-full mx-auto px-4 sm:px-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="relative aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group border border-white/20 shadow-2xl touch-target"
                style={{ boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.25)' }}
              >
                {/* Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 touch-target"
                  >
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white ml-1 sm:ml-1" fill="currentColor" />
                  </motion.div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

                {/* Video Info */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Case Study: $0 to $1.2M in 8 Months</h3>
                  <p className="text-gray-300 text-sm sm:text-base block">See how we transformed a local business into a market leader</p>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/50 backdrop-blur-lg px-3 sm:px-3 py-1 sm:py-1 rounded-full text-white text-sm sm:text-sm">
                  12:34
                </div>
              </motion.div>
            </div>


          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
