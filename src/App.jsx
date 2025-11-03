import React from 'react';
import HeroCover from './components/HeroCover';
import GameplayShowcase from './components/GameplayShowcase';
import KillChainMeter from './components/KillChainMeter';
import WorldMoodboard from './components/WorldMoodboard';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-inter">
      <HeroCover />
      <GameplayShowcase />
      <KillChainMeter />
      <WorldMoodboard />

      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>ParasiteChain.io — Dark, wet, biomech infection runs.</p>
          <p className="text-zinc-500">“We need more flesh.”</p>
        </div>
      </footer>
    </div>
  );
}
