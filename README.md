# Ajith A — Senior Infrastructure & HPC Engineer Portfolio

A modern, high-performance, responsive portfolio website showcasing 8+ years of enterprise infrastructure, High-Performance Computing (HPC), Linux administration, and cloud orchestration experience.

🌐 **Live Website:** [ajithtech.site](https://ajithtech.site/)

---

## ⚡ Tech Stack & Architecture

- **Core:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Animations & Interactivity:** [GSAP](https://gsap.com/) (ScrollTrigger, Draggable), [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
- **Typography:** Bricolage Grotesque, Caveat, DM Sans via `@fontsource`
- **Hosting & Edge Delivery:** [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 🚀 Local Development

### Prerequisites
- Node.js `20.19+` or `22+`
- npm `10+`

### Setup & Run
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## ☁️ Cloudflare Pages Deployment

This project is fully optimized for **Cloudflare Pages**:

| Setting | Value |
|---|---|
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` |
| **Node.js version** | `20.19.0` (set via `.node-version`) |

### Edge Routing & Headers
- `public/_redirects`: Configures client-side SPA routing (`/* -> /index.html 200`) and preserves `/studio/*` sub-routes.
- `public/_headers`: Enforces security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) and aggressive CDN caching for immutable hashed assets.

---

## 📁 Project Structure

```
├── public/                 # Static assets copied to dist during build
│   ├── _headers            # Cloudflare Pages security & caching headers
│   ├── _redirects          # Cloudflare Pages SPA fallback & route rewrites
│   ├── Ajith_A_Resume.docx # Downloadable Resume document
│   ├── Ajith_A_Resume.pdf  # Downloadable Resume PDF
│   ├── favicon.svg         # Site favicon
│   ├── img/                # Profile photos, faces, and UI stickers
│   └── studio/             # Interactive 3D studio experience
├── src/                    # Source code
│   ├── components/         # React components (Hero, About, Work, Journey, Skills, Milestones, Contact)
│   ├── lib/                # Motion helpers (GSAP/Lenis) & brand vector icons
│   ├── styles/             # Global CSS and responsive design system
│   ├── App.jsx             # Root application component
│   ├── data.js             # Portfolio content, projects, experience, and contact data
│   └── main.jsx            # Application entry point
├── .gitignore              # Production git ignore configuration
├── .node-version           # Target Node.js version for CI/CD
├── index.html              # HTML entry point with metadata & SEO tags
├── package.json            # Project manifest & scripts
├── package-lock.json       # Exact lockfile for deterministic builds
└── vite.config.js          # Vite build configuration
```

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
