"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WebDevelopment from './components/WebDevelopment';
import SearchEngineOptimization from './components/SearchEngineOptimization';
import SearchEngineMarketing from './components/SearchEngineMarketing';
import SocialMediaMarketing from './components/SocialMediaMarketing';
import EmailMarketing from './components/EmailMarketing';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('web-development');

  const tabs = [
    { id: 'web-development', label: 'Web Development', component: WebDevelopment },
    { id: 'seo', label: 'SEO', component: SearchEngineOptimization },
    { id: 'sem', label: 'SEM', component: SearchEngineMarketing },
    { id: 'social-media', label: 'Social Media', component: SocialMediaMarketing },
    { id: 'email-marketing', label: 'Email Marketing', component: EmailMarketing },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Services Hero Section and Tabs */}
      <section className="bg-gradient-to-b from-[#0A0822] to-[#221F4D] text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            
          </div>
          
          {/* Tab Navigation */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <Swiper
              slidesPerView="auto"
              spaceBetween={4}
              navigation={false}
              pagination={false}
              breakpoints={{
                320: {
                  slidesPerView: 2.2,
                  spaceBetween: 4,
                },
                375: {
                  slidesPerView: 2.5,
                  spaceBetween: 6,
                },
                640: {
                  slidesPerView: 3.2,
                  spaceBetween: 8,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 12,
                },
              }}
              className="py-8 md:py-10"
            >
              {tabs.map((tab) => (
                <SwiperSlide key={tab.id} className="w-full">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full px-2 py-2 md:px-3 md:py-2.5 text-[10px] xs:text-xs sm:text-sm font-medium transition-colors duration-200 rounded-full text-center whitespace-nowrap overflow-hidden ${
                      activeTab === tab.id
                        ? 'bg-white text-black shadow-lg'
                        : 'bg-[#232057] text-white hover:bg-[#232057]/90'
                    }`}
                  >
                    <span className="block truncate">{tab.label}</span>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Active Service Component */}
      <section className="">
        <div className="max-w-7xl mx-auto">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </section>
    </div>
  );
}