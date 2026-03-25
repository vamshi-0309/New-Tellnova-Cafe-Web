import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['Suchitra Circle', 'Hyderabad, Telangana', 'India - 500067'],
    color: '#ff0080',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 98765 43210', '+91 040 2345 6789'],
    color: '#00d4ff',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['hello@thespotcafe.in', 'info@thespotcafe.in'],
    color: '#bf00ff',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Daily: 9:00 AM - 10:00 PM', 'Kitchen: 11:00 AM - 9:30 PM'],
    color: '#ff1744',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#ff1744] text-sm font-semibold tracking-widest uppercase">
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1744] to-[#ff0080]">
              Get in Touch
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 flex gap-4"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ 
                    background: `linear-gradient(135deg, ${info.color}20, ${info.color}40)`,
                    border: `1px solid ${info.color}40`
                  }}
                >
                  <info.icon className="w-6 h-6" style={{ color: info.color }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-400 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 font-['Orbitron']">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#0a0a12] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-[#ff0080] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#0a0a12] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-[#ff0080] focus:outline-none"
                />
              </div>
              
              <input
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#0a0a12] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-[#ff0080] focus:outline-none"
              />
              
              <textarea
                required
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0a0a12] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-[#ff0080] focus:outline-none resize-none"
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full neon-btn-filled py-4 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.349463076423!2d78.54308437507364!3d17.49399258345335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb6c5e1a1c1c1c%3A0x0!2zMTfCsDI5JzQ4LjEiTiA3OMKwMzInNDAuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
