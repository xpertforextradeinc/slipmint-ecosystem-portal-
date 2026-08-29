export type ViewState = 'dashboard' | 'research' | 'ai-bot' | 'token' | 'upgrade';
export type Tier = 'Free' | 'Premium' | 'Institutional';

export interface Report {
  id: string;
  title: string;
  category: string;
  date: string;
  tier: Tier;
  readTime: string;
  summary: string;
}
