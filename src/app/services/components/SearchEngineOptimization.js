"use client";
import { Lightbulb, Megaphone, Newspaper, TabletSmartphone, ChartColumnBig, Zap } from 'lucide-react';
import { BiUserCheck ,BiListCheck, BiLogoPython, BiLogoDjango, BiLogoAngular, BiLogoReact, BiLogoPostgresql, BiLogoMongodb , BiLogoFirebase , BiLogoWordpress , BiLogoJoomla , BiLogoTailwindCss, BiLogoHtml5, BiLogoJavascript, BiLogoBootstrap, BiLogoNodejs, BiLogoPhp } from "react-icons/bi";
import { SiRubyonrails } from "react-icons/si";
import { FaRegChartBar } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";

export default function SearchEngineOptimization() {
  const features = [
    {
      icon: <Lightbulb />,
      title: "Custom Development Solutions",
      description: "Tailored web applications built from scratch to meet your unique business requirements, ensuring scalability and performance."
    },
    {
      icon: <Megaphone />,
      title: "Experienced Developers",
      description: "Our team of skilled developers brings years of expertise in modern technologies and best practices to deliver exceptional results."
    },
    {
      icon: <Newspaper />,
      title: "Comprehensive Approach",
      description: "End-to-end development process covering everything from initial planning to deployment and ongoing maintenance."
    },
    {
      icon: <TabletSmartphone />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your website looks and functions perfectly across all devices and screen sizes."
    },
    {
      icon: <ChartColumnBig />,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to improve your search engine rankings and drive organic traffic to your site."
    },
    {
      icon: <Zap />,
      title: "Fast Loading Times",
      description: "Optimized performance with lightning-fast loading speeds to enhance user experience and reduce bounce rates."
    }
  ];
  const technologyStack = [
    {
      icon: <BiLogoHtml5 className='bg-[#F0652A] rounded-full p-3 text-white'/>,
      title: "HTML5 & CSS3",
      description: "Tailored web applications built from scratch to meet your unique business requirements, ensuring scalability and performance."
    },
    {
      icon: <BiLogoJavascript className='bg-amber-300 rounded-full p-3'/>,
      title: "JavaScript",
      description: "Our team of skilled developers brings years of expertise in modern technologies and best practices to deliver exceptional results."
    },
    {
      icon: <BiLogoBootstrap className='bg-[#7635F9] rounded-full p-3 text-white'/>,
      title: "Bootstrap",
      description: "End-to-end development process covering everything from initial planning to deployment and ongoing maintenance."
    },
    {
      icon: <BiLogoTailwindCss className='bg-[#06B6D4] rounded-full p-3 text-white'/>,
      title: "Tailwind CSS",
      description: "End-to-end development process covering everything from initial planning to deployment and ongoing maintenance."
    },
    {
      icon: <BiLogoNodejs className='bg-[#339933] rounded-full p-3 text-white'/>,
      title: "Node.js",
      description: "Mobile-first approach ensuring your website looks and functions perfectly across all devices and screen sizes."
    },
    {
      icon: <BiLogoPhp className='bg-[#777BB4] rounded-full p-3 text-white'/>,
      title: "PHP",
      description: "Built-in SEO best practices to improve your search engine rankings and drive organic traffic to your site."
    },
    {
      icon: <BiLogoPython className='bg-[#3776AB] rounded-full p-3 text-white'/>,
      title: "Python",
      description: "Optimized performance with lightning-fast loading speeds to enhance user experience and reduce bounce rates."
    },
    {
      icon: <SiRubyonrails className='bg-[#CC342D] rounded-full p-3 text-white'/>,
      title: "Ruby on Rails",
      description: "Optimized performance with lightning-fast loading speeds to enhance user experience and reduce bounce rates."
    },
    {
      icon: <BiLogoPostgresql className='bg-[#336791] rounded-full p-3 text-white'/>,
      title: "MySQL & PostgreSQL",
      description: "Optimized performance with lightning-fast loading speeds to enhance user experience and reduce bounce rates."
    },
    {
      icon: <BiLogoReact className='bg-[#61DAFB] rounded-full p-3 text-white'/>,
      title: "React.js & Vue.js",
      description: "Optimized performance with lightning-fast loading speeds to enhance user experience and reduce bounce rates."
    },
    {
      icon: <BiLogoAngular className='bg-[#DD0031] rounded-full p-3 text-white'/>,
      title: "Angular",
      description: "Optimized performance with lightning-fast loading speeds to enhance user experience and reduce bounce rates."
    },
    {
      icon: <BiLogoDjango className='bg-[#092E40] rounded-full p-3 text-white'/>,
      title: "Django & Flask",
      description: "Optimized performance with lightning-fast loading speeds to enhance user experience and reduce bounce rates."
    },
    {
      icon: <BiLogoWordpress className='bg-[#21759B] rounded-full p-3 text-white'/>,
      title: "WordPress",
      description: "Optimized performance with lightning-fast loading speeds to enhance user experience and reduce bounce rates."
    },
    {
      icon: <BiLogoJoomla className='bg-[#FF4D00] rounded-full p-3 text-white'/>,
      title: "Joomla",
      description: "Optimized performance with lightning-fast loading speeds to enhance user experience and reduce bounce rates."
    },
    {
      icon: <BiLogoFirebase className='bg-[#FFCA28] rounded-full p-3 text-white'/>,
      title: "Firebase",
      description: "Optimized performance with lightning-fast loading speeds to enhance user experience and reduce bounce rates."
    },

  ];
  const testingAndAnalytics = [
    {
      icon: <BiListCheck /> ,
      title: "Testing Variations",
      description: "We conduct A/B testing to determine which design elements and content perform best, helping you make data-driven decisions."
    },
    {
      icon: <FaRegChartBar />,
      title: "Detailed Analytics",
      description: "Gain valuable insights into user behavior, traffic sources, and conversion funnels with our detailed analytics tools."
    },
  ];
  const customerSupport = [
    {
      icon: <BiUserCheck /> ,
      title: "Dedicated Account Managers",
      description: "You&apos;ll have a dedicated account manager who understands your business and is available to assist you at every stage of the web development process."
    },
    {
      icon: <CiHeadphones />,
      title: "24/7 Support",
      description: "Our support team is available around the clock to address any issues or questions you may have, ensuring a smooth and stress-free experience."
    },
    {
      icon: <GoDatabase />,
      title: "Secure Hosting",
      description: "We offer secure hosting solutions to protect your website from cyber threats and ensure maximum uptime."
    },
    {
      icon: <LuClipboardList />,
      title: "Regulatory Compliance",
      description: " Our web development services comply with industry standards and regulations, including GDPR, ensuring your website meets all legal requirements."
    },
  ];

  return (
    <div className="relative z-0 overflow-hidden">
      <div className="absolute -top-50 -right-120 w-full h-full -z-50">
        <svg width="1047" height="851" viewBox="0 0 1047 851" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="800" height="1053.7" rx="400" transform="matrix(-0.161985 -0.986793 0.982591 -0.185784 70.5859 918.195)" fill="#EFF2FE"/>
</svg>

      </div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Search Engine Optimization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with cutting-edge web development solutions. We create powerful, scalable, and user-friendly websites that drive business growth and deliver exceptional user experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 flex gap-4">
              <div className="w-16 h-16 flex justify-center mb-6 flex-1/2">
                <span className="text-2xl text-black">{feature.icon}</span>
              </div>
              <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mt-18">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Technology Stack We Use
          </h2>
          <p className="text-center text-gray-600">
            Our advanced web development services are powered by a diverse and robust technology stack
          </p>
        </div>

        {/* Technology Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {technologyStack.map((feature, index) => (
            <div key={index} className="p-8 flex gap-4">
              <div className="w-16 h-16 flex justify-center mb-6 flex-1/2">
                <span className="text-6xl text-black">{feature.icon}</span>
              </div>
              <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full mt-18">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Testing and Analytics
          </h2>
          <p className="text-center text-gray-600">
            Optimize your website&apos;s performance with our A/B testing and analytics services:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testingAndAnalytics.map((feature, index) => (
            <div key={index} className="p-8 flex gap-4">
              <div className="w-16 h-16 flex justify-center mb-6 flex-1/2">
                <span className="text-2xl text-black">{feature.icon}</span>
              </div>
              <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mt-18">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Exceptional Customer Support
          </h2>
          <p className="text-center text-gray-600">
            We are committed to your success and offer unparalleled customer support
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {customerSupport.map((feature, index) => (
            <div key={index} className="p-8 flex gap-4">
              <div className="w-16 h-16 flex justify-center mb-6 flex-1/2">
                <span className="text-2xl text-black">{feature.icon}</span>
              </div>
              <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      <div className="w-full mt-18">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Conclusion
          </h2>
          <p className=" text-gray-600">
            At Corpnix, our advanced web development services are designed to transform your online presence and help your business thrive in the digital world. With unparalleled expertise, cutting-edge technology, and a focus on exceptional user experience, we create websites that not only look great but also perform exceptionally well.
          </p>
          <p className=" text-gray-600">
            Don&apos;t miss the opportunity to elevate your business with our top-tier web development services. Contact us today to learn more and start your journey to a stunning, high-performing website.
          </p>
        </div>

      </div>
    </div>
  );
}