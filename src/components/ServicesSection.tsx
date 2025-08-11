import { motion } from 'framer-motion';
import { 
  Rocket, 
  Users, 
  BarChart3, 
  MessageCircle, 
  Target, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Rocket,
      title: 'Business Scaling Strategy',
      description: 'Complete roadmap to scale from startup to 7-figure revenue',
      features: [
        'Market Analysis & Positioning',
        'Revenue Optimization Systems',
        'Growth Funnel Development',
        'Performance Metrics Dashboard'
      ],
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Build engaged communities that convert into loyal customers',
      features: [
        'Community Platform Setup',
        'Engagement Strategy Framework',
        'Automated Member Onboarding',
        'Content Calendar & Moderation'
      ],
      gradient: 'from-pink-600 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Marketing Automation',
      description: 'Automate your marketing to generate leads while you sleep',
      features: [
        'Email Marketing Sequences',
        'Social Media Automation',
        'Lead Nurturing Workflows',
        'CRM Integration & Management'
      ],
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: MessageCircle,
      title: 'Content Strategy',
      description: 'High-converting content that builds authority and drives sales',
      features: [
        'Content Strategy Planning',
        'Video Production & Editing',
        'Copywriting & Sales Pages',
        'SEO Optimization'
      ],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Strategic ad campaigns that deliver predictable ROI',
      features: [
        'Facebook & Instagram Ads',
        'Google Ads Management',
        'LinkedIn B2B Campaigns',
        'Conversion Optimization'
      ],
      gradient: 'from-green-600 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Sales Funnel Optimization',
      description: 'Convert more visitors into paying customers',
      features: [
        'Landing Page Design',
        'A/B Testing Framework',
        'Conversion Rate Optimization',
        'Customer Journey Mapping'
      ],
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="min-h-[120vh] py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradient-slide 10s ease-in-out infinite',
              }}
            >
              Exactly What
            </span>
            <br />
            We Provide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of services is designed to take your business from where it is now to where you want it to be - and beyond.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="h-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Service Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50 flex items-center justify-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                10x Your Business?
              </span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can implement these strategies for your specific business and create a custom growth plan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule Your Strategy Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
