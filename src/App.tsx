import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { DashboardView } from './views/DashboardView';
import { ResearchView } from './views/ResearchView';
import { PricingView } from './views/PricingView';
import { ViewState } from './types';
import { Bot, Coins } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'research':
        return <ResearchView />;
      case 'upgrade':
        return <PricingView />;
      case 'ai-bot':
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30 mb-4">
              <Bot className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-100">SlipMint AI Telegram Bot</h2>
            <p className="text-slate-400 max-w-md mx-auto">
              Connect your Telegram account to access AI-assisted responses, crypto market updates, and premium member verification directly in your chats.
            </p>
            <button className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-colors">
              Connect to Telegram
            </button>
          </div>
        );
      case 'token':
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-900/30 flex items-center justify-center border border-emerald-500/30 mb-4">
              <Coins className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-100">Xpert Token Utility</h2>
            <p className="text-slate-400 max-w-md mx-auto">
              The proprietary asset powering the Luckman World ecosystem. Use XPERT for subscription payments, premium unlocks, and community governance.
            </p>
            <button className="mt-4 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30 font-bold rounded-xl transition-colors">
              Read Tokenomics
            </button>
          </div>
        );
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans selection:bg-emerald-500/30">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto h-full">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
}
