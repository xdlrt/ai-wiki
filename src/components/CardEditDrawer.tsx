import { useState, useEffect } from 'react';
import type { CardData } from '../types/card';

interface CardEditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  card: CardData | null;
  onSave: (updatedCard: CardData) => void;
}

export function CardEditDrawer({ isOpen, onClose, card, onSave }: CardEditDrawerProps) {
  const [formData, setFormData] = useState<CardData>({
    title: '',
    desc: '',
    href: '',
    category: '',
    tags: [],
    updatedAt: '',
    market: 'us-stock',
    type: 'etf'
  });

  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (card) {
      setFormData(card);
      setTagInput(card.tags.join(', '));
    }
  }, [card]);

  if (!isOpen || !card) return null;

  const handleInputChange = (field: keyof CardData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTagsChange = (value: string) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData(prev => ({ ...prev, tags }));
    setTagInput(value);
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30 transition-opacity" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-6 border-b bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-900">编辑卡片</h2>
            <button onClick={onClose} className="rounded-md text-gray-400 hover:text-gray-500 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">标题</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                    placeholder="输入卡片标题"
                  />
                </div>
                
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">描述</label>
                  <textarea
                    value={formData.desc}
                    onChange={(e) => handleInputChange('desc', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                    placeholder="输入卡片描述"
                  />
                </div>
                
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">链接</label>
                  <input
                    type="text"
                    value={formData.href}
                    onChange={(e) => handleInputChange('href', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                    placeholder="https://example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">分类</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                    placeholder="输入分类"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">更新时间</label>
                  <input
                    type="text"
                    value={formData.updatedAt}
                    onChange={(e) => handleInputChange('updatedAt', e.target.value)}
                    placeholder="2025-11"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">标签 (用逗号分隔)</label>
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => handleTagsChange(e.target.value)}
                  placeholder="例如: ETF, 美股, 投资"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">市场</label>
                  <select
                    value={formData.market}
                    onChange={(e) => handleInputChange('market', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  >
                    <option value="us-stock">美股</option>
                    <option value="a-share">A股</option>
                    <option value="hk-stock">港股</option>
                    <option value="crypto">加密货币</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">类型</label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  >
                    <option value="stock">股票</option>
                    <option value="etf">ETF</option>
                    <option value="crypto">加密货币</option>
                    <option value="strategy">策略</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t p-6 bg-gray-50">
            <div className="flex justify-end space-x-4">
              <button onClick={onClose} className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                取消
              </button>
              <button onClick={handleSave} className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-colors">
                保存
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
