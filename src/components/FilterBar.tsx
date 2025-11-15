import { observer } from 'mobx-react-lite';
import { rootStore } from '../stores';

export const FilterBar = observer(() => {
  const handleMarketChange = (market: string) => {
    rootStore.setCurrentMarket(market as any);
  }

  const handleTypeChange = (type: string) => {
    rootStore.setCurrentType(type as any);
  }

  return (
    <>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-700">市场筛选</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className={`market-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors ${rootStore.currentMarket === 'all'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300'
              }`}
            onClick={() => handleMarketChange('all')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleMarketChange('all');
              }
            }}
            data-market="all"
            aria-pressed={rootStore.currentMarket === 'all'}
            tabIndex={0}
          >
            全部
          </button>
          <button
            className={`market-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors ${rootStore.currentMarket === 'a-share'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300'
              }`}
            onClick={() => handleMarketChange('a-share')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleMarketChange('a-share');
              }
            }}
            data-market="a-share"
            aria-pressed={rootStore.currentMarket === 'a-share'}
            tabIndex={0}
          >
            A股
          </button>
          <button
            className={`market-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors ${rootStore.currentMarket === 'us-stock'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300'
              }`}
            onClick={() => handleMarketChange('us-stock')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleMarketChange('us-stock');
              }
            }}
            data-market="us-stock"
            aria-pressed={rootStore.currentMarket === 'us-stock'}
            tabIndex={0}
          >
            美股
          </button>
          <button
            className={`market-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors ${rootStore.currentMarket === 'hk-stock'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300'
              }`}
            onClick={() => handleMarketChange('hk-stock')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleMarketChange('hk-stock');
              }
            }}
            data-market="hk-stock"
            aria-pressed={rootStore.currentMarket === 'hk-stock'}
            tabIndex={0}
          >
            港股
          </button>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">标的品种</h3>
        <div className="flex flex-wrap gap-2">
          <button
            className={`type-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors ${rootStore.currentType === 'all'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300'
              }`}
            onClick={() => handleTypeChange('all')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTypeChange('all');
              }
            }}
            data-type="all"
            aria-pressed={rootStore.currentType === 'all'}
            tabIndex={0}
          >
            全部
          </button>
          <button
            className={`type-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors ${rootStore.currentType === 'etf'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300'
              }`}
            onClick={() => handleTypeChange('etf')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTypeChange('etf');
              }
            }}
            data-type="etf"
            aria-pressed={rootStore.currentType === 'etf'}
            tabIndex={0}
          >
            ETF
          </button>
          <button
            className={`type-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors ${rootStore.currentType === 'stock'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-700 border-gray-300'
              }`}
            onClick={() => handleTypeChange('stock')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTypeChange('stock');
              }
            }}
            data-type="stock"
            aria-pressed={rootStore.currentType === 'stock'}
            tabIndex={0}
          >
            个股
          </button>
        </div>
      </div>
    </>
  );
});