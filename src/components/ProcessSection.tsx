import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Strategy Call – Map the Mission",
      description: "We start with a focused strategy session to understand your vision, your audience, and where the biggest opportunities lie. This is where we pinpoint exactly how CommuScale can help you scale your content and revenue."
    },
    {
      number: 2,
      title: "Market Deep-Dive – Craft the Winning Offer",
      description: "Next, we conduct in-depth market research to identify what your audience craves and how to position you as the go-to solution. We then design a high-ticket offer that not only converts but creates loyal, repeat customers."
    },
    {
      number: 3,
      title: "Build & Implement – Bring the Vision to Life", 
      description: "With the plan in place, we execute. From building a high-converting Discord community and a custom landing page, to delivering your full content blueprint — scripting, editing, thumbnails, and everything in between — we handle it all."
    },
    {
      number: 4,
      title: "Launch & Scale – Turn Momentum Into Mastery",
      description: "Once your system is live, we help you launch, attract the right audience, and scale consistently — so your brand grows, your influence expands, and your offer sells itself."
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate the timeline line
      const timeline = timelineRef.current;
      if (timeline) {
        gsap.fromTo(timeline,
          { height: '0%' },
          {
            height: '100%',
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: 1,
            }
          }
        );
      }

      // Animate each step
      steps.forEach((_, index) => {
        const stepElement = document.querySelector(`[data-step="${index}"]`);
        if (stepElement) {
          gsap.fromTo(stepElement,
            { 
              opacity: 0, 
              y: 50,
              scale: 0.95 
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: stepElement,
                start: 'top 80%',
                end: 'bottom 20%',
                onEnter: () => setActiveStep(index),
                onEnterBack: () => setActiveStep(index),
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="min-h-[120vh] py-32 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Proven{' '}
            <span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradient-slide 10s ease-in-out infinite',
              }}
            >
              4-Step Growth
            </span>
            <br />
            Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach transforms your business from where it is now to sustainable 7-figure success.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 w-0.5 bg-gray-700 h-full">
            <div 
              ref={timelineRef}
              className="w-full bg-gradient-to-b from-purple-500 to-pink-500 origin-top"
              style={{ height: '0%' }}
            />
          </div>

          {/* Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16 md:space-y-20"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                data-step={index}
                className="relative flex items-start group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${
                      activeStep >= index 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                        : 'bg-gray-800 text-gray-400 border-2 border-gray-700'
                    }`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: activeStep >= index 
                        ? '0 0 30px rgba(139, 92, 246, 0.4)' 
                        : '0 0 20px rgba(107, 114, 128, 0.3)'
                    }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Step Content */}
                <div className="ml-8 flex-1 group-hover:translate-x-2 transition-transform duration-300">
                  <motion.div
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/10"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                </div>

                {/* Mobile Timeline Connector */}
                <div className="md:hidden absolute left-8 top-16 w-0.5 h-16 bg-gray-700">
                  {activeStep > index && (
                    <motion.div
                      className="w-full bg-gradient-to-b from-purple-500 to-pink-500"
                      initial={{ height: '0%' }}
                      animate={{ height: '100%' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to{' '}
                <span 
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'gradient-slide 8s ease-in-out infinite',
                  }}
                >
                  Start Your Growth
                </span>{' '}
                Journey?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's begin with Step 1. Book your strategy call today and map out your path to 7-figure success.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Strategy Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
