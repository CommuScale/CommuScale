import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // CommuScale Logo Image Component
  const CommuScaleLogo = () => (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <img
        src="/CommuScale.png"
        alt="CommuScale Logo"
        className="w-40 h-40 object-contain"
        style={{
          filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.6))',
        }}
      />
      {/* Fallback gradient circle if image fails to load */}
      <div 
        className="absolute inset-0 w-40 h-40 mx-auto my-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20"
        style={{ display: 'none' }}
      />
    </div>
  );

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div
              className="flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <CommuScaleLogo />
            </motion.div>
            
            {/* Rotating ring around logo */}
            <motion.div
              className="absolute inset-0 w-52 h-52 mx-auto rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.3), transparent)',
                borderRadius: '50%',
                transform: 'translateX(-8px) translateY(-8px)',
                maskImage: 'radial-gradient(circle, transparent 70%, black 72%, black 78%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(circle, transparent 70%, black 72%, black 78%, transparent 80%)'
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span 
            className="bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(to right, #b855f2, #c659fc)',
              backgroundSize: '200% 100%',
              animation: 'gradient-slide 3s ease-in-out infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CommuScale
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-purple-300/80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Scaling Your Success
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
