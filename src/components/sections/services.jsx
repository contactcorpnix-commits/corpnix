'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Services = () => {
  // Static content without admin panel dependency
  const content = {
    title: "What We Do",
    subtitle: "Explore our range of offering, from web developement to digital marketing, we&apos;re here to help you succeed.",
    digital_marketing_title: "Digital Marketing",
    digital_marketing_description: "Transform your online presence with our comprehensive digital marketing strategies. We help businesses reach their target audience, increase brand awareness, and drive meaningful engagement across all digital channels.",
    development_title: "Development",
    development_description: "Build powerful, scalable digital solutions with our expert development services. From custom web applications to mobile apps, we create technology that drives your business forward.",
    digital_marketing_services: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting"
    ],
    development_services: [
      "Web Development",
      "Mobile App Development",
      "E-commerce Solutions",
      "CMS Development",
      "API Integration",
      "UI/UX Design"
    ],
    cta_text: "View All"
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden z-10">
      <div className='absolute top-0 right-0 -z-1 pointer-events-none opacity-30 sm:opacity-0 lg:opacity-40 md:w-[70vw]'>
        <svg width="1118" height="1331" viewBox="0 0 1118 1331" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1363.54" height="1182.3" rx="200" transform="matrix(-0.777146 -0.62932 0.610356 -0.792127 980 1412)" fill="#e1e5f5"/>
</svg>

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B3C3F] mb-3 sm:mb-4 font-[var(--font-inter)] leading-tight">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-[#434349] max-w-3xl mx-auto font-[var(--font-inter)] leading-relaxed px-4">
            {content.subtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-[#3c359e] text-white rounded-full font-[var(--font-inter)] hover:bg-[#524ac9] transition-colors duration-300 mt-6"
          >
            {content.cta_text}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Digital Marketing Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B3C3F] mb-4 sm:mb-6 font-[var(--font-inter)] leading-tight">
                {content.digital_marketing_title}
              </h3>
              <p className="text-base text-[#434349] font-[var(--font-inter)] leading-relaxed">
                {content.digital_marketing_description}
              </p>
            </div>
            
            {/* Services List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {content.digital_marketing_services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#3c359e]/30 hover:bg-[#3c359e]/5 hover:shadow-md cursor-pointer transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ rotate: 90 }}
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-[#3c359e] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-all duration-300"
                  >
                    <ArrowRight className="w-3 h-3 text-white" />
                  </motion.div>
                  <span className="text-sm font-medium text-[#3B3C3F] font-[var(--font-inter)] group-hover:text-[#3c359e] transition-colors duration-300">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/services1.jpg" 
                alt="Digital Marketing"
                className="w-full h-auto rounded-2xl object-cover"
                width={600}
                height={400}
              />
            </div>
          </motion.div>
        </div>

        {/* Development Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/services1.jpg" 
                alt="Development"
                className="w-full h-auto rounded-2xl object-cover"
                width={600}
                height={400}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B3C3F] mb-4 sm:mb-6 font-[var(--font-inter)] leading-tight">
                {content.development_title}
              </h3>
              <p className="text-base text-[#434349] font-[var(--font-inter)] leading-relaxed">
                {content.development_description}
              </p>
            </div>
            
            {/* Services List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {content.development_services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#3c359e]/30 hover:bg-[#3c359e]/5 hover:shadow-md cursor-pointer transition-all duration-300"
                >
                  <motion.div 
                    
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-[#3c359e] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-all duration-300"
                  >
                    <ArrowRight className="w-3 h-3 text-white" />
                  </motion.div>
                  <span className="text-sm font-medium text-[#3B3C3F] font-[var(--font-inter)] group-hover:text-[#3c359e] transition-colors duration-300">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );}

export default Services;