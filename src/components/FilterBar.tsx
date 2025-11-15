import React from 'react';
import { observer } from 'mobx-react-lite';
import { rootStore } from '../stores';

export const FilterBar = observer(() => {
  const handleMarketChange = (market: string) => {
    rootStore.setCurrentMarket(market as any);
  };

  const handleTypeChange = (type: string) => {
    rootStore.setCurrentType(type as any);
  };

  return (
    <>
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">市场筛选</h3>
        <div className="flex flex-wrap gap-2">
          <button
            className={`market-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
              rootStore.currentMarket === 'all' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
            onClick={() => handleMarketChange('all')}
            data-market="all"
          >
            全部
          </button>
          <button
            className={`market-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
              rootStore.currentMarket === 'a-share' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
            onClick={() => handleMarketChange('a-share')}
            data-market="a-share"
          >
            A股
          </button>
          <button
            className={`market-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
              rootStore.currentMarket === 'us-stock' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
            onClick={() => handleMarketChange('us-stock')}
            data-market="us-stock"
          >
            美股
          </button>
          <button
            className={`market-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
              rootStore.currentMarket === 'hk-stock' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
            onClick={() => handleMarketChange('hk-stock')}
            data-market="hk-stock"
          >
            港股
          </button>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">标的品种</h3>
        <div className="flex flex-wrap gap-2">
          <button
            className={`type-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
              rootStore.currentType === 'all' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
            onClick={() => handleTypeChange('all')}
            data-type="all"
          >
            全部
          </button>
          <button
            className={`type-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
              rootStore.currentType === 'etf' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
            onClick={() => handleTypeChange('etf')}
            data-type="etf"
          >
            ETF
          </button>
          <button
            className={`type-filter-btn px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
              rootStore.currentType === 'stock' 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-700 border-gray-300'
            }`}
            onClick={() => handleTypeChange('stock')}
            data-type="stock"
          >
            个股
          </button>
        </div>
      </div>
    </>
  );
});