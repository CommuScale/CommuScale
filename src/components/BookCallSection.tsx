import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function BookCallSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Malik Rafiq',
      company: 'Clothing Brand Founder',
      result: '5→14 sales/month',
      quote: 'We went from 5–6 sales a month to averaging 14. The offer strategy they created made our value crystal clear, and the content plan kept us consistent for the first time ever.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Store Owner',
      result: '$12k→$27k in 4 months',
      quote: 'Our monthly revenue jumped from ~$12k to $27k in under 4 months. The Discord community they built is now our main lead source, people join, hang around, and then buy without us pushing.',
      rating: 5
    },
    {
      name: 'Jayden Navarro',
      company: 'Service Business Owner',
      result: '2x conversion in 8 weeks',
      quote: 'We doubled our lead-to-sale conversion rate in 8 weeks. I\'ve never had such a clear process for bringing in customers, it\'s made my business less stressful and way more predictable.',
      rating: 5
    }
  ];

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (typeof window !== 'undefined' && !window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const benefits = [
    'Free 30-minute strategy session',
    'Custom growth plan for your business',
    'Market analysis and competitor insights',
    'Revenue optimization recommendations',
    'No obligations or sales pressure'
  ];

  return (
    <section id="book-call" className="min-h-[120vh] py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                <span 
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'gradient-slide 8s ease-in-out infinite',
                  }}
                >
                  Book Your Free
                </span>
                <br />
                Strategy Call
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Get a personalized roadmap to scale your business to 7-figures. No fluff, just actionable strategies you can implement immediately.
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">What You'll Get:</h3>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            

                              {/* Testimonial Carousel */}
                 <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.8 }}
                   viewport={{ once: true }}
                   className="mt-12 relative"
                 >
                   <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 min-h-[180px] flex flex-col overflow-hidden">
                     <div className="flex-1 relative">
                       <AnimatePresence mode="wait">
                         <motion.div
                           key={currentTestimonial}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.3, ease: "easeInOut" }}
                           className="h-full flex flex-col justify-center px-2"
                         >
                           <div className="flex items-center mb-4">
                             <div className="flex space-x-1">
                               {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                 <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                               ))}
                             </div>
                             <span className="ml-3 text-green-400 text-sm font-semibold">
                               {testimonials[currentTestimonial].result}
                             </span>
                           </div>
                           <p className="text-gray-300 text-base mb-4 leading-relaxed">
                             "{testimonials[currentTestimonial].quote}"
                           </p>
                           <p className="text-gray-400 text-sm">
                             <span className="font-semibold text-white">{testimonials[currentTestimonial].name}</span>, {testimonials[currentTestimonial].company}
                           </p>
                       </motion.div>
                     </AnimatePresence>
                   </div>

                     {/* Carousel Indicators - moved to bottom of container */}
                     <div className="flex justify-center space-x-2 mt-6 pt-4 border-t border-white/10">
                       {testimonials.map((_, index) => (
                         <button
                           key={index}
                           onClick={() => setCurrentTestimonial(index)}
                           className={`w-2 h-2 rounded-full transition-all duration-300 ${
                             index === currentTestimonial 
                               ? 'bg-purple-500 w-6' 
                               : 'bg-gray-600 hover:bg-gray-500'
                           }`}
                         />
                       ))}
                     </div>
                   </div>
                 </motion.div>
           </motion.div>

          {/* Right Column - Booking Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
                         {/* Calendly Widget */}
             <div style={{ height: '901px' }}>
               <iframe
                 src="https://calendly.com/comunkn/30min?embed_type=Inline&embed_domain=localhost&background_color=000000&text_color=ffffff&primary_color=ff00f8"
                 width="100%"
                 height="100%"
                 frameBorder="0"
                 title="Schedule a call with CommuScale"
                 className="rounded-2xl"
                 style={{ overflow: 'hidden' }}
               />
             </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
