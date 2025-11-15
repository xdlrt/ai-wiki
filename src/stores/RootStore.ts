import { makeAutoObservable } from 'mobx';
import type { CardData } from '../types/card';

// 根存储类，管理整个应用的状态
export class RootStore {
  // 导航和筛选相关状态
  searchQuery: string = '';
  currentMarket: 'all' | 'us-stock' | 'a-share' | 'hk-stock' | 'crypto' = 'all';
  currentType: 'all' | 'stock' | 'etf' | 'crypto' | 'strategy' = 'all';
  
  // UI状态
  isLoading: boolean = false;
  error: string | null = null;
  
  constructor() {
    makeAutoObservable(this);
  }

  // 导航和筛选相关方法
  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  setCurrentMarket(market: 'all' | 'us-stock' | 'a-share' | 'hk-stock' | 'crypto') {
    this.currentMarket = market;
  }

  setCurrentType(type: 'all' | 'stock' | 'etf' | 'crypto' | 'strategy') {
    this.currentType = type;
  }

  clearSearch() {
    this.searchQuery = '';
  }

  // UI状态管理方法
  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  clearError() {
    this.error = null;
  }

  // 搜索和筛选逻辑
  filterCards(cards: CardData[]): CardData[] {
    if (!cards || !Array.isArray(cards)) return [];
    
    return cards.filter(card => {
      // 搜索筛选
      const matchesSearch = this.matchesSearch(card);
      // 市场筛选
      const matchesMarket = this.currentMarket === 'all' || card.market === this.currentMarket;
      // 类型筛选
      const matchesType = this.currentType === 'all' || card.type === this.currentType;
      
      return matchesSearch && matchesMarket && matchesType;
    });
  }

  private matchesSearch(card: CardData): boolean {
    if (!this.searchQuery.trim()) return true;
    
    const query = this.searchQuery.toLowerCase();
    const searchFields = [
      card.title,
      card.desc,
      card.category,
      ...card.tags
    ].map(field => field.toLowerCase());
    
    return searchFields.some(field => field.includes(query));
  }

  // 重置所有筛选条件
  resetFilters() {
    this.searchQuery = '';
    this.currentMarket = 'all';
    this.currentType = 'all';
  }

  // 获取当前筛选状态的描述
  get filterDescription(): string {
    const filters = [];
    if (this.searchQuery) filters.push(`搜索:"${this.searchQuery}"`);
    if (this.currentMarket !== 'all') filters.push(`市场:"${this.currentMarket}"`);
    if (this.currentType !== 'all') filters.push(`类型:"${this.currentType}"`);
    
    return filters.length > 0 ? filters.join(', ') : '无筛选条件';
  }
}

// 创建全局单例实例
export const rootStore = new RootStore();
