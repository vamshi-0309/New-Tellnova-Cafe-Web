import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Header({ onOpenReservation, onOpenMenu }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Circle only */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0080] to-[#bf00ff] p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0a0a12] flex items-center justify-center">
                <span className="text-lg font-bold bg-gradient-to-r from-[#ff0080] to-[#00d4ff] bg-clip-text text-transparent font-['Orbitron']">
                  TS
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white font-['Orbitron'] tracking-wider">
                THE SPOT
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#ff0080] transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenMenu}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              View Menu
            </button>
            <button
              onClick={onOpenReservation}
              className="neon-btn-filled text-sm py-2 px-6"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        className="lg:hidden glass border-t border-white/5"
      >
        <nav className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#ff0080] transition-colors text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
            <button
              onClick={() => { onOpenMenu(); setIsOpen(false); }}
              className="w-full py-3 text-center text-gray-300 hover:text-white transition-colors"
            >
              View Menu
            </button>
            <button
              onClick={() => { onOpenReservation(); setIsOpen(false); }}
              className="w-full neon-btn-filled"
            >
              Reserve Table
            </button>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}
