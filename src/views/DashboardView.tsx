import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData, mockReports } from '../data/mock';
import { ArrowUpRight, Activity, Zap, ShieldAlert, Bot } from 'lucide-react';

export function DashboardView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Ecosystem Overview</h1>
        <p className="text-slate-400 mt-1">Welcome to the SlipMint & Luckman World intelligence dashboard.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between text-slate-400 mb-4">
            <span className="text-sm font-medium">BTC Price</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-100">$66,000</span>
            <span className="text-sm font-medium text-emerald-400 flex items-center">
              +2.4% <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between text-slate-400 mb-4">
            <span className="text-sm font-medium">Xpert Token Balance</span>
            <Zap className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-100">0.00</span>
            <span className="text-sm font-medium text-slate-500">XPERT</span>
          </div>
          <div className="mt-2 text-xs text-slate-500">Connect wallet to view</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 border border-emerald-500/20 rounded-xl p-5 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
          <div className="flex items-center justify-between text-emerald-200/70 mb-4 relative z-10">
            <span className="text-sm font-medium">SlipMint AI Status</span>
            <Bot className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-xl font-bold text-emerald-50">Active on Telegram</span>
          </div>
          <div className="mt-2 text-xs text-emerald-400/80 relative z-10">Monitoring 12 markets</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col min-h-[400px]">
          <h2 className="text-lg font-bold text-slate-100 mb-6">Market Action (BTC/USD)</h2>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} domain={['auto', 'auto']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '0.5rem', color: '#f1f5f9' }}
                  itemStyle={{ color: '#34d399' }}
                />
                <Line type="monotone" dataKey="btc" stroke="#34d399" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#34d399', stroke: '#0f172a', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Latest Reports List */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-100">Latest Intelligence</h2>
            <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors">View All</button>
          </div>
          
          <div className="space-y-4 flex-1">
            {mockReports.slice(0, 4).map((report) => (
              <div key={report.id} className="p-3 rounded-lg border border-slate-800/50 bg-slate-950/50 hover:bg-slate-800/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    "text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full",
                    report.tier === 'Free' ? "bg-slate-800 text-slate-300" :
                    report.tier === 'Premium' ? "bg-amber-900/30 text-amber-400" :
                    "bg-purple-900/30 text-purple-400"
                  )}>
                    {report.tier}
                  </span>
                  <span className="text-xs text-slate-500">{report.date}</span>
                </div>
                <h3 className="text-sm font-medium text-slate-200 group-hover:text-emerald-400 transition-colors line-clamp-1">{report.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
