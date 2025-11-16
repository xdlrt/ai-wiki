import { Card } from './Card';
import { FilterBar } from './FilterBar';
import { ResultsCount } from './ResultsCount';
import { ActiveFilters } from './ActiveFilters';
import { cardsData } from '../data/cards';
import { rootStore } from '../stores';
import { observer } from 'mobx-react-lite';

const Home = observer(() => {
  const filteredCards = rootStore.filterCards(cardsData);

  return (
    <>
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
    </>
  );
});

export default Home;

