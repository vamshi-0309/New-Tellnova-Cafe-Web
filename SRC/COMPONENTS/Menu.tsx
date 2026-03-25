import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Utensils, Pizza, Cake, IceCream, GlassWater } from 'lucide-react';
import { useStore } from '../store';

const categories = [
  { id: 'all', name: 'All', icon: null },
  { id: 'Coffee & Beverages', name: 'Coffee', icon: Coffee },
  { id: 'Milkshakes', name: 'Milkshakes', icon: IceCream },
  { id: 'Burgers', name: 'Burgers', icon: Utensils },
  { id: 'Wraps', name: 'Wraps', icon: Utensils },
  { id: 'Snacks', name: 'Snacks', icon: Utensils },
  { id: 'Pasta', name: 'Pasta', icon: Pizza },
  { id: 'Maggi', name: 'Maggi', icon: Utensils },
  { id: 'Desserts', name: 'Desserts', icon: Cake },
  { id: 'Fresh Juices', name: 'Juices', icon: GlassWater },
];

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const menuItems = useStore((state) => state.menuItems);

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          
          <div className="relative min-h-screen py-12 px-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl mx-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white font-['Orbitron']">
                    Our Menu
                  </h2>
                  <p className="text-gray-400 mt-1">Delicious offerings for every taste</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? 'bg-gradient-to-r from-[#ff0080] to-[#bf00ff] text-white'
                        : 'glass text-gray-400 hover:text-white'
                    }`}
                  >
                    {cat.icon && <cat.icon className="w-4 h-4 inline-block mr-2" />}
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Menu Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass rounded-2xl overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] to-transparent" />
                      {!item.available && (
                        <div className="absolute top-3 right-3 bg-red-500/80 text-white text-xs px-3 py-1 rounded-full">
                          Sold Out
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">{item.name}</h3>
                        <span className="text-[#ff0080] font-bold">₹{item.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                      <span className="inline-block mt-3 text-xs text-gray-500 px-2 py-1 rounded-full glass">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
