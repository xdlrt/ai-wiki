import type { CardData } from '../types/card';
import {
  faFileLines,
  faChartLine,
  faCoins,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

export const cardsData: CardData[] = [
  {
    title: 'MCD股票策略分析',
    desc: '网格策略 vs 期权轮策略',
    href: '/investment/mcd-stock-strategy-analysis.html',
    category: 'Investment',
    tags: ['MCD', '网格', '期权轮'],
    updatedAt: '2025-11',
    market: 'us-stock',
    type: 'stock'
  },
  {
    title: 'VOO 与 SPY 深度对比',
    desc: '长期买入持有策略的最佳选择，费用率与追踪误差的全方位对比分析',
    href: '/investment/voo_vs_spy.html',
    category: 'Investment',
    tags: ['VOO', 'SPY'],
    updatedAt: '2025-11',
    market: 'us-stock',
    type: 'etf'
  },
  {
    title: '美股ETF长期投资指南',
    desc: '科学配置，稳健增值，实现长期财务目标，ETF筛选标准与配置方案',
    href: '/investment/us_etf.html',
    category: 'Investment',
    tags: ['长期策略'],
    updatedAt: '2025-11',
    market: 'us-stock',
    type: 'etf'
  },
  {
    title: 'APLY长期股息投资价值分析',
    desc: '高收益背后的风险与机遇，苹果期权收益ETF的投资价值评估',
    href: '/investment/aply-analysis.html',
    category: 'Investment',
    tags: ['APLY', '股息', 'APPL'],
    updatedAt: '2025-11',
    market: 'us-stock',
    type: 'etf'
  },
  {
    title: 'SGOV 投资分析',
    desc: '超短期美国国债 ETF 的长期持有价值',
    href: '/investment/sgov.html',
    category: 'Investment',
    tags: ['SGOV', '现金'],
    updatedAt: '2025-11',
    market: 'us-stock',
    type: 'etf'
  },
  {
    title: '华泰柏瑞中证红利低波 ETF 联接',
    desc: '现金流策略的理想选择，高股息 + 低波动双重特性',
    href: '/investment/007466.html',
    category: 'Investment',
    tags: ['低波动', '股息'],
    updatedAt: '2025-11',
    market: 'a-share',
    type: 'etf'
  },
  {
    title: 'JEPQ vs QYLD 高收益ETF对比',
    desc: '纳斯达克100备兑看涨期权策略深度分析，JEPQ与QYLD全面对比',
    href: '/investment/jepq-vs-qyld.html',
    category: 'Investment',
    tags: ['JEPQ', 'QYLD', 'NASDAQ100'],
    updatedAt: '2025-11',
    market: 'us-stock',
    type: 'etf'
  },
  {
    title: 'UVXY 反向拆分历史分析',
    desc: '波动率ETF结构性缺陷深度解析，12次反向拆分历史回顾与投资策略',
    href: '/investment/uvxy-reverse-split-history-analysis.html',
    category: 'Investment',
    tags: ['UVXY', '波动率'],
    updatedAt: '2025-11',
    market: 'us-stock',
    type: 'etf'
  },
  {
    title: 'A股银行股票与ETF投资分析',
    desc: '股息率、波动率、成长性与基本面四大维度深度解析，银行投资标的推荐',
    href: '/investment/bank-stocks-etf-analysis.html',
    category: 'Investment',
    tags: ['股息', '低波动'],
    updatedAt: '2025-11',
    market: 'a-share',
    type: 'etf'
  }
];

// 根据卡片类型返回对应的图标
export const getCardIcon = (type: string) => {
  switch (type) {
    case 'stock':
      return faChartLine;
    case 'etf':
      return faCoins;
    case 'crypto':
      return faCoins;
    case 'strategy':
      return faChartBar;
    default:
      return faFileLines;
  }
};

// 根据市场类型返回对应的图标颜色
export const getMarketColor = (market: string) => {
  switch (market) {
    case 'us-stock':
      return 'bg-blue-50 text-blue-600';
    case 'a-share':
      return 'bg-red-50 text-red-600';
    case 'hk-stock':
      return 'bg-green-50 text-green-600';
    case 'crypto':
      return 'bg-yellow-50 text-yellow-600';
    default:
      return 'bg-gray-50 text-gray-600';
  }
};