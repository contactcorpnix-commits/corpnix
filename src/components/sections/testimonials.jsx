"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const defaultTestimonials = [
  {
    id: 1,
    author: "Arlene McCoy",
    title: "VP of Sales at Sales Force",
    rating: 5,
    content: "corpnix did a fantastic job of building a client portal for me. She showed great initiative from the beginning, creating a brief to meet my needs and offered clear guidance and support throughout, clearly communicating at all times. Would highly recommend!",
    avatar: "/placeholder-avatar-1.jpg"
  },
  {
    id: 2,
    author: "Ronald Richards",
    title: "CEO at TechCorp",
    rating: 5,
    content: "Working with corpnix has been an absolute pleasure. Their attention to detail and commitment to delivering high-quality work is unmatched. The client portal they built exceeded all our expectations.",
    avatar: "/placeholder-avatar-2.jpg"
  },
  {
    id: 3,
    author: "Esther Howard",
    title: "Marketing Director at Innovate",
    rating: 5,
    content: "The team at corpnix transformed our digital presence completely. Their strategic approach and technical expertise delivered results beyond what we thought was possible. Highly recommended!",
    avatar: "/placeholder-avatar-3.jpg"
  },
  {
    id: 4,
    author: "Cameron Williamson",
    title: "Product Manager at Scale",
    rating: 5,
    content: "Exceptional service from start to finish. corpnix understood our requirements perfectly and delivered a solution that not only met but exceeded our business objectives.",
    avatar: "/placeholder-avatar-4.jpg"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, cardBgColor }) => {
  return (
    
    <div className={`p-8 shadow-sm max-h-120 h-[400px] rounded ${cardBgColor.includes('bg-') ? cardBgColor : ''}`} style={{ backgroundColor: !cardBgColor.includes('bg-') ? cardBgColor : undefined }}>
      <div className="flex items-center mb-4">
        <StarRating rating={testimonial.rating} />
      </div>
      
      <p className="text-white text-lg leading-relaxed mb-6">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500 font-semibold">
            {testimonial.author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-white">{testimonial.author}</h4>
          <p className="text-sm text-white">{testimonial.title}</p>
        </div>
      </div>
    
    </div>
  );
};

export default function Testimonials({ 
  bgColor = "#221F4D",
  cardBgColor = "#35327D",
  title = "What our clients have to say",
  subtitle = "Discover how we've helped businesses transform their digital presence and achieve remarkable results through our innovative solutions."
}) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Static testimonials without admin panel dependency
  const testimonials = defaultTestimonials;

  return (
    <section className={`py-20 ${bgColor.includes('bg-') ? bgColor : ''}`} style={{ backgroundColor: !bgColor.includes('bg-') ? bgColor : undefined }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-10">
            <button 
              className={`testimonial-prev rounded p-2 shadow-lg transition-colors ${
                isBeginning ? 'bg-gray-600 cursor-not-allowed' : 'hover:bg-gray-50 bg-white'
              }`}
              disabled={isBeginning}
            >
              <ChevronLeft className={`w-5 h-5 text-gray-700 ${isBeginning ? 'text-white' : 'text-gray-600'}`} />
            </button>
            <button 
              className={`testimonial-next  rounded p-2 shadow-lg transition-colors ${
                isEnd ? 'bg-gray-600 cursor-not-allowed' : 'hover:bg-gray-50 bg-white'
              }`}
              disabled={isEnd}
            >
              <ChevronRight className={`w-5 h-5 text-gray-700 ${isEnd ? 'text-white' : 'text-gray-600'}`} />
            </button>
          </div>
          {/* Pagination Dots */}
          <div className="testimonial-pagination flex justify-center items-center gap-2 mb-8 mt-8"></div>
          
        {/* Testimonial Slider */}
        <div className="relative">           <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onInit={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} cardBgColor={cardBgColor} />
              </SwiperSlide>
            ))}
          </Swiper>

          

           </div>
      </div>

      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background-color: #fff;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          background-color: #fff;
          width: 48px;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          :global(.testimonial-prev),
          :global(.testimonial-next) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}