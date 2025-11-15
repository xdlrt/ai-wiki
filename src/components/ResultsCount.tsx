import React from 'react';
import { observer } from 'mobx-react-lite';
import { rootStore } from '../stores';

interface ResultsCountProps {
  totalCount: number;
  filteredCount: number;
}

export const ResultsCount = observer(({ totalCount, filteredCount }: ResultsCountProps) => {
  return (
    <div className="text-sm text-gray-600 mt-2">
      {rootStore.searchQuery || rootStore.currentMarket !== 'all' || rootStore.currentType !== 'all'
        ? `共 ${filteredCount} 条结果`
        : `共 ${totalCount} 条结果`}
    </div>
  );
});