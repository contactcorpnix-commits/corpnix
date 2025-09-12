"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Project', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0A0822] transition-colors duration-300 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-[42px] h-[35px]">
              <Image 
                src="/Logo.png"
                alt="Corpnix"
                width={42}
                height={35}
              />
            </div>
            <span className="text-[22px] font-bold font-[var(--font-nunito-sans)] leading-[1.27] tracking-[0.5%] text-white">
              Corpnix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-white px-3 py-2 text-[16px] leading-[1.56] font-normal font-[var(--font-inter)] transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4 ml-4">
              <Link
                href="/contact"
                className="bg-white text-black px-6 py-3 rounded-full text-[16px] font-medium font-[var(--font-inter)] flex items-center space-x-2 hover:bg-[#32D583] hover:text-white transition-all duration-300 transform"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>

          
          

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-lg text-white hover:bg-muted/10 transition-all duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-white block px-4 py-3 text-[16px] leading-[1.56] font-normal font-[var(--font-inter)] transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              ))}
              <div className="pt-6 px-4">
                <Link
                  href="/contact"
                  className="w-full bg-white text-black px-6 py-3 rounded-full text-[16px] font-medium font-[var(--font-inter)] flex items-center justify-center space-x-2 hover:bg-[#32D583] transition-all duration-300 shadow-lg"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}