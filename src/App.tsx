import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Card } from './components/Card';
import { Nav } from './components/Nav';
import { FilterBar } from './components/FilterBar';
import { ResultsCount } from './components/ResultsCount';
import { ActiveFilters } from './components/ActiveFilters';
import { cardsData } from './data/cards';
import { rootStore } from './stores';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  // 使用useMemo来优化筛选性能
  const filteredCards = rootStore.filterCards(cardsData);

  return (
    <div className="min-h-screen flex flex-col gradient-bg-elegant font-sans">
      <Nav />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <section className="mb-4">
          <FilterBar />
          <ActiveFilters />
          <ResultsCount totalCount={cardsData.length} filteredCount={filteredCards.length} />
        </section>

        <section>
          {filteredCards.length === 0 ? (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg text-gray-800">
              无匹配结果，请更换关键词。
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredCards.map((card, index) => (
                <Card key={index} data={card} />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">本目录仅供参考，不构成投资建议。投资有风险，入市需谨慎。</p>
          <div className="flex justify-center items-center space-x-4">
            <a href="https://github.com/xdlrt/ai-wiki" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
              <span className="ml-2">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default App;
