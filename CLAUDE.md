# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/developer website built with React, TypeScript, Vite, and Tailwind CSS v4. The application uses React Router for client-side routing and is configured for deployment on Vercel.

## Development Commands

### Running the Application
- `pnpm dev` - Start development server with hot module replacement
- `pnpm preview` - Preview production build locally

### Building
- `pnpm build` - Type-check with TypeScript and build for production
  - Runs `tsc -b` (TypeScript compilation) followed by `vite build`
  - Output goes to `dist/` directory

### Code Quality
- `pnpm lint` - Run ESLint on all TypeScript/React files

## Architecture

### Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7 with `@vitejs/plugin-react` (uses Babel for Fast Refresh)
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin)
- **Routing**: React Router v7 with BrowserRouter
- **Package Manager**: pnpm

### Application Structure

```
src/
├── main.tsx          # App entry point, renders App with BrowserRouter
├── App.tsx           # Root component with routes and layout
├── index.css         # Tailwind CSS import
├── components/       # Shared UI components
│   ├── Header.tsx    # Mobile header (hidden on lg+ screens)
│   └── Sidebar.tsx   # Desktop sidebar navigation (visible on lg+ screens)
└── pages/            # Route-level page components
    ├── HomePage.tsx
    └── AboutPage.tsx
```

### Routing Architecture

Routes are defined in `App.tsx` using React Router's declarative `<Routes>` component:
- `/` - HomePage
- `/about` - AboutPage
- `/projects` - Placeholder (not yet implemented as separate component)

Navigation is handled by two responsive components:
- **Header**: Mobile/tablet navigation (visible below lg breakpoint)
- **Sidebar**: Desktop navigation (visible at lg breakpoint and above)

Both components share the same navigation links but use different layouts.

### Layout System

The main App layout uses Tailwind's flex utilities for responsive design:
- Mobile/tablet: Column layout (`flex-col`) with sticky Header
- Desktop (lg+): Row layout (`flex-row`) with fixed Sidebar
- Sidebar uses `sticky` positioning with `h-dvh` for full viewport height

### Styling Approach

Uses Tailwind CSS v4 with the Vite plugin for automatic CSS processing. The `index.css` file only imports Tailwind - all styling is done via utility classes in components.

## Deployment

Configured for Vercel deployment with SPA fallback routing via `vercel.json`. The rewrites configuration ensures all non-file routes redirect to `index.html` for client-side routing to work correctly.

## TypeScript Configuration

Uses TypeScript project references:
- `tsconfig.json` - Root config with references to app and node configs
- `tsconfig.app.json` - Application source code configuration
- `tsconfig.node.json` - Build tooling (Vite config) configuration

## ESLint Configuration

Uses flat config format (`eslint.config.js`) with:
- Recommended JavaScript rules
- TypeScript ESLint recommended rules
- React Hooks plugin (recommended config)
- React Refresh plugin (Vite config)
- Browser globals
- `dist/` directory ignored
