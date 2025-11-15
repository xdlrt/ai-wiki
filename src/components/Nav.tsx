import React, { useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { rootStore } from '../stores';

export const Nav = observer(() => {
  const [searchValue, setSearchValue] = useState(rootStore.searchQuery);

  // 防抖处理搜索输入
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    
    // 简单的防抖实现
    const timeoutId = setTimeout(() => {
      rootStore.setSearchQuery(value);
    }, 150);
    
    // 清除之前的timeout
    const input = e.target;
    const existingTimeout = (input as any).searchTimeout;
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }
    (input as any).searchTimeout = timeoutId;
  }, []);

  const handleClearSearch = () => {
    setSearchValue('');
    rootStore.clearSearch();
  };

  return (
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
            value={searchValue}
            onChange={handleSearchChange}
            className="w-40 sm:w-64 rounded-lg bg-gray-50 text-gray-900 px-3 py-2 pl-9 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-200 group-hover:bg-gray-100"
            placeholder="搜索投资研究..."
          />
          <FontAwesomeIcon 
            icon={faMagnifyingGlass} 
            className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-primary transition-colors duration-200" 
          />
          <button
            onClick={handleClearSearch}
            className={`absolute right-1.5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center transition-all duration-200 ${
              searchValue ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ pointerEvents: searchValue ? 'auto' : 'none' }}
          >
            <FontAwesomeIcon icon={faXmark} className="text-xs" />
          </button>
        </div>
      </div>
    </nav>
  );
});