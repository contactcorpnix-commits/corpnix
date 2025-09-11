import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  company: [
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact us', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Help center', href: '/contact' },
    { name: 'Support', href: '/contact' },
    { name: 'Partners', href: '/about' },
  ],
  legal: [
    { name: 'Terms of service', href: '/terms' },
    { name: 'Privacy policy', href: '/privacy' },
    { name: 'Cookie policy', href: '/privacy' },
    { name: 'GDPR', href: '/privacy' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

const SquarePattern = ({ position }) => (
  <div className={`absolute ${position} opacity-10`}>
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none"/>
      <rect x="80" y="20" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none"/>
      <rect x="140" y="20" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none"/>
      <rect x="20" y="80" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none"/>
      <rect x="80" y="80" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none"/>
      <rect x="140" y="80" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none"/>
      <rect x="20" y="140" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none"/>
      <rect x="80" y="140" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none"/>
      <rect x="140" y="140" width="40" height="40" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#221F4D] text-white relative overflow-hidden">
      {/* Background Square Patterns */}
      <SquarePattern position="left-0 top-20" />
      <SquarePattern position="right-0 top-40" />
      
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-3xl font-bold mb-4 text-center lg:w-4/12 mx-auto">Keep yourself update with news &amp; updates</h2>
            <div className="lg:w-6/12 mx-auto">
            <div className="border-1 border-white rounded-full flex p-1 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-6 py-3 bg-white text-black rounded-full font-medium transition-all duration-500 ease-out border justify-center border-black flex items-center gap-2 group relative overflow-hidden hover:border-transparent">
                <span className="absolute left-0 top-0 h-full w-16 bg-[#35327d] rounded-full transform scale-0 group-hover:scale-[6] transition-transform duration-500 ease-out origin-left"></span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Subscribe</span>
                <span className="relative z-20">
                  <ArrowRight className=" w-4 h-4 text-black group-hover:text-white transition-colors duration-300" />
                </span>
              </button>
            </div>
            </div>
          
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className='flex items-center mb-4'>
              <Image src="/Logo.png" height={30} width={30} className='mr-3' alt="Corpnix Logo"/>
              <h3 className="text-2xl font-bold">Corpnix</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              Your trusted IT solutions partner. We transform ideas into impactful digital solutions that drive business growth and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-slate-800">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h5 className="font-medium mb-1">Email</h5>
              <a href="mailto:hello@corpnix.com" className="text-slate-400 hover:text-white transition-colors">
                hello@corpnix.com
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h5 className="font-medium mb-1">Phone</h5>
              <a href="tel:+919820313746" className="text-slate-400 hover:text-white transition-colors">
                +91 9820-313-746
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h5 className="font-medium mb-1">Address</h5>
              <p className="text-slate-400">
                Shop 10B, Jabbar Estate, Tunga Village, S.V Road, Powai, Mumbai - 400072
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Corpnix. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;