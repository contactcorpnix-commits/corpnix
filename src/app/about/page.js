import Testimonials from '@/components/sections/testimonials';
import FAQsSection from '@/components/sections/faqs';
import { Facebook, Twitter, Linkedin, Instagram, UserRound } from 'lucide-react';
import Image from 'next/image';

const aboutData = {
  title: "You can always count on us during your journey",  
  socialIcon: [
    {
      icon: <Twitter />,
      link: "https://twitter.com"
    },
    {
      icon: <Linkedin />,
      link: "https://linkedin.com"
    },
    {
      icon: <Facebook />,
      link: "https://facebook.com"
    },
    {
      icon: <Instagram />,
      link: "https://instagram.com"
    }
  ],
  stats: [
    { value: "34+", label: "Team members", description:"We have successfully completed over 150+ projects for our clients, ranging from small businesses to large enterprises." },
    { value: "200+", label: "Websites build", description:"We have worked with over 50+ happy clients, who have experienced the benefits of our services and have chosen us as their trusted partner." },
    { value: "99%", label: "Client satisfaction", description:"We have been in the industry for over 5 years, continuously evolving our skills and technologies to meet the needs of our clients." },
    { value: "100+", label: "Amazing clients", description:"Our dedicated support team is available 24/7 to assist our clients with any questions or concerns they may have." }
  ],
  team: [
    {
      name: "Atif Ansari",
      position: "CEO & Founder",
      icon:[{
        icon: <Twitter className='w-4 h-4'/>,
        link: "https://twitter.com"
      },{
        icon: <Linkedin className='w-4 h-4'/>,
        link: "https://linkedin.com"
      },{
        icon: <Facebook className='w-4 h-4'/>,
        link: "https://facebook.com"
      },{
        icon: <Instagram className='w-4 h-4'/>,
        link: "https://instagram.com"
      }],
      image_url: "/api/placeholder/200/200"
    },
    {
      name: "Praveen Shrigadi",
      position: "Technical Director",
      icon:[{
        icon: <Twitter className='w-4 h-4'/>,
        link: "https://twitter.com"
      },{
        icon: <Linkedin className='w-4 h-4'/>,
        link: "https://linkedin.com"
      },{
        icon: <Facebook className='w-4 h-4'/>,
        link: "https://facebook.com"
      },{
        icon: <Instagram className='w-4 h-4'/>,
        link: "https://instagram.com"
      }],
      image_url: "/api/placeholder/200/200"
    },
    {
      name: "Pratik Tambe",
      position: "Creative Director",
      icon:[{
        icon: <Twitter className='w-4 h-4'/>,
        link: "https://twitter.com"
      },{
        icon: <Linkedin className='w-4 h-4'/>,
        link: "https://linkedin.com"
      },{
        icon: <Facebook className='w-4 h-4'/>,
        link: "https://facebook.com"
      },{
        icon: <Instagram className='w-4 h-4'/>,
        link: "https://instagram.com"
      }],
      image_url: "/api/placeholder/200/200"
    },
    {
      name: "Rajesh Jadhav",
      position: "Marketing Head",
      icon:[{
        icon: <Twitter className='w-4 h-4'/>,
        link: "https://twitter.com"
      },{
        icon: <Linkedin className='w-4 h-4'/>,
        link: "https://linkedin.com"
      },{
        icon: <Facebook className='w-4 h-4'/>,
        link: "https://facebook.com"
      },{
        icon: <Instagram className='w-4 h-4'/>,
        link: "https://instagram.com"
      }],
      image_url: "/api/placeholder/200/200"
    }
  ],
};

export default function AboutPage() {
  const {
    title,
    stats,
    team,
    socialIcon,
  } = aboutData;

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center text-white py-16 bg-gradient-to-b from-[#0A0822] to-[#221F4D]">
              {title && (
                <h4 className="text-2xl w-1/2 mx-auto font-bold text-white sm:text-4xl py-8">
                  {title}
                </h4>
              )}
              <div>
                <div className="flex justify-center">
                    {socialIcon && (
                        <p className="mt-4 text-lg text-white flex items-center">
                            {socialIcon.map((icon, index) => (
                                <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className="mr-4">
                                    {icon.icon}
                                </a>
                            ))}
                        </p>
                    )}
                </div>
              </div>
            </div>

          {/* About hero */}
          <section className="py-24 px-8">
            <div className='grid lg:grid-cols-2 justify-center gap-8'>
                    <div className=''>
                        <h2 className='text-4xl font-bold py-6'>Who we are?</h2>
                        <p className="py-2">
                          Founded in 2018, Corpnix is your trusted tech partner. We&apos;re all about quality and user-centric services. Our talented team crafts visually stunning websites that offer seamless experiences. Plus, we&apos;re SEO pros, boosting your online visibility.
                        </p>
                        <p>Founded in 2018, Corpnix is your trusted tech partner. We&apos;re all about quality and user-centric services. Our talented team crafts visually stunning websites that offer seamless experiences.</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Image 
                            src="/services1.jpg"
                            alt="About"
                            className="rounded-lg"
                            width={400}
                            height={400}
                        />
                    </div>
            </div>
          </section>

            {/* Stats Card */}
            <section className="py-18 grid gap-8  bg-[#221F4D] px-8">
                  {stats && stats.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 items-center justify-center">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center lg:border-r md:border-r border-gray-600 last:border-r-0 p-4">
                          <div className="text-3xl font-bold text-white">{stat.value}</div>
                          <div className="text-blue-100">{stat.label}</div>
                          <div className="text-white pt-4">{stat.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
            </section>
            <section className='bg-gradient-to-b from-[#221F4D] to-[#0A0822] pb-12 px-8'>
              <div className='text-center '>
                    <h2 className='text-4xl font-bold py-6 text-white'>Lets meet our teams</h2>
                    <p className='text-white lg:w-3/4 mx-auto sm:w-full'>Meet the talented individuals who make Corpnix possible. Each member brings a unique skill set and a passion for technology. Get to know them and learn more about their journey with Corpnix.</p>
                  </div>
                  {team && team.length > 0 && (
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 py-8">
                      {team.map((member, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 w-full bg-[#221F4D] shadow-lg hover:bg-[#35327D]">
                      {member.image_url && (
                        <UserRound
                          src={member.image_url}
                          alt={member.name}
                          width={50}
                          height={50}
                          className="w-10 h-10 flex-shrink-0 object-cover text-white"
                        />
                      )}
                      <div className="flex-1 min-w-0 overflow-hidden">
                        <h4 className="text-sm sm:text-base font-bold text-white">{member.name}</h4>
                        <p className="text-xs sm:text-sm text-white py-1">{member.position}</p>
                        {/* Social Media Icons */}
                        <div className="mt-2 flex space-x-2 py-2 justify-evenly">
                          {member.icon && member.icon.map((social, idx) => (
                            <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
                              {social.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                    </div>
                  )}
            </section>
          </div>
        </section>
        <Testimonials 
        bgColor="bg-gradient-to-b from-[#0A0822] to-[#221F4D]"
        cardBgColor="#16213e"/>
        <FAQsSection />
      </main>
    </>
  );
}