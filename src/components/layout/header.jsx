"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLoading } from "@/lib/loading";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoading = useLoading();
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Loading Progress Bar */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-[100]"
          />
        )}
      </AnimatePresence>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0822]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50">
              <div className="w-[42px] h-[35px]">
                <Image 
                  src="/Logo.png"
                  alt="Corpnix"
                  width={42}
                  height={35}
                  priority
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
                  className={`text-white hover:text-white px-3 py-2 text-[16px] leading-[1.56] font-normal font-[var(--font-inter)] transition-colors relative group ${
                    pathname === item.href ? 'text-white' : 'text-white/80'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? 'w-full' : ''
                  }`}></span>
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
                className="p-3 rounded-lg text-white hover:bg-white/10 transition-all duration-200 focus:outline-none z-50"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0A0822] border-l border-white/10 shadow-2xl z-50 lg:hidden"
              aria-modal="true"
              role="dialog"
            >
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <span className="text-white text-lg font-semibold">Menu</span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Navigation items */}
                <nav className=" px-6 py-4 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-4 text-[14px] leading-[1.56] font-normal font-[var(--font-inter)] transition-colors relative group ${
                        pathname === item.href 
                          ? 'text-white bg-white/10 rounded-lg' 
                          : 'text-white/80 hover:text-white hover:bg-white/5 rounded-lg'
                      }`}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></span>
                      )}
                    </Link>
                  ))}
                </nav>
                
                {/* Footer with CTA */}
                <div className="px-6 pb-8 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-white text-black px-6 py-4 rounded-full text-[14px] font-medium font-[var(--font-inter)] flex items-center justify-center space-x-2 hover:bg-[#32D583] hover:text-white transition-all duration-300 shadow-lg mt-6"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}