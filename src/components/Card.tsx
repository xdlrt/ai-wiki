import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { CardData } from '../types/card';
import { getCardIcon, getMarketColor } from '../data/cards';

interface CardProps {
  data: CardData;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  const icon = getCardIcon(data.type);
  const colorClass = getMarketColor(data.market);

  return (
    <a
      href={data.href}
      className="card-hover card-fixed bg-white rounded-lg border border-gray-200 shadow-sm p-6 block no-underline hover:no-underline"
    >
      <div className="card-header">
        <div className="flex items-start">
          <div className={`${colorClass} w-7 h-7 rounded-md mr-3 flex items-center justify-center`}>
            <FontAwesomeIcon icon={icon} className="text-base" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{data.title}</h3>
          </div>
        </div>
      </div>
      <div className="card-content">
        <p className="text-gray-600 mb-2 line-clamp-2 text-sm leading-relaxed">
          {data.desc}
        </p>
        <div className="card-tags">
          <div className="flex items-center flex-wrap gap-1">
            {data.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
              >
                {tag}
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
        </div>
      </div>
    </a>
  );
};
