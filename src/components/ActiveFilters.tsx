import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { rootStore } from '../stores';

const MARKET_LABELS: Record<string, string> = {
  'a-share': 'A股',
  'us-stock': '美股',
  'hk-stock': '港股',
  'crypto': '加密货币',
};

const TYPE_LABELS: Record<string, string> = {
  'etf': 'ETF',
  'stock': '股票',
  'bond': '债券',
  'crypto': '加密货币',
  'strategy': '策略',
};

export const ActiveFilters = observer(() => {
  const hasFilters = 
    rootStore.searchQuery.trim() ||
    rootStore.currentMarket !== 'all' ||
    rootStore.currentType !== 'all' ||
    rootStore.currentTag !== 'all';

  if (!hasFilters) {
    return null;
  }

  const handleClearSearch = () => {
    rootStore.setSearchQuery('');
  };

  const handleClearMarket = () => {
    rootStore.setCurrentMarket('all');
  };

  const handleClearType = () => {
    rootStore.setCurrentType('all');
  };

  const handleClearTag = () => {
    rootStore.setCurrentTag('all');
  };

  const handleClearAll = () => {
    rootStore.resetFilters();
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      {rootStore.searchQuery.trim() && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium">
          <span>搜索: {rootStore.searchQuery}</span>
          <button
            onClick={handleClearSearch}
            className="hover:bg-indigo-200 rounded-full p-0.5 transition-colors"
            aria-label="清除搜索"
          >
            <FontAwesomeIcon icon={faXmark} className="text-xs" />
          </button>
        </span>
      )}
      
      {rootStore.currentMarket !== 'all' && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
          <span>市场: {MARKET_LABELS[rootStore.currentMarket] || rootStore.currentMarket}</span>
          <button
            onClick={handleClearMarket}
            className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
            aria-label="清除市场筛选"
          >
            <FontAwesomeIcon icon={faXmark} className="text-xs" />
          </button>
        </span>
      )}
      
      {rootStore.currentType !== 'all' && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
          <span>标的: {TYPE_LABELS[rootStore.currentType] || rootStore.currentType}</span>
          <button
            onClick={handleClearType}
            className="hover:bg-green-200 rounded-full p-0.5 transition-colors"
            aria-label="清除类型筛选"
          >
            <FontAwesomeIcon icon={faXmark} className="text-xs" />
          </button>
        </span>
      )}
      
      {rootStore.currentTag !== 'all' && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
          <span>标签: {rootStore.currentTag}</span>
          <button
            onClick={handleClearTag}
            className="hover:bg-purple-200 rounded-full p-0.5 transition-colors"
            aria-label="清除标签筛选"
          >
            <FontAwesomeIcon icon={faXmark} className="text-xs" />
          </button>
        </span>
      )}
      
      <button
        onClick={handleClearAll}
        className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
      >
        清除全部
      </button>
    </div>
  );
});

