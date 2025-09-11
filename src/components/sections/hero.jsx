'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = ({ section }) => {
  // Static content - no admin panel dependency
  const heroData = {
    title: 'Have an Idea?',
    subtitle: 'we made Reality',
    description: 'Corpnix Your IT Solutions Partner. With innovation at our core, we transform ideas into impactful solutions. Let\'s craft your digital success story together.',
    primary_cta_text: 'Get Started',
    primary_cta_url: '#contact',
    secondary_cta_text: 'View Project',
    secondary_cta_url: '#portfolio',
    hero_image_url: '/hero.png',
    background_image_url: null
  };

  return (
    <motion.section 
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0A0822] to-[#221f4d] pb-10"
      style={{
        backgroundImage: heroData.background_image_url 
          ? `url(${heroData.background_image_url})` 
          : 'linear-gradient(to bottom, #0A0822, #221f4d)'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-0 md:top-90 pointer-events-none opacity-20 sm:opacity-30 md:opacity-40 w-32 h-40 md:w-44 md:h-52 lg:w-32 lg:h-auto"
      >
        <svg className="w-full h-full" viewBox="0 0 179 214" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="56.3906" y="25.8828" width="100" height="100" rx="10" transform="rotate(-15 56.3906 25.8828)" fill="#35327D"/>
          <rect x="72.5625" y="163.469" width="54.9798" height="51.8444" rx="10" transform="rotate(-15 72.5625 163.469)" fill="#35327D"/>
          <rect y="127.617" width="40.0895" height="41.0212" rx="10" transform="rotate(-15 0 127.617)" fill="#35327D"/>
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 items-center justify-center"
          style={{
            transform: `translateZ(0)`,
          }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-4 sm:space-y-6 lg:w-1/2 w-full max-w-full lg:max-w-1/2">
            <div className="space-y-4 sm:space-y-6 relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute -rotate-30 -top-3 -left-10 sm:-top-5 sm:left-8 md:-left-13 -z-10 pointer-events-none opacity-20 sm:opacity-30 md:opacity-40 w-12 h-12 sm:w-16 sm:h-16 md:w-32 md:h-auto"
              >
                <svg className="w-full h-full" viewBox="0 0 76 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M69 25.5C69 39.5833 57.8071 51 44 51C30.1929 51 19 39.5833 19 25.5C19 11.4167 30.1929 0 44 0C57.8071 0 69 11.4167 69 25.5ZM35.3056 25.5C35.3056 30.3978 39.1982 34.3682 44 34.3682C48.8018 34.3682 52.6944 30.3978 52.6944 25.5C52.6944 20.6022 48.8018 16.6318 44 16.6318C39.1982 16.6318 35.3056 20.6022 35.3056 25.5Z" fill="#35327D"/>
                  <path d="M18 72C18 76.9706 13.9706 81 9 81C4.02944 81 0 76.9706 0 72C0 67.0294 4.02944 63 9 63C13.9706 63 18 67.0294 18 72ZM5.30002 72C5.30002 74.0434 6.95656 75.7 9 75.7C11.0434 75.7 12.7 74.0434 12.7 72C12.7 69.9566 11.0434 68.3 9 68.3C6.95656 68.3 5.30002 69.9566 5.30002 72Z" fill="#35327D"/>
                  <circle cx="68.5" cy="55.5" r="7.5" fill="#35327D"/>
                </svg>
              </motion.div>
              <motion.h1 
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F9F9FA] leading-tight font-[var(--font-inter)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}>
                <span className="inline-block">{heroData.title}</span>
                <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl block mt-1">
                  {heroData.subtitle}
                </span>
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-[#F9F9FA]/90 leading-relaxed font-[var(--font-inter)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}>
                {heroData.description}
              </motion.p>
            </div>

            {/* Features */}
            <motion.div 
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}>
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 bg-[#32D583] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3333 1L5 8.33333L1.66667 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-[#F9F9FA] font-[var(--font-inter)] leading-relaxed">Have an idea contact us</p>
              </div>
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 bg-[#32D583] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white font-[var(--font-inter)]">2</span>
                </div>
                <p className="text-sm sm:text-base text-[#F9F9FA] font-[var(--font-inter)] leading-relaxed">We develop fast, perfectly responsive websites.</p>
              </div>
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 bg-[#32D583] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white font-[var(--font-inter)]">3</span>
                </div>
                <p className="text-sm sm:text-base text-[#F9F9FA] font-[var(--font-inter)] leading-relaxed">We design intuitive web & mobile apps.</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 md:mt-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}>
              <motion.a
                href={heroData.primary_cta_url}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-[#32D583] text-white rounded-full font-[var(--font-inter)] font-medium hover:bg-[#6CE9A6] transition-colors duration-300 hover:outline hover:outline-2 hover:outline-[#32D583] transition-all duration-300 text-sm sm:text-base"
              >
                {heroData.primary_cta_text}
                {console.log(heroData)}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
              <motion.a
                href={heroData.secondary_cta_url}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 border border-gray-500 text-white rounded-full font-[var(--font-inter)] font-medium hover:bg-[#524ac9] transition-colors duration-300 text-sm sm:text-base"
              >
                {heroData.secondary_cta_text}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            className="relative mt-8 lg:mt-0 lg:w-1/2 w-full sm:w-full"
            style={{
              transform: `translateZ(50px)`,
            }}>
            <motion.div 
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}>
                <div className="relative w-full sm:max-w-full md:max-w-3/4 lg:max-w-lg xl:max-w-xl">
                    <Image
                      src={heroData.hero_image_url || '/hero.png'}
                      alt="Hero Image"
                      width={800}
                      height={500}
                      className="w-full h-auto rounded-lg"
                      priority
                    />
                </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;