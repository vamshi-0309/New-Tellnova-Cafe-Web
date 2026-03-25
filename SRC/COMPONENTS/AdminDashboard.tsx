import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Users, Utensils, Calendar, Image, MessageSquare, 
  BarChart3, Settings, CheckCircle, XCircle, Clock
} from 'lucide-react';
import { useStore, Reservation } from '../store';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'reservations' | 'menu' | 'gallery' | 'testimonials' | 'stats';

const statusColors = {
  pending: '#ff1744',
  confirmed: '#00d4ff',
  completed: '#22c55e',
  cancelled: '#6b7280',
};

const statusIcons = {
  pending: Clock,
  confirmed: CheckCircle,
  completed: CheckCircle,
  cancelled: XCircle,
};

export default function AdminDashboard({ isOpen, onClose }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('reservations');
  const { reservations, updateReservationStatus, menuItems, gallery, testimonials } = useStore();

  const tabs = [
    { id: 'reservations', label: 'Reservations', icon: Calendar },
    { id: 'menu', label: 'Menu', icon: Utensils },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'testimonials', label: 'Reviews', icon: MessageSquare },
    { id: 'stats', label: 'Analytics', icon: BarChart3 },
  ];

  const pendingCount = reservations.filter(r => r.status === 'pending').length;
  const confirmedCount = reservations.filter(r => r.status === 'confirmed').length;
  const totalRevenue = reservations.length * 1500; // Mock revenue

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          <div className="fixed inset-0 bg-black/90" onClick={onClose} />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-6xl bg-[#0a0a12] border-l border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white font-['Orbitron']">
                  Admin Dashboard
                </h2>
                <p className="text-gray-400 text-sm">Manage your café operations</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex h-[calc(100vh-90px)]">
              {/* Sidebar */}
              <div className="w-64 border-r border-white/10 p-4 space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as Tab)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#ff0080] to-[#bf00ff] text-white'
                        : 'glass text-gray-400 hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                {activeTab === 'reservations' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">Reservations</h3>
                      <div className="flex gap-4">
                        <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm">
                          {pendingCount} Pending
                        </span>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                          {confirmedCount} Confirmed
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {reservations.map((reservation) => {
                        const StatusIcon = statusIcons[reservation.status];
                        return (
                          <div
                            key={reservation.id}
                            className="glass rounded-xl p-4 flex items-center justify-between"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0080] to-[#bf00ff] flex items-center justify-center text-white font-bold">
                                {reservation.name[0]}
                              </div>
                              <div>
                                <p className="text-white font-medium">{reservation.name}</p>
                                <p className="text-gray-400 text-sm">
                                  {reservation.guests} guests • {reservation.date} at {reservation.time}
                                </p>
                                <p className="text-gray-500 text-xs">{reservation.phone}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div 
                                className="flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                                style={{ 
                                  background: `${statusColors[reservation.status]}20`,
                                  color: statusColors[reservation.status]
                                }}
                              >
                                <StatusIcon className="w-4 h-4" />
                                {reservation.status}
                              </div>
                              {reservation.status === 'pending' && (
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => updateReservationStatus(reservation.id, 'confirmed')}
                                    className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30"
                                  >
                                    <CheckCircle className="w-5 h-5" />
                                  </button>
                                  <button
                                    onClick={() => updateReservationStatus(reservation.id, 'cancelled')}
                                    className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30"
                                  >
                                    <XCircle className="w-5 h-5" />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeTab === 'menu' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">Menu Items</h3>
                      <span className="text-gray-400">{menuItems.length} items</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {menuItems.map((item) => (
                        <div key={item.id} className="glass rounded-xl overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-white font-medium">{item.name}</h4>
                              <span className="text-[#ff0080] font-bold">₹{item.price}</span>
                            </div>
                            <p className="text-gray-400 text-sm">{item.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'gallery' && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Gallery</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {gallery.map((img) => (
                        <div key={img.id} className="relative group rounded-xl overflow-hidden">
                          <img src={img.url} alt={img.caption} className="w-full aspect-square object-cover" />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-sm">{img.caption}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'testimonials' && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Customer Reviews</h3>
                    <div className="space-y-4">
                      {testimonials.map((review) => (
                        <div key={review.id} className="glass rounded-xl p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff0080] to-[#bf00ff] flex items-center justify-center text-white font-bold">
                                {review.name[0]}
                              </div>
                              <div>
                                <p className="text-white font-medium">{review.name}</p>
                                <p className="text-gray-500 text-xs">{review.date}</p>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-600'}>★</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm italic">"{review.text}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Analytics Overview</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="glass-strong rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#ff0080]/20 flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-[#ff0080]" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Total Reservations</p>
                            <p className="text-2xl font-bold text-white">{reservations.length}</p>
                          </div>
                        </div>
                      </div>
                      <div className="glass-strong rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/20 flex items-center justify-center">
                            <Utensils className="w-6 h-6 text-[#00d4ff]" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Menu Items</p>
                            <p className="text-2xl font-bold text-white">{menuItems.length}</p>
                          </div>
                        </div>
                      </div>
                      <div className="glass-strong rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#bf00ff]/20 flex items-center justify-center">
                            <Users className="w-6 h-6 text-[#bf00ff]" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Reviews</p>
                            <p className="text-2xl font-bold text-white">{testimonials.length}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
