import { motion } from 'framer-motion';
import { Coffee, MapPin, Clock, Users } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 animated-bg grid-pattern">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff0080] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d4ff] rounded-full blur-[150px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#bf00ff] rounded-full blur-[100px] opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff0080] animate-pulse" />
              <span className="text-sm text-gray-400">Now Open in Suchitra Circle</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                THE SPOT
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] via-[#ff1744] to-[#bf00ff]">
                CAFE
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              Your ultimate hangout destination in Hyderabad. Great coffee, cozy ambience, 
              and Instagram-worthy interior. Perfect for friends, work, and fun!
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={onOpenReservation}
                className="neon-btn-filled text-lg py-4 px-8"
              >
                Reserve Table
              </button>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn text-lg py-4 px-8"
              >
                Order on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full glass mx-auto mb-2">
                  <Coffee className="w-6 h-6 text-[#ff0080]" />
                </div>
                <p className="text-2xl font-bold text-white font-['Orbitron']">50+</p>
                <p className="text-sm text-gray-500">Menu Items</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full glass mx-auto mb-2">
                  <Users className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <p className="text-2xl font-bold text-white font-['Orbitron']">1000+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full glass mx-auto mb-2">
                  <Clock className="w-6 h-6 text-[#bf00ff]" />
                </div>
                <p className="text-2xl font-bold text-white font-['Orbitron']">12h</p>
                <p className="text-sm text-gray-500">Open Daily</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Cyberpunk Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff0080]/20 via-transparent to-[#00d4ff]/20 rounded-3xl" />
                
                {/* Café Image */}
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
                  alt="The Spot Cafe Interior"
                  className="w-full h-full object-cover rounded-3xl"
                />

                {/* Overlay Elements */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -left-8 top-1/4 glass-strong rounded-2xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff0080] to-[#bf00ff] flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Featured</p>
                      <p className="font-bold text-white">Artisan Coffee</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -right-8 bottom-1/3 glass-strong rounded-2xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#ff0080] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-bold text-white">Suchitra Circle</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Neon Ring Decorations */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#ff0080] rounded-full opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#00d4ff] rounded-full opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
