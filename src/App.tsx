import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Card } from './components/Card';
import { cardsData } from './data/cards';

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
            {cardsData.map((card, index) => (
              <Card key={index} data={card} />
            ))}
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
