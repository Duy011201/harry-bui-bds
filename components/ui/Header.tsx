import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Không gian', href: '#spaces' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Adjust specifically for header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled ? 'py-4 bg-charcoal/90 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-4xl font-semibold italic tracking-wide text-gold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Harry Bùi
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-widest text-sand/80 hover:text-gold transition-colors duration-300 font-light cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => handleNavClick(e, '#booking')}
            className="px-6 py-2 border border-gold/50 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 text-sm tracking-widest uppercase cursor-pointer"
          >
            Đăng ký ngay
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gold z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
              className="fixed inset-0 bg-charcoal z-40 flex flex-col items-center justify-center space-y-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-3xl text-sand hover:text-gold transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
               <a
                  href="#booking"
                  onClick={(e) => handleNavClick(e, '#booking')}
                  className="px-8 py-3 bg-gold text-charcoal font-bold uppercase tracking-widest mt-8 cursor-pointer"
                >
                  Đặt lịch xem
                </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;