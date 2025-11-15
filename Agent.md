# AI Wiki 技术栈文档

## 项目概述
AI Wiki 是一个基于静态网页的投资研究知识库，采用极简的单文件架构，专注于提供高质量的投资研究内容展示和导航功能。

## 技术栈详情

### 前端技术
- **HTML5 + CSS3**: 基础的网页结构和样式
- **Tailwind CSS**: 通过 CDN 引入 (`https://cdn.tailwindcss.com`)，提供现代化的 CSS 框架支持
- **Font Awesome 6.x**: 图标库，通过 CDN 引入图标支持
- **原生 JavaScript**: 无框架依赖，保持极简架构

### 部署和配置
- **Vercel**: 静态网站托管平台
- **Vercel 配置**: `vercel.json` 配置 SPA 路由重写规则
- **零构建流程**: 无需打包构建，直接部署静态文件

### 项目架构
```
ai-wiki/
├── index.html              # 主页面 - 目录导航
├── vercel.json             # Vercel 部署配置
├── .vercelignore           # Vercel 忽略文件配置
├── investment/             # 投资研究内容目录
│   ├── voo_vs_spy.html     # VOO vs SPY 对比分析
│   ├── us_etf.html         # 美股ETF投资指南
│   ├── aply-analysis.html  # APLY投资分析
│   ├── sgov.html           # SGOV投资分析
│   ├── 007466.html         # 红利低波ETF分析
│   └── *.md               # 对应的 Markdown 源文件
└── .trae/
    └── documents/          # Trae IDE 文档
        └── 极简首页与目录卡片实现.md
```

## 核心功能特性

### 1. 响应式设计
- 移动端优先的响应式布局
- Tailwind CSS 网格系统 (sm:grid-cols-2, lg:grid-cols-3)
- 自适应导航和搜索界面

### 2. 搜索与过滤
- 实时前端搜索功能
- 支持标题、描述、标签的关键词过滤
- 搜索结果计数和无结果提示

### 3. 用户体验优化
- 卡片悬停动效和阴影效果
- 键盘导航支持
- 回到顶部按钮
- 无 JavaScript 回退方案

### 4. 视觉设计
- 自定义配色方案 (primary: #1e40af, secondary: #3b82f6)
- 渐变色背景 (gradient-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%))
- 卡片固定高度设计 (240px)
- 文字阴影和过渡动画

## 数据管理

### 内容组织
- 硬编码的卡片数据数组，存储在 `index.html` 的 JavaScript 中
- 每个条目包含：标题、描述、链接、分类、标签、更新时间
- 支持分类展示和标签筛选

### 内容类型
- **Investment**: 投资研究类内容

## 开发规范

### 代码风格
- 遵循原生 JavaScript 编码规范
- 使用语义化 HTML 标签
- CSS 采用 Tailwind 实用类名
- 保持单文件架构，避免过度工程化

### 扩展方式
1. 新增内容页面时，在 `investment/` 目录创建 HTML 文件
2. 在 `index.html` 的 `cardsData` 数组中添加对应条目
3. 更新无脚本回退的链接列表

## 部署说明

### Vercel 部署
- 自动从 GitHub 仓库部署
- SPA 路由配置确保所有路径都指向 `index.html`
- 忽略不必要的文件和目录

### 本地开发
- 可直接在浏览器中打开 `index.html` 进行预览
- 使用 Python HTTP 服务器进行本地测试：`python3 -m http.server 8000`

## 性能优化

### 加载优化
- CDN 引入外部资源，利用浏览器缓存
- 无构建步骤，减少部署时间
- 轻量级 JavaScript，无框架依赖

### 用户体验
- 渐进式增强，支持无 JavaScript 环境
- 响应式图片和图标
- 平滑的过渡动画和交互反馈

## 后续迭代建议

1. **内容管理**: 考虑使用 JSON 文件管理卡片数据，便于维护
2. **主题切换**: 添加深色模式支持
3. **分类筛选**: 实现更复杂的分类和标签筛选功能
4. **性能监控**: 添加简单的性能指标收集
5. **SEO优化**: 完善 meta 标签和结构化数据

## 注意事项

- 本项目为静态网站，无后端服务
- 所有内容更新需要手动修改 HTML 文件
- 投资建议内容仅供参考，不构成实际投资建议
- 保持极简架构，避免引入不必要的复杂性