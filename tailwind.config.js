/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#3b82f6',
        accent: '#60a5fa',
        neutral: '#f3f4f6',
        dark: '#1f2937'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'gradient-vertical': 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #cbd5e1 75%, #94a3b8 100%)',
        'gradient-elegant': 'linear-gradient(180deg, #fefefe 0%, #f7f9fc 30%, #eef2f7 60%, #e1e8ef 90%, #d1d9e0 100%)',
        'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      },
      transitionProperty: {
        'all': 'all'
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms'
      },
      transitionTimingFunction: {
        'ease': 'ease'
      },
      textShadow: {
        'sm': '0 2px 4px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
}