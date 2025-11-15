import { observer } from 'mobx-react-lite';
import { rootStore } from '../stores';
import { FilterButton } from './FilterButton';
import { FilterGroup } from './FilterGroup';
import { cardsData } from '../data/cards';

const MARKET_OPTIONS = [
  { value: 'all', label: '全部' },
  { value: 'a-share', label: 'A股' },
  { value: 'us-stock', label: '美股' },
  { value: 'hk-stock', label: '港股' },
] as const;

const TYPE_OPTIONS = [
  { value: 'all', label: '全部' },
  { value: 'etf', label: 'ETF' },
  { value: 'stock', label: '股票' },
  { value: 'bond', label: '债券' },
] as const;

export const FilterBar = observer(() => {
  // 从所有卡片中提取标签并去重
  const allTags = Array.from(
    new Set(cardsData.flatMap(card => card.tags))
  ).sort();

  const handleMarketChange = (market: string) => {
    rootStore.setCurrentMarket(market as any);
  };

  const handleTypeChange = (type: string) => {
    rootStore.setCurrentType(type as any);
  };

  const handleTagChange = (tag: string) => {
    rootStore.setCurrentTag(tag);
  };

  return (
    <>
      <FilterGroup title="市场">
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
      <FilterGroup title="标的">
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
      <FilterGroup title="标签">
        <FilterButton
          key="all"
          label="全部"
          value="all"
          isActive={rootStore.currentTag === 'all'}
          onClick={handleTagChange}
          dataName="tag"
        />
        {allTags.map((tag) => (
          <FilterButton
            key={tag}
            label={tag}
            value={tag}
            isActive={rootStore.currentTag === tag}
            onClick={handleTagChange}
            dataName="tag"
          />
        ))}
      </FilterGroup>
    </>
  );
});