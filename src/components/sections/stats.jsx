'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { formatNumber } from '../../lib/utils';
import { ArrowUpRight  } from 'lucide-react';

const stats = [
  { label: 'Websites build', value: 200, suffix: '+' },
  { label: 'Team members', value: 34, suffix: '+' },
  
];
const stats1 = [
  
  { label: 'Client satisfaction', value: 99, suffix: '%' },
  { label: 'Amazing clients', value: 100, suffix: '+' },
];

function Counter({ targetValue, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <span>
      {formatNumber(count)}{suffix}
    </span>
  );
}

export default function Stats() {
  // Static content without admin panel dependency
  const title = "Why us? Numbers that showcase our success";
  const subtitle = "Founded in 2018, Corpnix is your trusted tech partner. We're all about quality and user-centric services. Our talented team crafts visually stunning websites that offer seamless experiences. Plus, we're SEO pros, boosting your online visibility.";
  const button_text = "Read More";
  
  // Static stats
  const statsArray = [
    { label: 'Websites build', value: 200, suffix: '+' },
    { label: 'Team members', value: 34, suffix: '+' },
    { label: 'Client satisfaction', value: 99, suffix: '%' },
    { label: 'Amazing clients', value: 100, suffix: '+' }
  ];
  
  const firstHalf = statsArray.slice(0, Math.ceil(statsArray.length / 2));
  const secondHalf = statsArray.slice(Math.ceil(statsArray.length / 2));

  return (
    <section className="pb-12 sm:pb-16 md:pb-24 bg-[#221F4D]">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16 justify-center bg-[#141136] rounded-2xl">
            {/* Left Section */}
            <div className="w-full lg:w-auto lg:max-w-md xl:max-w-lg flex-shrink-0 mb-6 lg:mb-0">
              <div className="space-y-4 md:space-y-5 text-center lg:text-left">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] rounded-full border-3 md:border-4 border-[#F9F9FA] flex items-center justify-center mx-auto lg:mx-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#F9F9FA] font-[var(--font-inter)] leading-tight">
                  {title}
                </h2>
                
                {/* Description */}
                <p className="text-sm md:text-base text-[#F9F9FA] font-[var(--font-inter)] leading-relaxed opacity-90">
                  {subtitle}
                </p>
                
                {/* Button */}
                <button className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 md:px-[22px] md:py-[14px] bg-[#F9F9FA] text-[#27272A] rounded-full font-[var(--font-inter)] text-sm font-medium hover:bg-white/90 transition-colors shadow-md hover:shadow-lg">
                  {button_text} <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
            
            {/* Right Section - Stats Grid */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center lg:mt-0 w-full sm:w-auto">
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-5">
                {firstHalf.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="animated-border rounded-xl"
                  >
                    <div className="animated-border-content p-4 sm:p-5 md:p-6 lg:p-8">
                    <div className="flex flex-col items-center text-center space-y-1 md:space-y-2">
                      <div className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#F9F9FA] font-[var(--font-inter)] leading-tight">
                        <Counter targetValue={stat.value} suffix={stat.suffix} />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-[20px] font-bold text-[#F9F9FA] font-[var(--font-inter)] leading-normal tracking-[0.025em]">
                        {stat.label}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-[#F9F9FA] font-[var(--font-inter)] leading-relaxed opacity-75">
                        {stat.description || 'Lorem ipsum dolor sit amet consectetur adipiscing elit'}
                      </p>
                      </div>
                   </div>
                </motion.div>
                ))}
              </div>
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-0 sm:mt-0">
                {secondHalf.map((stat, index) => (
                  <motion.div
                  key={index + firstHalf.length}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="animated-border rounded-xl"
                >
                  <div className="animated-border-content p-4 sm:p-5 md:p-6 lg:p-8">
                    <div className="flex flex-col items-center text-center space-y-1 md:space-y-2">
                      <div className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#F9F9FA] font-[var(--font-inter)] leading-tight">
                        <Counter targetValue={stat.value} suffix={stat.suffix} />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-[20px] font-bold text-[#F9F9FA] font-[var(--font-inter)] leading-normal tracking-[0.025em]">
                        {stat.label}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-[#F9F9FA] font-[var(--font-inter)] leading-relaxed opacity-75">
                        {stat.description || 'Lorem ipsum dolor sit amet consectetur adipiscing elit'}
                      </p>
                    </div>
                  </div>
                </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}