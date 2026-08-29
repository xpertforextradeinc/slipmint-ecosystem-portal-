import React from 'react';
import { mockReports } from '../data/mock';
import { cn } from '../lib/utils';
import { Lock, FileText, Clock, ChevronRight } from 'lucide-react';

export function ResearchView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Research Library</h1>
        <p className="text-slate-400 mt-1">Premium institutional reports, market briefs, and technical analysis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockReports.map((report) => {
          const isLocked = report.tier !== 'Free'; // Simulating Free tier user
          
          return (
            <div key={report.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col hover:border-slate-700 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <span className={cn(
                  "text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full",
                  report.tier === 'Free' ? "bg-slate-800 text-slate-300" :
                  report.tier === 'Premium' ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                  "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                )}>
                  {report.tier}
                </span>
                <span className="flex items-center text-xs text-slate-500 gap-1 font-medium">
                  <Clock className="w-3 h-3" />
                  {report.readTime}
                </span>
              </div>
              
              <h2 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                {report.title}
              </h2>
              
              <p className="text-sm text-slate-400 mb-6 flex-1 line-clamp-3">
                {report.summary}
              </p>
              
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                <span className="text-xs font-medium text-slate-500">{report.category}</span>
                {isLocked ? (
                  <button className="flex items-center gap-1.5 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors">
                    <Lock className="w-4 h-4" />
                    Unlock
                  </button>
                ) : (
                  <button className="flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                    Read Report
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
