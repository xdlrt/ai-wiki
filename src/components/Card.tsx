import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { CardData } from '../types/card';
import { getCardIcon, getMarketColor } from '../data/cards';
import { rootStore } from '../stores';

interface CardProps {
  data: CardData;
  searchTerm?: string;
  onTagClick?: (tag: string) => void;
}

// 搜索关键词高亮函数
const highlightSearchTerm = (text: string, searchTerm: string): string | React.ReactNode => {
  if (!searchTerm.trim()) return text;

  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="bg-yellow-200 px-1 rounded">
            {part}
          </mark>
        ) : part
      )}
    </>
  );
};

export const Card: React.FC<CardProps> = ({ data, searchTerm = '', onTagClick }) => {
  const icon = getCardIcon(data.type);
  const colorClass = getMarketColor(data.market);

  // 处理标签点击事件
  const handleTagClick = useCallback((e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (onTagClick) {
      onTagClick(tag);
    } else {
      // 默认行为：设置搜索词为标签
      rootStore.setSearchQuery(tag);
    }
  }, [onTagClick]);

  // 处理键盘事件
  const handleKeyDown = useCallback((e: React.KeyboardEvent, tag: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleTagClick(e as any, tag);
    }
  }, [handleTagClick]);

  // 高亮标题和描述
  const highlightedTitle = highlightSearchTerm(data.title, searchTerm);
  const highlightedDesc = highlightSearchTerm(data.desc, searchTerm);

  return (
    <a
      href={data.href}
      className="card-hover card-fixed bg-white rounded-lg border border-gray-200 shadow-sm p-6 block no-underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-indigo-600"
      aria-label={data.title}
      tabIndex={0}
    >
      <div className="card-header">
        <div className="flex items-start">
          <div className={`${colorClass} w-7 h-7 rounded-md mr-3 flex items-center justify-center`}>
            <FontAwesomeIcon icon={icon} className="text-base" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
              {highlightedTitle}
            </h3>
          </div>
        </div>
      </div>
      <div className="card-content">
        <p className="text-gray-600 mb-2 line-clamp-2 text-sm leading-relaxed">
          {highlightedDesc}
        </p>
        <div className="card-tags">
          <div className="flex items-center flex-wrap gap-1">
            {data.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="tag px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded cursor-pointer hover:bg-gray-200 transition-colors select-none"
                data-tag={tag}
                tabIndex={0}
                onClick={(e) => handleTagClick(e, tag)}
                onKeyDown={(e) => handleKeyDown(e, tag)}
                role="button"
                aria-label={`搜索标签: ${tag}`}
              >
                {highlightSearchTerm(tag, searchTerm)}
              </span>
            ))}
            {data.tags.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-500 rounded">
                +{data.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2 w-full flex justify-between items-center">
          <span>更新时间：{data.updatedAt}</span>
          <span className="text-xs text-gray-400">
            {data.category}
          </span>
        </div>
      </div>
    </a>
  );
};
