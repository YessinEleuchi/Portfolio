# Yessine Eleuchi — Software Engineer Portfolio

Personal portfolio built with **Astro**, **TypeScript**, and **Tailwind CSS**.

It showcases my software engineering projects, technical writing, experience, and work across full-stack development, backend systems, and applied AI.

---

## Overview

This portfolio is designed as a simple, fast, and accessible way to explore my work as a Software Engineer.

It includes:

- Selected software engineering projects
- Technical articles and engineering notes
- Technologies and areas I work with
- Professional background
- CV and contact links
- Responsive design
- Light and dark themes

---

## Tech Stack

- **Astro**
- **TypeScript**
- **Tailwind CSS**
- **Markdown**
- **JSON Content Collections**
- **Biome**

---

## Features

### Home

A concise introduction to my profile, core technologies, engineering focus, and featured work.

### Projects

A collection of projects covering areas such as:

- Full-Stack Engineering
- Frontend Development
- Backend Development
- REST APIs
- Database Design
- Asynchronous Processing
- Software Architecture
- Applied AI
- RAG / LLM Integration
- Document Processing
- Computer Vision
- DevOps
- CI/CD

### Engineering Notes

Technical articles about problems, engineering decisions, experiments, architecture, performance, and lessons learned while building software.

### About

More information about my background, engineering interests, experience, and technologies I work with.

### Dark Mode

Support for light and dark themes with a clean and minimal interface.

### Responsive Design

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

---

## Project Structure

```text
portfoliome/
├── public/
│   └── assets/
│       └── images/
│
├── src/
│   ├── assets/
│   ├── collections/
│   │   ├── projects.json
│   │   ├── menu.json
│   │   └── ...
│   │
│   ├── components/
│   │   ├── home/
│   │   └── ...
│   │
│   ├── content/
│   │   └── post/
│   │
│   ├── layouts/
│   │   ├── main.astro
│   │   └── ...
│   │
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── projects/
│       ├── posts/
│       └── ...
│
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Requirements

Make sure you have installed:

- Node.js 18+
- pnpm, npm, or yarn

### Clone the Repository

```bash
git clone https://github.com/YessinEleuchi/portfoliome.git
cd portfoliome
```

### Install Dependencies

Using pnpm:

```bash
pnpm install
```

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

### Start the Development Server

Using pnpm:

```bash
pnpm dev
```

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

The application will be available at:

```
http://localhost:4321
```

### Production Build

Create a production build:

```bash
pnpm build
```

or:

```bash
npm run build
```

Preview the production build locally:

```bash
pnpm preview
```

or:

```bash
npm run preview
```

---

## Content Management

Most portfolio content can be updated without modifying the main UI components directly.

### Projects

Projects are managed from:

```
src/collections/projects.json
```

Add or update project information such as:

- Title
- Description
- Technologies
- Images
- GitHub links
- Demo links
- Project details

### Engineering Notes / Blog

Technical articles are stored in:

```
src/content/post/
```

Create a new Markdown file for each article.

Example:

```
src/content/post/postgresql-indexes.md
```

### Navigation

Navigation links can be managed from:

```
src/collections/menu.json
```

### About Page

Update personal and professional information in:

```
src/pages/about.astro
```

### Images

Static images are stored in:

```
public/assets/images/
```

They can be referenced using:

```
/assets/images/example.png
```

---

## Available Scripts

### Development

```bash
pnpm dev
```

Starts the local development server.

### Build

```bash
pnpm build
```

Creates an optimized production build.

### Preview

```bash
pnpm preview
```

Runs the production build locally.

### Check

```bash
pnpm check
```

Runs project checks and static analysis.

---

## Engineering Focus

The portfolio reflects my main areas of interest as a Software Engineer.

### Product Engineering

Building end-to-end web applications from user interfaces to backend systems and production deployment.

### Backend & Systems

Working with:

- REST APIs
- PostgreSQL
- Redis
- Authentication
- Database design
- Background jobs
- Asynchronous processing
- Software architecture
- Docker
- CI/CD

### Applied AI

Building software that integrates AI capabilities such as:

- Large Language Models
- Retrieval-Augmented Generation
- Vector databases
- Document processing
- Automation
- Computer vision

---

## Core Technologies

### Languages

- TypeScript
- JavaScript
- Python
- Java
- SQL

### Frontend

- React
- Next.js
- Angular
- Astro
- Tailwind CSS

### Backend

- Node.js
- NestJS
- FastAPI
- Express.js
- Spring Boot

### Databases & Storage

- PostgreSQL
- MongoDB
- SQL Server
- Redis
- Qdrant
- MinIO

### AI

- LLM Integration
- RAG
- Ollama
- Qdrant
- Prompt Engineering
- Document Processing
- Computer Vision

### DevOps & Tools

- Docker
- Git
- GitHub
- GitLab
- GitHub Actions
- Jenkins
- CI/CD

---

## Design

The interface follows a minimal and content-first design focused on:

- Readability
- Performance
- Simplicity
- Accessibility
- Responsive layouts
- Clear presentation of technical work

The original structure was inspired by the open-source astro-aria project and has since been customized and extended for my personal portfolio.

---

## Performance

Astro is used to keep the website lightweight and fast by minimizing unnecessary client-side JavaScript.

The project aims to maintain:

- Fast initial loading
- Optimized static assets
- Responsive images
- Minimal JavaScript
- Accessible navigation
- SEO-friendly pages

---

## License

This project is licensed under the Apache-2.0 License.

---

## Author

**Yessine Eleuchi**

Software Engineer

Full-Stack · Backend Systems · Applied AI

### Connect

- [LinkedIn](https://www.linkedin.com/in/eleuchi-yessin1/)
- [GitHub](https://github.com/YessinEleuchi)

---

Built with Astro, TypeScript, and Tailwind CSS.