import React from 'react';
import { Check, Zap, Crown, Shield } from 'lucide-react';

export function PricingView() {
  const tiers = [
    {
      name: 'Free Tier',
      price: '$0',
      period: '/forever',
      description: 'Basic access to the SlipMint ecosystem for casual learners.',
      icon: Shield,
      color: 'text-slate-400',
      bg: 'bg-slate-800/50',
      border: 'border-slate-800',
      features: [
        'Limited weekly reports',
        'Basic research access',
        'Community newsletter',
        'Public AI Bot features'
      ],
      button: 'Current Plan',
      buttonVariant: 'bg-slate-800 text-slate-300 cursor-default'
    },
    {
      name: 'Premium Tier',
      price: '$49',
      period: '/month',
      description: 'Full research access and AI tools for dedicated crypto investors.',
      icon: Zap,
      color: 'text-amber-400',
      bg: 'bg-amber-900/10',
      border: 'border-amber-500/30',
      features: [
        'Full research library access',
        'Weekly market briefings',
        'SlipMint AI Telegram Bot (Pro)',
        'Premium dashboards & charts',
        'Pay via Paystack or Crypto'
      ],
      button: 'Upgrade to Premium',
      buttonVariant: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all'
    },
    {
      name: 'Institutional',
      price: '$299',
      period: '/month',
      description: 'Advanced analytics and custom intelligence for funds and desks.',
      icon: Crown,
      color: 'text-purple-400',
      bg: 'bg-purple-900/10',
      border: 'border-purple-500/30',
      features: [
        'Everything in Premium',
        'Advanced on-chain analytics',
        'API access for trading bots',
        'Custom intelligence reports',
        'Priority Slack/Telegram support',
        '1-on-1 strategy calls'
      ],
      button: 'Contact Sales',
      buttonVariant: 'bg-slate-800 text-white hover:bg-slate-700 transition-colors'
    }
  ];

  return (
    <div className="space-y-10 pb-10">
      <div className="text-center max-w-2xl mx-auto mt-6">
        <h1 className="text-3xl font-bold text-slate-100">Unlock the Luckman World Ecosystem</h1>
        <p className="text-slate-400 mt-3 text-lg">
          Subscribe via Paystack or connect your wallet to use Xpert Token. 
          Get unparalleled market intelligence and AI-driven automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.name} className={`rounded-2xl border ${tier.border} ${tier.bg} p-8 flex flex-col relative overflow-hidden`}>
            {tier.name === 'Premium' && (
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
            )}
            
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-slate-900/50 ${tier.color}`}>
                <tier.icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">{tier.name}</h2>
            </div>
            
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">{tier.price}</span>
              <span className="text-slate-400 font-medium">{tier.period}</span>
            </div>
            
            <p className="text-sm text-slate-400 mb-8 flex-1">{tier.description}</p>
            
            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 shrink-0 ${tier.color}`} />
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-3 rounded-xl font-bold ${tier.buttonVariant}`}>
              {tier.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
