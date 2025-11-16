import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsTable from './CardsTable';
import { CardEditDrawer } from './CardEditDrawer';
import { cardsData } from '../data/cards';
import type { CardData } from '../types/card';

// 检查是否是本地环境
const isLocalEnvironment = (): boolean => {
  const hostname = window.location.hostname;
  return (
    hostname === 'localhost' ||
    hostname === '127.0.0.1'
  );
};

const Admin = () => {
  const navigate = useNavigate();
  const [isLocal, setIsLocal] = useState<boolean | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingCard, setEditingCard] = useState<CardData | null>(null);
  const [cards, setCards] = useState<CardData[]>(cardsData);

  useEffect(() => {
    const local = isLocalEnvironment();
    setIsLocal(local);

    if (!local) {
      // 如果不是本地环境，重定向到首页
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleEditCard = (card: CardData) => {
    setEditingCard(card);
    setIsDrawerOpen(true);
  };

  const handleSaveCard = (updatedCard: CardData) => {
    setCards(prevCards =>
      prevCards.map(card =>
        card.href === updatedCard.href ? updatedCard : card
      )
    );
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setEditingCard(null);
  };

  // 在检查完成前不渲染任何内容
  if (isLocal === null || !isLocal) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col gradient-bg-elegant font-sans">
      <div className="flex-1 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">管理后台</h1>
          <p className="text-gray-600 mb-2">
            欢迎来到管理后台。此页面仅在本地环境可访问。
          </p>
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">卡片数据管理</h2>
            <CardsTable data={cards} onEdit={handleEditCard} />
          </div>
        </div>
      </div>

      <CardEditDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        card={editingCard}
        onSave={handleSaveCard}
      />
    </div>
  );
};

export default Admin;

