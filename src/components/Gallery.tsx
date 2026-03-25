import { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store';

const categories = ['All', 'Ambience', 'Food'];

export function Gallery() {
  const gallery = useStore((state) => state.gallery);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGallery = activeCategory === 'All'
    ? gallery
    : gallery.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase">
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#ff0080]">
              Captured Moments
            </span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#00d4ff] to-[#ff0080] text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredGallery.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white font-medium">{image.caption}</p>
                <p className="text-gray-400 text-sm">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
