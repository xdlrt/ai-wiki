export interface CardData {
  title: string;
  desc: string;
  href: string;
  category: string;
  tags: string[];
  updatedAt: string;
  market: 'us-stock' | 'a-share' | 'hk-stock' | 'crypto';
  type: 'stock' | 'etf' | 'crypto' | 'strategy';
}

export interface CardProps {
  data: CardData;
  icon?: string;
}