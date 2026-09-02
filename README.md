# Rafael Dela Paz — Portfolio

A modern, responsive portfolio website showcasing the projects and skills of Rafael Dela Paz, an IT student and developer.

## 🌟 Features

- **Modern Design**: Built with React, TypeScript, and TailwindCSS for a clean, contemporary interface
- **Responsive Layout**: Fully responsive design that works seamlessly on all device sizes
- **Theme Support**: Dark and light theme options using CSS custom properties
- **UI Components**: Extensive component library from shadcn/ui including:
  - Accordions, alerts, buttons, cards, modals, dialogs
  - Forms, navigation menus, tabs, tooltips, and more
- **Fast Performance**: Vite-powered build tool for optimized development and production builds
- **Type Safe**: Full TypeScript support for enhanced code reliability
- **Testing**: Unit and integration tests with Vitest

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS + PostCSS
- **UI Components**: shadcn/ui (Radix UI based)
- **Routing**: React Router
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form
- **Testing**: Vitest
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components (Index, NotFound)
└── test/               # Test files

public/
├── css/                # Stylesheets (themes, styles)
├── js/                 # Client-side scripts
└── works/              # Project showcases (citizenregistry, ndgm-cams, trafficslight, travelit)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd delapaz-portfolio-main
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using bun
bun install
```

### Development

Start the development server:
```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
# or
bun run build
```

Development build:
```bash
npm run build:dev
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## 🧪 Testing

Run tests:
```bash
npm run test
```

Watch mode for development:
```bash
npm run test:watch
```

## 📋 Linting

Check code quality:
```bash
npm run lint
```

## 📄 Pages

- **Home** (`/`) - Main landing page
- **About** (`/about.html`) - About Rafael Dela Paz
- **Portfolio** (`/portfolio.html`) - Showcase of projects
- **Contact** (`/contact.html`) - Contact information

## 🎨 Theme System

The portfolio supports multiple themes through CSS custom properties. Theme files are located in:
- `public/css/themes.css` - Theme definitions
- `public/css/style.css` - Main styles

## 🔧 Configuration Files

- **vite.config.ts** - Vite configuration
- **tailwind.config.ts** - TailwindCSS customization
- **tsconfig.json** - TypeScript configuration
- **eslint.config.js** - ESLint rules
- **components.json** - Component library configuration

## 📦 Dependencies

Key dependencies include:
- React & React Router
- TailwindCSS
- Radix UI (shadcn/ui components)
- React Hook Form & Zod validation
- TanStack React Query
- date-fns
- Embla Carousel

For the complete dependency list, see `package.json`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request.

## 📄 License

This project is private/personal. For usage inquiries, please contact Rafael Dela Paz.

## 👨‍💻 Author

**Rafael Dela Paz**
- Portfolio: [delapaz.me](https://delapaz.me)
- IT Student at PLV
- Developer & Tech Enthusiast
