import React from 'react';
import { Bell, Wallet, User } from 'lucide-react';

export function TopNav() {
  return (
    <header className="h-16 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        {/* Breadcrumb or View Title could go here */}
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full border border-slate-900"></span>
        </button>

        <div className="h-8 w-px bg-slate-800 mx-1"></div>

        <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors border border-slate-700">
          <Wallet className="w-4 h-4 text-emerald-400" />
          Connect Wallet
        </button>

        <button className="flex items-center gap-2 pl-2 pr-4 py-1.5 bg-slate-800 rounded-full border border-slate-700 hover:border-slate-600 transition-colors">
          <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center">
            <User className="w-4 h-4 text-slate-300" />
          </div>
          <span className="text-sm font-medium text-slate-200">Free Tier</span>
        </button>
      </div>
    </header>
  );
}
