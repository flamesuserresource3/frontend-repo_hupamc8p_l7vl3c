import React from 'react';
import Spline from '@splinetool/react-spline';
import { Skull, Zap, Eye, Flame, Crosshair } from 'lucide-react';

const StatPill = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 rounded-full bg-white/5 backdrop-blur px-3 py-1 text-xs text-zinc-200 border border-white/10">
    <Icon size={14} className="text-zinc-200" />
    <span className="tracking-wide">{label}</span>
  </div>
);

export default function HeroCover() {
  return (
    <section className="relative w-full h-[80vh] lg:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5iNiBKPngFKgC6zA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 200px 60px rgba(0,0,0,0.8)' }} />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <StatPill icon={Skull} label="ParasiteChain.io — Horror Edition" />
          <StatPill icon={Eye} label="Parasitic Vision Online" />
          <StatPill icon={Zap} label="Chain-Infection Combo" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-100 max-w-4xl leading-tight">
          Become the crawling flesh-parasite. Consume, Corrupt, Puppeteer, Spread.
        </h1>

        <p className="mt-4 text-zinc-300 max-w-2xl">
          Dark, wet, biomech whispers. Every body is a door. Every alley, a throat.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#play" className="group inline-flex items-center gap-2 rounded-full bg-red-600/90 hover:bg-red-600 text-white px-5 py-2.5 transition">
            <Flame size={16} />
            <span>Begin Infection Run</span>
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-100 px-5 py-2.5 border border-white/10 transition">
            <Crosshair size={16} />
            <span>How It Works</span>
          </a>
        </div>
      </div>
    </section>
  );
}
