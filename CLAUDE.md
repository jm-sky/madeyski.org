# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is an Astro project using pnpm as the package manager. All commands should be run from the project root:

- `pnpm install` - Install dependencies
- `pnpm run dev` - Start development server at localhost:4321
- `pnpm run build` - Build production site to ./dist/
- `pnpm run preview` - Preview production build locally
- `pnpm run astro` - Access Astro CLI commands

## Architecture

This is a personal website built with Astro and styled with Tailwind CSS v4. The project follows a component-based architecture:

### Core Structure
- **Layout**: Single main layout (`src/layouts/Layout.astro`) that provides the base structure with background effects, navigation, and content container
- **Components**: Reusable UI components in `src/components/` including gradient effects, navigation, and decorative elements
- **Pages**: Static pages in `src/pages/` (index, about, contact)
- **Styling**: Global styles in `src/styles/global.css` with Tailwind CSS integration

### Key Design Elements
- **Background System**: Multi-layered gradient background using HorizonGradient, RainbowGradient, and LightCircles components
- **Content Container**: Glassmorphism effect with `bg-white/60 backdrop-blur-lg` for main content areas
- **Tailwind v4**: Uses the new Tailwind CSS v4 with `@reference "tailwindcss"` syntax in component styles

### Styling Patterns
- Components use scoped `<style>` blocks with `@reference "tailwindcss"`
- Custom utilities defined in global.css (e.g., `.underline-link` for hover effects)
- CSS custom properties for theming (`--color-primary`)
- View transitions enabled for smooth page navigation

### Component Architecture
- All visual components are self-contained Astro components
- Background effects are layered: HorizonGradient → RainbowGradient → LightCircles → content
- Navigation and footer are separate reusable components
- LogoText component handles site branding

## Configuration Notes
- Uses pnpm workspaces (pnpm-workspace.yaml)
- TypeScript with Astro's strict configuration
- Tailwind CSS v4 integrated via Vite plugin
- No linting or testing commands configured