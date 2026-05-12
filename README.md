# Achmad Zalman - Portfolio Website

Website portofolio profesional yang dibuat dengan React, Tailwind CSS, dan Framer Motion.

## 🚀 Fitur Utama

- **Responsive Design**: Mobile-first dengan mendukung semua ukuran layar
- **Modern Animations**: Smooth fade-in, slide, dan hover effects
- **Dark Theme**: Professional dark mode dengan accent blue/cyan
- **Component-Based**: Struktur React yang clean dan maintainable
- **SEO Optimized**: Meta tags dan semantic HTML

## 📦 Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool & dev server
- **Tailwind CSS v3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📋 Sections

1. **Navbar** - Navigasi fixed dengan mobile menu
2. **Hero** - Introduction dengan CTA buttons
3. **About** - Deskripsi background & skills
4. **Skills** - Kategori skills dengan progress bar
5. **Projects** - 4 project showcase dengan details
6. **Experience** - Timeline experience & background
7. **Contact** - Contact info dengan social links
8. **Footer** - Copyright & scroll to top

## 🛠 Installation & Setup

### Prerequisites
- Node.js v18+ 
- npm atau yarn

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── index.js
├── App.jsx
├── index.css
└── main.jsx
```

## 🎨 Customization

### Ubah Warna
Edit `tailwind.config.js` untuk customize theme colors.

### Ubah Konten
Setiap section adalah komponen React yang mudah diedit:

```jsx
// Contoh: Ubah nama di Hero.jsx
<h1 className="text-5xl md:text-6xl font-bold">
  Hi, I'm <span className="text-blue-400">Your Name</span>
</h1>
```

### Ubah Projects
Edit array `projects` di `Projects.jsx`:

```jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description...',
    tech: ['React', 'Node.js'],
    // ...
  },
];
```

## 🚀 Deployment

### Deploy ke Vercel
```bash
npm i -g vercel
vercel
```

### Deploy ke Netlify
```bash
npm run build
# Upload dist folder ke Netlify
```

### Deploy ke GitHub Pages
Update `vite.config.js`:
```js
export default {
  base: '/repository-name/',
  // ...
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance

- Optimized images & lazy loading
- CSS-in-JS dengan Tailwind
- HMR (Hot Module Reload) untuk development
- Tree-shaking untuk production builds

## 📝 License

MIT License - Feel free to use this project!

## 👨‍💻 Author

**Achmad Zalman**
- Web Developer & Informatics Student
- Email: achmadzalman@example.com
- GitHub: github.com/achmadzalman

---

Made with ❤️ using React & Tailwind CSS
