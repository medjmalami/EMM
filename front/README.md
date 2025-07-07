# EMM Hardware - React Application

A modern e-commerce website for EMM Hardware built with React, TypeScript, and Tailwind CSS.

## Features

- 🌐 Bilingual support (English/French)
- 🌙 Dark/Light theme toggle
- 📱 Fully responsive design
- 🛍️ Product catalog with detailed views
- 📧 Contact form
- 🎨 Modern UI with shadcn/ui components

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

1. Clone the repository
2. Install dependencies:

\`\`\`bash
# Using npm
npm install

# Using yarn
yarn install

# Using bun
bun install
\`\`\`

3. Start the development server:

\`\`\`bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using bun
bun dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `lint` - Run ESLint

## Project Structure

\`\`\`
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   └── ...
├── contexts/           # React contexts
├── lib/               # Utilities and data
├── pages/             # Page components
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
\`\`\`

## Deployment

The application can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` directory.
