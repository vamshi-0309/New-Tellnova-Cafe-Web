import { create } from 'zustand';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
}

interface AppState {
  // Menu
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  
  // Reservations
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
  updateReservationStatus: (id: string, status: Reservation['status']) => void;
  
  // Testimonials
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Testimonial) => void;
  
  // Gallery
  gallery: GalleryImage[];
  addGalleryImage: (image: GalleryImage) => void;
  
  // Auth
  isAdmin: boolean;
  setAdmin: (value: boolean) => void;
}

const initialMenuItems: MenuItem[] = [
  { id: '1', name: 'Espresso', description: 'Strong black coffee shot', price: 80, category: 'Coffee & Beverages', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400', available: true },
  { id: '2', name: 'Cappuccino', description: 'Creamy espresso with steamed milk foam', price: 120, category: 'Coffee & Beverages', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400', available: true },
  { id: '3', name: 'Hazelnut Latte', description: 'Smooth latte with hazelnut flavor', price: 150, category: 'Coffee & Beverages', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400', available: true },
  { id: '4', name: 'Cold Coffee', description: 'Chilled coffee with ice and cream', price: 130, category: 'Coffee & Beverages', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400', available: true },
  { id: '5', name: 'Iced Matcha', description: 'Refreshing matcha with milk', price: 160, category: 'Coffee & Beverages', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400', available: true },
  { id: '6', name: 'Chocolate Milkshake', description: 'Rich chocolate shake with whipped cream', price: 140, category: 'Milkshakes', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400', available: true },
  { id: '7', name: 'Strawberry Shake', description: 'Fresh strawberry blended with ice cream', price: 150, category: 'Milkshakes', image: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=400', available: true },
  { id: '8', name: 'Classic Burger', description: 'Juicy beef patty with fresh veggies', price: 180, category: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', available: true },
  { id: '9', name: 'Chicken Wrap', description: 'Grilled chicken in soft tortilla', price: 160, category: 'Wraps', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400', available: true },
  { id: '10', name: 'Loaded Fries', description: 'Crispy fries with cheese and toppings', price: 120, category: 'Snacks', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd6f9f3?w=400', available: true },
  { id: '11', name: 'Creamy Pasta', description: 'Penne in rich cream sauce', price: 200, category: 'Pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400', available: true },
  { id: '12', name: 'Classic Maggi', description: 'Instant noodles with veggies', price: 80, category: 'Maggi', image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400', available: true },
  { id: '13', name: 'Chocolate Brownie', description: 'Fudgy brownie with chocolate glaze', price: 100, category: 'Desserts', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400', available: true },
  { id: '14', name: 'Cheesecake', description: 'Creamy New York style cheesecake', price: 150, category: 'Desserts', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400', available: true },
  { id: '15', name: 'Fresh Orange Juice', description: 'Freshly squeezed orange juice', price: 100, category: 'Fresh Juices', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400', available: true },
];

const initialReservations: Reservation[] = [
  { id: '1', name: 'Rahul Sharma', phone: '9876543210', email: 'rahul@email.com', date: '2026-03-28', time: '18:00', guests: 4, status: 'confirmed', createdAt: '2026-03-24T10:00:00Z' },
  { id: '2', name: 'Priya Singh', phone: '9123456789', email: 'priya@email.com', date: '2026-03-29', time: '19:30', guests: 2, status: 'pending', createdAt: '2026-03-25T14:30:00Z' },
  { id: '3', name: 'Arjun Reddy', phone: '9988776655', email: 'arjun@email.com', date: '2026-03-30', time: '12:00', guests: 6, status: 'confirmed', createdAt: '2026-03-26T09:15:00Z' },
];

const initialTestimonials: Testimonial[] = [
  { id: '1', name: 'Sneha Kapoor', rating: 5, text: 'Best café in Hyderabad! The ambiance is amazing and the coffee is top-notch. Perfect for hangouts!', date: '2026-03-20' },
  { id: '2', name: 'Vikram Malhotra', rating: 5, text: 'Great place for remote work. WiFi is fast, coffee is excellent, and the staff is super friendly.', date: '2026-03-18' },
  { id: '3', name: 'Anjali Rao', rating: 4, text: 'Love the Instagram-worthy interior! Perfect for photoshoots and hangouts with friends.', date: '2026-03-15' },
  { id: '4', name: 'Karthik Nair', rating: 5, text: 'Amazing burgers and pasta. Affordable pricing for such quality. Highly recommended!', date: '2026-03-10' },
];

const initialGallery: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600', caption: 'Cozy Interior', category: 'Ambience' },
  { id: '2', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600', caption: 'Artisan Coffee', category: 'Food' },
  { id: '3', url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600', caption: 'Lounge Area', category: 'Ambience' },
  { id: '4', url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600', caption: 'Delicious Desserts', category: 'Food' },
  { id: '5', url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600', caption: 'Evening Vibes', category: 'Ambience' },
  { id: '6', url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', caption: 'Gourmet Burgers', category: 'Food' },
];

export const useStore = create<AppState>((set) => ({
  menuItems: initialMenuItems,
  addMenuItem: (item) => set((state) => ({ menuItems: [...state.menuItems, item] })),
  updateMenuItem: (id, item) => set((state) => ({
    menuItems: state.menuItems.map((m) => m.id === id ? { ...m, ...item } : m)
  })),
  
  reservations: initialReservations,
  addReservation: (reservation) => set((state) => ({ 
    reservations: [...state.reservations, reservation] 
  })),
  updateReservationStatus: (id, status) => set((state) => ({
    reservations: state.reservations.map((r) => r.id === id ? { ...r, status } : r)
  })),
  
  testimonials: initialTestimonials,
  addTestimonial: (testimonial) => set((state) => ({ 
    testimonials: [...state.testimonials, testimonial] 
  })),
  
  gallery: initialGallery,
  addGalleryImage: (image) => set((state) => ({ 
    gallery: [...state.gallery, image] 
  })),
  
  isAdmin: false,
  setAdmin: (value) => set({ isAdmin: value }),
}));
