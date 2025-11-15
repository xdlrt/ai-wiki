import { observer } from 'mobx-react-lite';
import { rootStore } from '../stores';
import { FilterButton } from './FilterButton';
import { FilterGroup } from './FilterGroup';

const MARKET_OPTIONS = [
  { value: 'all', label: '全部' },
  { value: 'a-share', label: 'A股' },
  { value: 'us-stock', label: '美股' },
  { value: 'hk-stock', label: '港股' },
] as const;

const TYPE_OPTIONS = [
  { value: 'all', label: '全部' },
  { value: 'etf', label: 'ETF' },
  { value: 'stock', label: '个股' },
] as const;

export const FilterBar = observer(() => {
  const handleMarketChange = (market: string) => {
    rootStore.setCurrentMarket(market as any);
  };

  const handleTypeChange = (type: string) => {
    rootStore.setCurrentType(type as any);
  };

  return (
    <>
      <FilterGroup title="市场筛选">
        {MARKET_OPTIONS.map((option) => (
          <FilterButton
            key={option.value}
            label={option.label}
            value={option.value}
            isActive={rootStore.currentMarket === option.value}
            onClick={handleMarketChange}
            dataName="market"
          />
        ))}
      </FilterGroup>
      <FilterGroup title="标的品种">
        {TYPE_OPTIONS.map((option) => (
          <FilterButton
            key={option.value}
            label={option.label}
            value={option.value}
            isActive={rootStore.currentType === option.value}
            onClick={handleTypeChange}
            dataName="type"
          />
        ))}
      </FilterGroup>
    </>
  );
});