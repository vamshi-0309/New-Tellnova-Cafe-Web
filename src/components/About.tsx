import { motion } from 'framer-motion';
import { Heart, Sparkles, Wifi, Camera } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Cozy Ambience',
    description: 'Warm and inviting space perfect for hangouts, dates, and work sessions.',
    color: '#ff0080',
  },
  {
    icon: Sparkles,
    title: 'Premium Coffee',
    description: 'Expertly crafted beverages using the finest beans and ingredients.',
    color: '#bf00ff',
  },
  {
    icon: Wifi,
    title: 'Free WiFi',
    description: 'High-speed internet for remote workers and digital nomads.',
    color: '#00d4ff',
  },
  {
    icon: Camera,
    title: 'Instagram-Worthy',
    description: 'Beautifully designed interior perfect for photos and content creation.',
    color: '#ff1744',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#ff0080] text-sm font-semibold tracking-widest uppercase">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] to-[#bf00ff]">
              Welcome to The Spot
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We are more than just a café — we are a community space where great 
            conversations happen over even greater coffee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-strong rounded-2xl p-6 group hover:scale-105 transition-transform"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ 
                  background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                  border: `1px solid ${feature.color}40`
                }}
              >
                <feature.icon 
                  className="w-7 h-7"
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Orbitron']">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-4">
            <div className="text-right">
              <p className="text-white font-semibold">Visit Us Today</p>
              <p className="text-gray-400 text-sm">Suchitra Circle, Hyderabad</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0080] to-[#bf00ff] flex items-center justify-center">
              <span className="text-white font-bold">→</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
