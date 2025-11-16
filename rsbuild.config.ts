import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'AI Wiki - 智能投资研究知识库',
    meta: {
      description:
        'AI Wiki 是一个专注于 ETF 投资策略、市场分析和长期价值研究的智能投资研究知识库。提供实时搜索、筛选和浏览投资相关文章与分析。',
      keywords:
        '投资研究,ETF,股票分析,市场分析,投资策略,美股,港股,A股,加密货币,价值投资,长期投资',
      author: 'AI Wiki',
      'og:title': 'AI Wiki - 智能投资研究知识库',
      'og:description':
        'AI Wiki 是一个专注于 ETF 投资策略、市场分析和长期价值研究的智能投资研究知识库。',
      'og:type': 'website',
      'og:url': 'https://github.com/xdlrt/ai-wiki',
      'twitter:card': 'summary',
      'twitter:title': 'AI Wiki - 智能投资研究知识库',
      'twitter:description':
        'AI Wiki 是一个专注于 ETF 投资策略、市场分析和长期价值研究的智能投资研究知识库。',
      viewport: 'width=device-width, initial-scale=1.0',
    },
  },
});
