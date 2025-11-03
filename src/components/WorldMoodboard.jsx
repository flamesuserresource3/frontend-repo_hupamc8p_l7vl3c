import React from 'react';
import { Eye, Flame, Skull } from 'lucide-react';

const MoodItem = ({ title, desc }) => (
  <div className="rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black/60 p-5">
    <h4 className="text-zinc-100 font-medium">{title}</h4>
    <p className="text-zinc-300/90 text-sm mt-1">{desc}</p>
  </div>
);

export default function WorldMoodboard() {
  return (
    <section className="relative py-14 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100">A Living City, Half-Organ, Half-Machine</h2>
            <p className="mt-2 text-zinc-300 max-w-3xl">Fog, wet shine, low glow. Whispering vents and pulsing eggs. Every corridor breathes.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
            <Eye size={14} /> Visuals: Carrion • Scorn • Inside • Blasphemous
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MoodItem title="Meat-Pipes" desc="Veins along the walls, flexing with distant pumps." />
          <MoodItem title="Breathing Vents" desc="Rust grates inhaling damp air, exhaling whispers." />
          <MoodItem title="Flesh Altars" desc="Offerings to whatever woke beneath the city." />
          <MoodItem title="Parasite Eggs" desc="Pulsing pockets of wet light, ready to hatch." />
          <MoodItem title="Heartbeat HUD" desc="The UI is your pulse, rising with hunger." />
          <MoodItem title="Shadows & Flashlights" desc="Detection warps the screen into static and panic." />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300">
            <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded-full"><Flame size={12} className="text-red-400"/> Apex Mode</span>
            <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded-full"><Skull size={12} className="text-red-400"/> Elegant Horror</span>
            <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded-full"><Eye size={12} className="text-red-400"/> Parasitic Vision</span>
          </div>
          <p className="text-sm text-zinc-300 mt-3">Browser WebGL. Moody shaders, slick motion—not cartoony. Designed for tense, stylish violence—disturbing but elegant.</p>
        </div>
      </div>
    </section>
  );
}
