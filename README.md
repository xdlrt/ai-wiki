# AI Wiki - Intelligent Investment Research Library

A minimalist, fast, and elegant static knowledge base focused on ETF investment strategies, market analysis, and long-term value research. Built with a "zero-build, single-file" philosophy for ultimate loading speed and smooth user experience.

## ✨ Features

- **⚡️ Lightning Fast**: No frameworks, zero build process, pure static pages for ultimate performance.
- **🔍 Real-time Search**: Instant client-side filtering by title, description, and tags for millisecond-level content discovery.
- **📱 Responsive Design**: Perfectly adapted for both desktop and mobile devices for easy access anywhere.
- **🎨 Elegant UI**: Modern, clean design based on Tailwind CSS with smooth micro-interactions.
- **💡 Minimalist Architecture**: Core functionality driven by a single `index.html` file, no complex environment setup required, easy to maintain and extend.
- **♿️ Accessible**: Supports keyboard navigation and `\u003cnoscript\u003e` fallback to ensure core content accessibility.

## 🛠️ Tech Stack

- **HTML5**
- **Tailwind CSS** (loaded via CDN)
- **Font Awesome** (loaded via CDN)
- **Vanilla JavaScript** (no frontend frameworks)
- **Vercel** (for static deployment)

## 🚀 Local Development

This project requires no build steps or dependency installation.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/ai-wiki.git
    cd ai-wiki
    ```

2.  **Open directly**
    Simply open the `index.html` file in your browser.

3.  **Use local server (recommended)**
    For the best experience (especially regarding browser security policies), we recommend starting a local HTTP server.
    ```bash
    python3 -m http.server 8000
    ```
    Then visit `http://localhost:8000`.

## 🤝 How to Contribute

Contributions are welcome via Pull Request! Due to the project's minimalist nature, the contribution process is equally simple:

1.  **Fork this repository**

2.  **Create content file**
    Create a new `.html` file in the `investment/` directory for your analysis content. You can refer to existing files as templates.

3.  **Update index**
    Open the root `index.html` file and add an object pointing to your new page in the `cardsData` array within the `\u003cscript\u003e` tag. Make sure to include `title`, `desc`, `href`, `category`, `tags`, and `updatedAt` fields.

    ```javascript
    const cardsData = [
        // ... existing entries
        {
            title: 'Your Article Title',
            desc: 'Your article description',
            href: 'investment/your-new-file.html',
            category: 'Investment',
            tags: ['new-tag1', 'new-tag2'],
            updatedAt: '2025-11'
        }
    ];
    ```

4.  **(Optional) Update No-Script fallback**
    To ensure content remains accessible in JavaScript-disabled environments, add a simple `\u003ca\u003e` link for your new page in the `index.html` `\u003cnoscript\u003e` section.

5.  **Submit Pull Request**
    Submit your changes and wait for review and merge.

## 📄 License

This project is open source under the [MIT License](LICENSE).