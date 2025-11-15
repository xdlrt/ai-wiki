import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMagnifyingGlass, faFileLines, faChartLine, faCoins } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col gradient-bg-elegant font-sans">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-primary text-2xl mr-3" />
            <span className="font-bold text-xl text-gray-900 hidden sm:block">投资研究归档</span>
            <span className="font-bold text-lg text-gray-900 sm:hidden">投资研究</span>
          </div>
          <div className="relative group">
            <input 
              type="text"
              className="w-40 sm:w-64 rounded-lg bg-gray-50 text-gray-900 px-3 py-2 pl-9 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-200 group-hover:bg-gray-100"
              placeholder="搜索投资研究..."
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-primary transition-colors duration-200" />
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 示例卡片 */}
            <div className="card-hover card-fixed bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <div className="card-header">
                <div className="flex items-start">
                  <div className="bg-blue-50 w-7 h-7 rounded-md mr-3 flex items-center justify-center">
                    <FontAwesomeIcon icon={faFileLines} className="text-blue-600 text-base" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">示例投资分析</h3>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p className="text-gray-600 mb-2 line-clamp-2">
                  这是一个使用 Tailwind CSS 配置的示例卡片，展示了自定义的样式和布局。
                </p>
                <div className="card-tags">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">ETF</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">美股</span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2 w-full">
                  更新时间：2025-11
                </div>
              </div>
            </div>

            {/* 第二个示例卡片 */}
            <div className="card-hover card-fixed bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <div className="card-header">
                <div className="flex items-start">
                  <div className="bg-green-50 w-7 h-7 rounded-md mr-3 flex items-center justify-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-green-600 text-base" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">策略分析</h3>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p className="text-gray-600 mb-2 line-clamp-2">
                  展示了完整的卡片布局，包括头部、内容和底部区域的设计。
                </p>
                <div className="card-tags">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">策略</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">分析</span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2 w-full">
                  更新时间：2025-11
                </div>
              </div>
            </div>

            {/* 第三个示例卡片 */}
            <div className="card-hover card-fixed bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <div className="card-header">
                <div className="flex items-start">
                  <div className="bg-purple-50 w-7 h-7 rounded-md mr-3 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCoins} className="text-purple-600 text-base" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">投资组合</h3>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p className="text-gray-600 mb-2 line-clamp-2">
                  完整的 Tailwind CSS 配置已经生效，包括所有自定义的 utilities 和样式。
                </p>
                <div className="card-tags">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">组合</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">配置</span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2 w-full">
                  更新时间：2025-11
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">本目录仅供参考，不构成投资建议。投资有风险，入市需谨慎。</p>
          <div className="flex justify-center items-center space-x-4">
            <a href="https://github.com/xdlrt/ai-wiki" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-primary transition-colors duration-200">
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
              <span className="ml-2">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
