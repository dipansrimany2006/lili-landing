# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun dev` - Start development server (uses Next.js with Turbopack)
- `bun build` - Build for production
- `bun lint` - Run ESLint
- `bun start` - Start production server

## Architecture

This is a Next.js 15 landing page for LiliPad, a Web3 Aptos launchpad. Uses Bun as the package manager.

### Key Technologies
- **Next.js 15** with App Router (`src/app/`)
- **React Three Fiber** for WebGL particle background
- **Radix UI + shadcn/ui** for components (`src/components/ui/`)
- **Tailwind CSS v4** for styling
- **Leva** for runtime shader parameter debugging (hidden in production)

### Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/
│   ├── gl/        # WebGL particle system (R3F)
│   │   ├── shaders/   # Custom GLSL shader materials
│   │   ├── particles.tsx   # GPU particle simulation
│   │   └── index.tsx       # Canvas setup with post-processing
│   └── ui/        # shadcn/ui components
├── contexts/      # React contexts (e.g., HeroBgContext for particle interaction)
└── lib/           # Utility functions (cn helper)
```

### WebGL Particle System

The hero background uses a GPU-based particle simulation via Frame Buffer Objects (FBO):
- `SimulationMaterial` - Computes particle positions on GPU using noise
- `DofPointsMaterial` - Renders particles with depth-of-field effect
- `VignetteShader` - Post-processing vignette effect
- Particle behavior responds to hover state via `HeroBgContext`

### Path Aliases
- `@/*` maps to `./src/*`

### Styling Notes
- Uses Poppins font via `next/font/google`
- Dark theme forced via `next-themes`
- Tailwind uses `tailwindcss-animate` for animations