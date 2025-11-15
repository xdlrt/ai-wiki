# AI Wiki Technical Stack Documentation

## Project Overview
AI Wiki is a static web-based investment research knowledge base that adopts a minimalist single-file architecture, focusing on providing high-quality investment research content display and navigation functionality.

## Technical Stack Details

### Frontend Technologies
- **HTML5 + CSS3**: Basic web structure and styling
- **Tailwind CSS**: Introduced via CDN (`https://cdn.tailwindcss.com`), providing modern CSS framework support
- **Font Awesome 6.x**: Icon library, providing icon support through CDN
- **Vanilla JavaScript**: No framework dependencies, maintaining minimalist architecture

### Deployment and Configuration
- **Vercel**: Static website hosting platform
- **Vercel Configuration**: `vercel.json` configures SPA routing rewrite rules
- **Zero Build Process**: No packaging or building required, direct static file deployment

### Project Architecture
```
ai-wiki/
├── index.html              # Main page - directory navigation
├── vercel.json             # Vercel deployment configuration
├── .vercelignore           # Vercel ignore file configuration
├── investment/             # Investment research content directory
│   ├── voo_vs_spy.html     # VOO vs SPY comparison analysis
│   ├── us_etf.html         # US ETF investment guide
│   ├── aply-analysis.html  # APLY investment analysis
│   ├── sgov.html           # SGOV investment analysis
│   ├── 007466.html         # Dividend low-volatility ETF analysis
│   └── *.md               # Corresponding Markdown source files
└── .trae/
    └── documents/          # Trae IDE documentation
        └── Minimal homepage and directory card implementation.md
```

## Core Functionality Features

### 1. Responsive Design
- Mobile-first responsive layout
- Tailwind CSS grid system (sm:grid-cols-2, lg:grid-cols-3)
- Adaptive navigation and search interface

### 2. Search and Filtering
- Real-time frontend search functionality
- Supports keyword filtering of titles, descriptions, and tags
- Search result count and no-result prompts

### 3. User Experience Optimization
- Card hover effects and shadow effects
- Keyboard navigation support
- Back-to-top button
- JavaScript fallback solution

### 4. Visual Design
- Custom color scheme (primary: #1e40af, secondary: #3b82f6)
- Gradient background (gradient-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%))
- Fixed card height design (240px)
- Text shadows and transition animations

## Data Management

### Content Organization
- Hard-coded card data array stored in `index.html` JavaScript
- Each entry contains: title, description, link, category, tags, update time
- Supports category display and tag filtering

### Content Types
- **Investment**: Investment research content

## Development Standards

### Code Style
- Follow vanilla JavaScript coding standards
- Use semantic HTML tags
- CSS uses Tailwind utility classes
- Maintain single-file architecture, avoid over-engineering

### Extension Methods
1. When adding new content pages, create HTML files in the `investment/` directory
2. Add corresponding entries in the `cardsData` array in `index.html`
3. Update the no-script fallback link list

## Deployment Instructions

### Vercel Deployment
- Automatic deployment from GitHub repository
- SPA routing configuration ensures all paths point to `index.html`
- Ignores unnecessary files and directories

### Local Development
- Can directly open `index.html` in browser for preview
- Use Python HTTP server for local testing: `python3 -m http.server 8000`

## Performance Optimization

### Loading Optimization
- CDN introduction of external resources, utilizing browser cache
- No build steps, reducing deployment time
- Lightweight JavaScript, no framework dependencies

### User Experience
- Progressive enhancement, supporting JavaScript-free environments
- Responsive images and icons
- Smooth transition animations and interaction feedback

## Future Iteration Suggestions

1. **Content Management**: Consider using JSON files to manage card data for easier maintenance
2. **Theme Switching**: Add dark mode support
3. **Category Filtering**: Implement more complex category and tag filtering functions
4. **Performance Monitoring**: Add simple performance metrics collection
5. **SEO Optimization**: Improve meta tags and structured data

## Important Notes

- This project is a static website with no backend services
- All content updates require manual HTML file modifications
- Investment advice content is for reference only and does not constitute actual investment advice
- Maintain minimalist architecture and avoid introducing unnecessary complexity