# 🌟 The Spot Cafe Website

A premium café website with cyberpunk neon design, built with React + Vite, featuring table reservations, menu management, and admin dashboard.

![The Spot Cafe](https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800)

## ✨ Features

- 🖥️ **Modern UI** - Neon Cyberpunk Futurism with Glassmorphism
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🍰 **Menu Management** - Full menu with categories and pricing
- 📅 **Table Reservation** - Book your table online
- 🎨 **Gallery** - Instagram-worthy café photos
- ⭐ **Testimonials** - Customer reviews
- 📧 **Contact Form** - Get in touch
- 🔐 **Admin Dashboard** - Manage reservations, menu, content

## 🚀 Quick Deploy to GitHub Pages

### Option 1: One-Click Deploy (Recommended)

Run this script in your project folder:

```bash
# Make the script executable and run it
chmod +x deploy.sh
./deploy.sh
```

The script will:
1. Initialize Git
2. Ask for your repository name
3. Create the repository on GitHub
4. Push all code

### Option 2: Manual Steps

```bash
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Commit your changes
git commit -m "✨ Initial commit - The Spot Cafe Website"

# 4. Rename branch to main
git branch -M main

# 5. Create repository on GitHub and push
gh repo create new-cafe-website --public --source=. --push

# OR if gh CLI not installed:
git remote add origin https://github.com/vamshi-0309/new-cafe-website.git
git push -u origin main
```

## 🛠️ Tech Stack

- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **State:** Zustand
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── store.ts        # Zustand state management
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
├── package.json       # Dependencies
├── vite.config.ts     # Vite configuration
└── tailwind.config.js # Tailwind configuration
```

## 🎨 Design Features

- **Neon Cyberpunk Theme** with pink/blue/purple accents
- **Glassmorphism UI** with frosted glass effects
- **Smooth Animations** using Framer Motion
- **Dark Mode** with high contrast neon highlights
- **Responsive Layout** for all screen sizes

## 📄 License

MIT License - Feel free to use this project!

---

Built with ❤️ for The Spot Cafe spots
