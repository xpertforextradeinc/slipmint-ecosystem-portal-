import { Report } from '../types';

export const mockReports: Report[] = [
  {
    id: '1',
    title: 'Weekly Market Brief: Macro Headwinds',
    category: 'Market Brief',
    date: 'Oct 24, 2026',
    tier: 'Free',
    readTime: '5 min',
    summary: 'Overview of global macro trends affecting crypto liquidity and Bitcoin price action.'
  },
  {
    id: '2',
    title: 'Bitcoin Trend Watch: Support Levels',
    category: 'Technical Analysis',
    date: 'Oct 23, 2026',
    tier: 'Premium',
    readTime: '8 min',
    summary: 'Deep dive into on-chain support levels, order book depth, and institutional flows for BTC.'
  },
  {
    id: '3',
    title: 'Risk & Structure: Q4 DeFi Yields',
    category: 'Risk Report',
    date: 'Oct 20, 2026',
    tier: 'Institutional',
    readTime: '15 min',
    summary: 'Comprehensive risk assessment of the top 10 DeFi yield protocols, smart contract audits, and TVL shifts.'
  },
  {
    id: '4',
    title: 'Altcoin Sector Rotation Analysis',
    category: 'Market Brief',
    date: 'Oct 18, 2026',
    tier: 'Premium',
    readTime: '10 min',
    summary: 'Tracking capital flows from majors into mid-cap infrastructure and AI-focused tokens.'
  },
  {
    id: '5',
    title: 'Q3 Institutional Inflows Report',
    category: 'Research Dashboard',
    date: 'Oct 15, 2026',
    tier: 'Institutional',
    readTime: '20 min',
    summary: 'Proprietary dashboard metrics analyzing ETF inflows, OTC desk balances, and whale accumulation.'
  }
];

export const chartData = [
  { name: 'Mon', btc: 62400, eth: 3100 },
  { name: 'Tue', btc: 63200, eth: 3150 },
  { name: 'Wed', btc: 62800, eth: 3080 },
  { name: 'Thu', btc: 64500, eth: 3250 },
  { name: 'Fri', btc: 65100, eth: 3300 },
  { name: 'Sat', btc: 64900, eth: 3280 },
  { name: 'Sun', btc: 66000, eth: 3400 },
];
