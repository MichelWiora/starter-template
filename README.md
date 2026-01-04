# My React Starter

A modern React starter template with TanStack Router, Tailwind CSS, Better Auth, and Convex.

## 🚀 Quick Start with degit

Create a new project in seconds using [degit](https://github.com/Rich-Harris/degit):

```bash
# Create new project in a new folder
npx degit MichelWiora/starter-template my-new-project

# Or initialize in current folder
npx degit MichelWiora/starter-template .

cd my-new-project
npm install
npm run dev
```

That's it! Your new React project is ready at http://localhost:3000

## Technologies

- **TanStack Router** - File-based routing with SSR support
- **TanStack Query** - Powerful data fetching
- **Tailwind CSS** - Utility-first styling
- **Better Auth** - Authentication solution
- **Convex** - Backend as a service (optional)
- **React 19** - Latest React version
- **TypeScript** - Type safety

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Convex (if using Convex backend)
CONVEX_DEPLOYMENT=
```

### 3. Set Up Convex (Optional)

If you want to use Convex backend:

1. Go to [convex.dev](https://convex.dev) and create a new project
2. Copy your deployment URL
3. Add it to `.env.local` as `CONVEX_DEPLOYMENT`
4. Run:
```bash
npx convex dev
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests with Vitest

## Project Structure

```
src/
├── components/      # Reusable UI components
│   └── ui/         # Base UI components (buttons, cards, etc.)
├── lib/            # Utility functions
├── routes/         # File-based routing
│   ├── __root.tsx # Root layout
│   └── *.tsx       # Individual routes
└── styles.css      # Global styles
```

## Adding New Routes

Create a new file in `src/routes/` - TanStack Router will automatically generate it:

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/new-route')({
  component: NewRoute,
})

function NewRoute() {
  return <div>New Route</div>
}
```

Navigate with:
```tsx
import { Link } from "@tanstack/react-router";
<Link to="/new-route">Go to New Route</Link>
```

## Styling

This project uses Tailwind CSS. Add classes directly to your elements:

```tsx
<div className="p-4 bg-blue-500 text-white rounded-lg">
  Hello Tailwind!
</div>
```

## Authentication

This template includes Better Auth. To configure:

1. Update `src/lib/auth-server.ts` with your auth provider
2. Update `src/lib/auth-client.ts` for client-side auth
3. Configure your auth provider (Google, GitHub, email/password, etc.)

## Testing

Run tests with:
```bash
npm run test
```

Tests are located in `src/**/*.test.tsx` or `src/**/*.test.ts`.

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Customize This Template

This is YOUR starter template! Feel free to:
- Add your favorite UI components to `src/components/ui/`
- Set up your preferred auth providers
- Add helper functions to `src/lib/`
- Adjust Tailwind config in `tailwind.config.js`
- Modify the routing structure

### Fork and Modify

Want to create your own version? Simply fork this repository and customize it for your needs. Then use it with degit:

```bash
npx degit YOUR-username/your-starter-template my-project
```

## License

MIT - Feel free to use this template for your projects!

## Learn More

- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Query Docs](https://tanstack.com/query)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Better Auth Docs](https://www.better-auth.com)
- [Convex Docs](https://docs.convex.dev)
