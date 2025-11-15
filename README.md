# AI Wiki - Intelligent Investment Research Library

A fast, elegant, and modern investment research library and knowledge base focused on ETF investment strategies, market analysis, and long-term value research. Built with React, TypeScript, and Rsbuild for optimal performance and developer experience.

## ✨ Features

- **⚡️ Lightning Fast**: Powered by Rsbuild (Rspack) for fast development and production builds.
- **🔍 Real-time Search & Filtering**: Instant client-side filtering by title, description, tags, market, and investment type.
- **📱 Responsive Design**: Perfectly adapted for both desktop and mobile devices with a mobile-first approach.
- **🎨 Elegant UI**: Modern, clean design built with Tailwind CSS 4.x and Font Awesome icons.
- **🔄 Reactive State Management**: Uses MobX for efficient, reactive state management.
- **💪 Type Safety**: Full TypeScript support throughout the codebase for better maintainability.
- **♿️ Accessible**: Semantic HTML and proper ARIA labels for accessibility.

## 🛠️ Tech Stack

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

## 🚀 Local Development

### Prerequisites

- **Node.js** 18+ and **pnpm** (or npm)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/xdlrt/ai-wiki.git
   cd ai-wiki
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
   The development server will automatically open in your browser at `http://localhost:3000` (or the next available port).

### Available Scripts

- `pnpm dev` - Start the development server with hot reload
- `pnpm build` - Build the app for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint to check code quality
- `pnpm format` - Format code using Prettier

## 📁 Project Structure

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

## 🤝 How to Contribute

Contributions are welcome via Pull Request!

1. **Fork this repository**

2. **Create content file**
   Create a new `.html` file in the `public/investment/` directory for your analysis content. You can refer to existing files as templates.

3. **Update cards data**
   Open `src/data/cards.ts` and add a new entry to the `cardsData` array. Make sure to include all required fields:

   ```typescript
   {
     title: 'Your Article Title',
     desc: 'Your article description',
     href: '/investment/your-new-file.html',
     category: 'Investment',
     tags: ['new-tag1', 'new-tag2'],
     updatedAt: '2025-01',
     market: 'us-stock',  // or 'a-share', 'hk-stock', 'crypto'
     type: 'etf'          // or 'stock', 'crypto', 'strategy'
   }
   ```

4. **Run linting and formatting**
   ```bash
   pnpm lint
   pnpm format
   ```

5. **Submit Pull Request**
   Submit your changes and wait for review and merge.

## 📄 License

This project is open source under the [MIT License](LICENSE).