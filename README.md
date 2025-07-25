# Shaky Shell Portfolio

A modern, responsive personal portfolio and blog built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), inspired by the [astro-aria](https://github.com/ccbikai/astro-aria) template.

## ✨ Overview

This project is a personal website for showcasing your projects, writing blog posts, and sharing your professional journey. It is designed for developers, designers, and creatives who want a fast, accessible, and beautiful online presence.

- **Framework:** Astro 4
- **Styling:** Tailwind CSS
- **Content:** Markdown & JSON collections
- **Type Checking & Linting:** TypeScript, Biome

## 🚀 Features

- **Home:** Introduction, skills, and quick links
- **Projects:** Highlight your best work with images and descriptions
- **Blog:** Write and share articles using Markdown
- **About:** Share your background, experience, and contact info
- **Responsive:** Looks great on all devices
- **Dark Mode:** Seamless light/dark theme
- **Easy Customization:** Update content via JSON and Markdown files

## 📂 Project Structure

```
portfoliome/
├── public/                # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/            # CSS and JS
│   ├── collections/       # Projects, menu, experiences (JSON)
│   ├── components/        # Astro components (UI, layout)
│   ├── content/
│   │   └── post/          # Blog posts (Markdown)
│   ├── layouts/           # Main and post layouts
│   └── pages/             # Pages (index, about, projects, posts)
├── astro.config.mjs       # Astro config
├── tailwind.config.mjs    # Tailwind config
├── package.json           # Project metadata & scripts
└── ...
```

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YessinEleuchi/portfoliome.git
   cd portfoliome
   ```
2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:4321](http://localhost:4321)

### Build for Production

```bash
pnpm build
# or
npm run build
# or
yarn build
```

## 📝 Customization

- **Projects:** Edit `src/collections/projects.json` to add or update your projects.
- **Blog Posts:** Add Markdown files to `src/content/post/`.
- **Menu:** Edit `src/collections/menu.json` for navigation links.
- **About:** Update `src/pages/about.astro` with your bio and contact info.
- **Images:** Place images in `public/assets/images/` and reference them in your content.

## 📦 Scripts

- `pnpm dev` — Start local dev server
- `pnpm build` — Build for production
- `pnpm preview` — Preview production build
- `pnpm check` — Lint and type-check

## 📄 License

This project is licensed under the [Apache-2.0 License](LICENSE).

## 🙋‍♂️ Author & Contact

**Yessine Eleuchi**  
Computer Engineering Student, Tunisia

- [𝕏 (Twitter)](https://x.com/EleuchiYessin)
- Email: yessineleuchi.embedded@gmail.com

---

> Inspired by [astro-aria](https://github.com/ccbikai/astro-aria). Built with ❤️ using Astro and Tailwind CSS. 