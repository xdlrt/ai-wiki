# AGENTS.md

You are an expert in JavaScript, TypeScript, React, Rsbuild, and web application development. You write maintainable, performant, and accessible code.

## Project Overview

**AI Wiki** is an intelligent investment research library and knowledge base focused on ETF investment strategies, market analysis, and long-term value research. It's a React-based web application that provides a fast, elegant interface for browsing and searching investment-related articles and analyses.

### Key Features

- **Real-time Search & Filtering**: Instant client-side filtering by title, description, tags, market, and investment type
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, elegant design built with Tailwind CSS and Font Awesome icons
- **State Management**: Uses MobX for reactive state management
- **Type Safety**: Full TypeScript support throughout the codebase
- **Fast Build**: Powered by Rsbuild (Rspack) for fast development and production builds

## Tech Stack

### Core Technologies
- **React 19.2.0** - UI framework
- **TypeScript 5.9.3** - Type safety
- **MobX 6.15.0** - State management
- **Rsbuild 1.6.4** - Build tool (Rspack-based)
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Font Awesome 7.1.0** - Icon library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## Project Structure

```
ai-wiki/
├── src/
│   ├── components/          # React components
│   │   ├── Card.tsx         # Article card component
│   │   ├── FilterBar.tsx    # Filter controls
│   │   ├── FilterButton.tsx # Individual filter button
│   │   ├── FilterGroup.tsx  # Filter group wrapper
│   │   ├── Nav.tsx          # Navigation component
│   │   └── ResultsCount.tsx # Results counter
│   ├── data/
│   │   └── cards.ts         # Article data and helper functions
│   ├── stores/
│   │   ├── RootStore.ts     # MobX store for global state
│   │   └── index.ts         # Store exports
│   ├── types/
│   │   └── card.ts          # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   ├── App.css              # Global styles
│   └── index.tsx            # Application entry point
├── public/
│   └── investment/          # Static HTML articles
├── rsbuild.config.ts        # Rsbuild configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Commands

### Development
- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally

### Code Quality
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code using Prettier

## Architecture

### State Management (MobX)

The application uses MobX for reactive state management. The `RootStore` class manages:

- **Search State**: `searchQuery` - Current search text
- **Filter State**: 
  - `currentMarket` - Selected market filter ('all' | 'us-stock' | 'a-share' | 'hk-stock' | 'crypto')
  - `currentType` - Selected type filter ('all' | 'stock' | 'etf' | 'crypto' | 'strategy')
- **UI State**: `isLoading`, `error`

Key methods:
- `filterCards(cards: CardData[])` - Filters cards based on current search and filter state
- `setSearchQuery(query: string)` - Updates search query
- `setCurrentMarket(market)` - Updates market filter
- `setCurrentType(type)` - Updates type filter
- `resetFilters()` - Resets all filters to default

### Data Model

**CardData Interface** (`src/types/card.ts`):
```typescript
interface CardData {
  title: string;           // Article title
  desc: string;            // Article description
  href: string;            // Path to article HTML file
  category: string;         // Article category
  tags: string[];          // Searchable tags
  updatedAt: string;       // Last update date (format: 'YYYY-MM')
  market: 'us-stock' | 'a-share' | 'hk-stock' | 'crypto';
  type: 'stock' | 'etf' | 'crypto' | 'strategy';
}
```

### Component Architecture

1. **App.tsx** - Main application component
   - Uses MobX `observer` for reactivity
   - Renders Nav, FilterBar, ResultsCount, and Card grid
   - Handles empty state display

2. **FilterBar.tsx** - Filter controls
   - Market filter: All, A股, 美股, 港股
   - Type filter: All, ETF, 个股
   - Uses FilterGroup and FilterButton components

3. **Card.tsx** - Article card display
   - Shows article metadata (title, description, tags, update date)
   - Displays market and type badges with color coding
   - Links to article HTML files

4. **RootStore** - Centralized state management
   - Reactive filtering logic
   - Search matching across title, description, category, and tags

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Gradient backgrounds and animations in `App.css`
- **Responsive Design**: Mobile-first approach with breakpoints (sm, lg)
- **Color Scheme**: 
  - US Stock: Blue (`bg-blue-50 text-blue-600`)
  - A-Share: Red (`bg-red-50 text-red-600`)
  - HK Stock: Green (`bg-green-50 text-green-600`)
  - Crypto: Yellow (`bg-yellow-50 text-yellow-600`)

## Adding New Content

To add a new article:

1. **Create HTML file**: Add a new HTML file in `public/investment/` directory
2. **Update cards data**: Add a new entry to `src/data/cards.ts`:
   ```typescript
   {
     title: 'Article Title',
     desc: 'Article description',
     href: '/investment/your-file.html',
     category: 'Investment',
     tags: ['tag1', 'tag2'],
     updatedAt: '2025-01',
     market: 'us-stock',  // or 'a-share', 'hk-stock', 'crypto'
     type: 'etf'          // or 'stock', 'crypto', 'strategy'
   }
   ```

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Define interfaces for data structures
- Avoid `any` types; use proper type definitions

### React
- Use functional components with hooks
- Use MobX `observer` HOC for components that use store data
- Keep components focused and single-purpose
- Use proper key props for list items

### State Management
- All global state should be in `RootStore`
- Use MobX `makeAutoObservable` for reactive stores
- Access store via `rootStore` singleton

### Styling
- Prefer Tailwind utility classes
- Use semantic class names when custom CSS is needed
- Maintain responsive design principles

### File Organization
- Components in `src/components/`
- Data and utilities in `src/data/`
- Types in `src/types/`
- Stores in `src/stores/`

## Build Configuration

### Rsbuild
- Configuration in `rsbuild.config.ts`
- Uses React plugin for JSX/TSX support
- Fast builds powered by Rspack

### TypeScript
- Configuration in `tsconfig.json`
- Strict mode enabled
- React JSX support

### Tailwind
- Configuration in `tailwind.config.js`
- PostCSS processing via `@tailwindcss/postcss`

## Documentation References

- **Rsbuild**: https://rsbuild.rs/llms.txt
- **Rspack**: https://rspack.rs/llms.txt
- **MobX**: https://mobx.js.org/
- **React**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs

## Best Practices

1. **Performance**
   - Use React.memo for expensive components if needed
   - MobX automatically optimizes re-renders
   - Filter operations are efficient and run on client-side

2. **Accessibility**
   - Use semantic HTML elements
   - Provide proper ARIA labels when needed
   - Ensure keyboard navigation works

3. **Maintainability**
   - Keep components small and focused
   - Use TypeScript for type safety
   - Follow consistent naming conventions
   - Document complex logic

4. **Testing Considerations**
   - Components are pure and testable
   - Store logic can be tested independently
   - Filter functions are pure and predictable
