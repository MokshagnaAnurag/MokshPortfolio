# Mokshagna Anurag Kankati — Engineering Portfolio

A quiet, editorial portfolio showcasing embedded systems, robotics, aerospace, and AI-driven engineering.

---

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (SSR-capable React framework)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Animation**: [Framer Motion](https://www.framer.com/motion)
- **Icons**: [Lucide React](https://lucide.dev)
- **Language**: TypeScript
- **Package Manager**: [Bun](https://bun.sh)
- **Build Tool**: [Vite](https://vitejs.dev)

---

## Features

- ⚡ SSR-ready with TanStack Start
- 🎨 Elegant dark editorial design with subtle animations
- 📱 Fully responsive across all screen sizes
- 🤖 Interactive CPU/OBC Architecture SVG with animated signal paths
- 📡 Systems diagnostics telemetry readout card in the Hero section
- 🗂 Accordion-based interactive experience timeline
- 🔍 Filterable project archive with search
- 📬 Contact section with direct email, GitHub, and LinkedIn links

---

## Sections

| Section | Description |
|---|---|
| Hero | Full-name display, systems status badge, open-to-roles indicator |
| Selected Work | Featured projects grid + searchable archive |
| Experience | Accordion-based work history (11 roles) |
| Education | Academic foundations timeline |
| About | Biography, areas of interest, ECE credentials |
| Skills | Capability architecture grid + honors & distinctions |
| Contact | Direct contact links and availability |

---

## Local Development

### Prerequisites

- [Bun](https://bun.sh) (package manager)
- Node.js ≥ 22

### Setup

```bash
# Clone the repo
git clone https://github.com/MokshagnaAnurag/MokshPortfolio.git
cd MokshPortfolio

# Install dependencies
bun install

# Start development server
bun run dev
```

The dev server runs at `http://localhost:5173`.

### Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── portfolio/      # Page sections (Hero, Experience, Skills, etc.)
│   └── ui/             # Reusable shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions (cn, etc.)
├── routes/             # TanStack Router file-based routes
├── styles.css          # Global CSS with Tailwind + custom design tokens
├── router.tsx          # Router configuration
├── server.ts           # SSR server entry (Cloudflare Workers compatible)
└── start.ts            # TanStack Start entry point
```

---

## Connect

- **Email**: kankati.mokshagnaanurag@gmail.com
- **GitHub**: [github.com/MokshagnaAnurag](https://github.com/MokshagnaAnurag)
- **LinkedIn**: [linkedin.com/in/kankati-mokshagna-anurag](https://linkedin.com/in/kankati-mokshagna-anurag)

---

## License

MIT © Mokshagna Anurag Kankati
