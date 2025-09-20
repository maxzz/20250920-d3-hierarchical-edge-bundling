# D3.js Hierarchical Edge Bundling Monorepo

A modern monorepo showcasing interactive D3.js Hierarchical Edge Bundling visualization built with:

- **pnpm** - Fast, disk space efficient package manager with monorepo support
- **Vite** - Next generation frontend tooling
- **React 19** - Latest React with concurrent features
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **D3.js** - Data-driven documents for visualization

## Getting Started

1. Install pnpm (if not already installed):
   ```bash
   npm install -g pnpm
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start development server:
   ```bash
   pnpm dev
   ```

## Project Structure

```
├── apps/
│   └── web/              # Main React application
├── packages/             # Shared packages (future use)
├── package.json          # Root package.json
└── pnpm-workspace.yaml   # pnpm workspace configuration
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run linting across all packages
- `pnpm type-check` - Run TypeScript type checking

## Features

- 🎯 Interactive Hierarchical Edge Bundling visualization
- 🚀 Modern React 19 with concurrent features
- ⚡ Fast development with Vite HMR
- 🎨 Tailwind CSS v4 for styling
- 📦 Monorepo structure with pnpm workspaces
- 🔍 Full TypeScript support