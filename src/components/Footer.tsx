import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ],
  menuCategories: [
    'Coffee & Beverages',
    'Burgers & Wraps',
    'Pasta & Maggi',
    'Milkshakes',
    'Desserts',
  ],
  social: [
    { icon: Instagram, href: 'https://instagram.com/thespotcafe', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/thespotcafe', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/thespotcafe', label: 'Twitter' },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#050508] pt-16 pb-8">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0080] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0080] to-[#bf00ff] p-[2px]">
                <div className="w-full h-full rounded-full bg-[#050508] flex items-center justify-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-[#ff0080] to-[#00d4ff] bg-clip-text text-transparent font-['Orbitron']">
                    TS
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold text-white font-['Orbitron']">THE SPOT CAFE</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your ultimate hangout destination in Hyderabad. Great coffee, cozy ambience, 
              and Instagram-worthy interior.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#ff0080] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-['Orbitron']">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff0080] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-['Orbitron']">Menu</h4>
            <ul className="space-y-2">
              {footerLinks.menuCategories.map((cat) => (
                <li key={cat}>
                  <span className="text-gray-400 text-sm">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-['Orbitron']">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-[#ff0080] shrink-0" />
                <span>Suchitra Circle, Hyderabad, Telangana</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-[#00d4ff] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-[#bf00ff] shrink-0" />
                <span>hello@thespotcafe.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 The Spot Cafe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#ff0080] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#ff0080] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
