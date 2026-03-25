import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuModal from './components/Menu';
import ReservationModal from './components/ReservationModel';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { Settings } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050508]">
      {/* Header */}
      <Header 
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Hero */}
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />

      {/* About */}
      <About />

      {/* Menu Modal */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Reservation Modal */}
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Admin Dashboard */}
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Floating Admin Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#ff0080] to-[#bf00ff] flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
      >
        <Settings className="w-6 h-6 text-white" />
      </motion.button>
    </div>
  );
}
